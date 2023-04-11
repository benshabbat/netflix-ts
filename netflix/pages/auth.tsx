import { useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.jpg" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4 ">
              {variant === "register" && (
                <Input
                  id={"user"}
                  type={"text"}
                  onChange={(e: any) => {
                    setUser(e.target.value);
                  }}
                  value={user}
                  label={"Username"}
                />
              )}
              <Input
                id={"email"}
                type={"email"}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                value={email}
                label={"Email"}
              />
              <Input
                id={"password"}
                type={"password"}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                value={password}
                label={"Password"}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
            <p className="mt-12 text-neutral-200">
              First time using Netflix?
              <span
                onClick={toggleVariant}
                className="text-red-500 ml-1 cursor-pointer hover:underline  hover:text-red-600 transition"
              >
                Create an Account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
