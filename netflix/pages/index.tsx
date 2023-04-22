import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MoviesList from "@/components/MoviesList";

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
  const { data } = useCurrentUser();
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList />
      </div>
    </>
  );
}
