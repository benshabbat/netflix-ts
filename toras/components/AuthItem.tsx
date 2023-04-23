import React from "react";
import { signIn } from "next-auth/react";
interface AuthItemProps {
  icon: eny;
  name: string;
}
const AuthItem: React.FC<AuthItemProps> = ({ icon, name }) => {
  return (
    <div
      onClick={() => signIn(name, { callbackUrl: "/profiles" })}
      className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
    >
      {icon}
    </div>
  );
};

export default AuthItem;
