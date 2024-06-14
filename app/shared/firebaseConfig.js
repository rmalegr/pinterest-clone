//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYkaKoCeTDp0UyK-WEVOrPU_aVytMh7so",
  authDomain: "clone-pinterest-de6f7.firebaseapp.com",
  projectId: "clone-pinterest-de6f7",
  storageBucket: "clone-pinterest-de6f7.appspot.com",
  messagingSenderId: "946122896529",
  appId: "1:946122896529:web:b23b827d5fe951fa27fb30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
