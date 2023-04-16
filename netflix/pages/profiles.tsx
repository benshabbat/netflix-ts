import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
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
const profiles = () => {
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white">Who is Watching?</h1>
        <div className="flex items-center justify-center mt-10 gap-8">
          <div onClick={() => {}}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="w-44 h-44 rounded-md flex items-center justify-center border-2 
              border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden "
              >
                <img src="/images/default-blue.png" alt="blueProfile" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">Name</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profiles;
