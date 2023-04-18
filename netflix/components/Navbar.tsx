import React, { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const { data } = useCurrentUser();
  const [showMobile, setShowMobile] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobile((current) => !current);
  }, []);
  return (
    <nav className="w-full fixe z-40 ">
      <div className="flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 px-4 md:px-16 py-6 ">
        <img src="/images/logo.jpg" alt="logo" className="h-4 lg:h-7 " />
        <button
          className="h-4 lg:h-7 w-12 bg-red-600"
          onClick={() => signOut()}
        >
          LogOut
        </button>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label={"Home"} />
          <NavbarItem label={"Series"} />
          <NavbarItem label={"Films"} />
          <NavbarItem label={"New & Popular"} />
          <NavbarItem label={"My List"} />
          <NavbarItem label={"Browse by language"} />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <MobileMenu visible={showMobile} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
