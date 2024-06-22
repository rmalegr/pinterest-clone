"use client";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from '../shared/firebaseConfig'
import UserInfo from '../components/UserInfo';

function Profile({ params }) {
  const db = getFirestore(app)
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    console.log(params.userId.replace('%40', '@'))
    if (params) {

      getUserInfo(params.userId.replace('%40', '@'))
    }

  }, [params])


  const getUserInfo = async (email) => {
    const docRef = doc(db, "users", email)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setUserInfo(docSnap.data() )
    } else {
      console.log("No such document")
    }
  }

  return (

    <div>
      {userInfo ? <UserInfo userInfo={userInfo} /> : null}
    </div>
  )
}

export default Profile