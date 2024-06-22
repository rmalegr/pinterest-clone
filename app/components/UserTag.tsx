import { useSession } from "next-auth/react";
import Image from "next/image";


function UserTag() {
  //traemos la sesion
  const { data: session } = useSession();

  return (
    <div className="mt-8">
      {
        session ?
          <div className="flex gap-4">
            <Image src={session?.user?.image || ""}
              alt="userImage"
              width={50}
              height={50}
              className="rounded-full" />
            <div>
              <h3 className="text-[14px] font-medium">{session?.user?.name}</h3>
              <h4 className="text-[12px]">{session?.user?.email}</h4>
            </div>

          </div>
          : null
      }
    </div>
  )
}

export default UserTag