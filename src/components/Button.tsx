"use client";
import { signIn, signOut } from "next-auth/react";

export default function Button({ name }: { name: string }) {
  return (
    <div>
      <button
        onClick={() => {
          if (name === "logout") {
            signOut();
          } else {
            signIn();
          }
        }}
        className="border-b-2 font-semibold bg-slate-900 py-1 px-3 rounded-xl  hover:border-green-500 hover:font-bold hover:text-green-500 hover:bg-slate-800"
      >
        {name === "signin" ? "signin" : "logout"}
      </button>
    </div>
  );
}
