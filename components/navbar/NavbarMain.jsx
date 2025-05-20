import { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] w-full mx-auto gap-4 fixed z-20 px-4 mt-2 flex -translate-x-[50%] left-[50%]">
      <div className=" flex w-full max-w-[1200px] mx-auto bg-dark-grey items-center p-6 rounded-r-full rounded-l-full border-orange border-[1px] justify-between ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-dark-grey items-center justify-center rounded-full border-[1px] border-orange">
        <button
          className="text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
