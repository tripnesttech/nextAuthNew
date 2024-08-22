"use client";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div >
        <div>
          Name: <span className="text-2xl">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
       
      </div>
    </div>
  );
}
