import Input from "@/components/Input";

const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.jpg" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In </h2>
            <div className="flex flex-col gap-4 ">
              <Input id={"email"} type={"email"}
              //  onChange={} 
              // value={"email"} 
              label={"email"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
