import { NextPageContext } from "next";
import {getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
export default function Home() {
  const {data}=useCurrentUser()
  return (
    <>
    <h1 className="text-4xl text-blue-600">Hello {data?.name}</h1>
      <button className="h-10 w-full bg-red-600" onClick={() => signOut()}>
        LogOut
      </button>
    </>
  );
}
