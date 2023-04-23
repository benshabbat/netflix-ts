import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { data } = useCurrentUser();
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white">Who is Watching?</h1>
        <div className="flex items-center justify-center mt-10 gap-8">
          <div onClick={() => router.push("/")}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="w-44 rounded-md flex items-center justify-center border-2 
              border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden "
              >
                <img src="/images/davidchen.jpg" alt="davidchen" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {data?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profiles;
