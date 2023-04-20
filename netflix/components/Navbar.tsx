import React, { useCallback, useState } from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import MenuAccount from "./MenuAccount";
const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobile((current) => !current);
  }, []);
  const toggleMenuAccount = useCallback(() => {
    setShowAccount((current) => !current);
  }, []);
  return (
    <nav className="w-full fixe z-40 ">
      <div className="flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 px-4 md:px-16 py-6 ">
        <img src="/images/logo.jpg" alt="logo" className="h-4 lg:h-7 " />
  
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
          <AiOutlineMenu className="text-white transition" />
          <MobileMenu visible={showMobile} />
        </div>
        <div className="text-white flex flex-row ml-auto gap-7 items-center">
          <div className="flex flex-row gap-1 items-center hover:text-gray-400 cursor-pointer">
            <AiOutlineSearch />
            Search
          </div>
          <div className=" hover:text-gray-400 cursor-pointer">
            <AiOutlineBell />
          </div>
          <div
            onClick={toggleMenuAccount}
            className="flex flex-row gap-2 items-center relative cursor-pointer"
          >
            <div className="w-6 h-6 lg:h-10 lg:w-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="blueProfile" />
            </div>
            <AiOutlineMenu className="text-white transition" />
            <MenuAccount visible={showAccount} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
