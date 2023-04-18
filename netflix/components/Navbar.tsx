import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import NavbarItem from "./NavbarItem";
const Navbar = () => {
  const { data } = useCurrentUser();
  return (
    <nav className="w-full fixe z-40 ">
      <div className="flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 px-4 md:px-16 py-6 ">
        <img src="/images/logo.jpg" alt="logo" className="h-4 lg:h-7 " />
        <button className="h-4 lg:h-7 w-12 bg-red-600" onClick={() => signOut()}>
          LogOut
        </button>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label={"Home"}/>
          <NavbarItem label={"Series"}/>
          <NavbarItem label={"Films"}/>
          <NavbarItem label={"New & Popular"}/>
          <NavbarItem label={"My List"}/>
          <NavbarItem label={"Browse by language"}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
