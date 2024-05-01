"use client"
import { signOut, useSession } from "next-auth/react";
import SessionData from "./SessionData";

const AdminPage = () => {

  const { data: session, status } = useSession()

  return (

    <div className="h-screen flex items-center justify-center">
      <button onClick={() => {
        window.alert("hee")
        signOut();
      }} className=" text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm">
        Logout
      </button>
      <div>

        {status === "loading" ? (
          <div>Loading...</div>
        ) : (
          <SessionData session={session} />
        )}
      </div>
    </div>
  )
}

export default AdminPage;