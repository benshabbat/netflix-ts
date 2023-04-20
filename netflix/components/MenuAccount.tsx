import { signOut } from "next-auth/react";
import React from "react";
import useCurrentUser from "../hooks/useCurrentUser";

interface MenuAccountProps {
  visible: boolean;
}
const MenuAccount: React.FC<MenuAccountProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  const { data } = useCurrentUser();
  return (
    <div className="bg-black w-32 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-row gap-2 items-center justify-center cursor-pointer hover:text-gray-500 transition">
        <div className="w-6 h-6 lg:h-10 lg:w-10 rounded-md overflow-hidden">
          <img src="/images/davidchen.jpg" alt="davidchen" />
        </div>
        {data?.name}
      </div>
      <div
        onClick={() => signOut()}
        className="text-center border-t-2 mt-4 pt-2 border-gray-800 cursor-pointer hover:text-gray-500 transition"
      >
        LogOut
      </div>
    </div>
  );
};

export default MenuAccount;
