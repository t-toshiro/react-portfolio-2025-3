import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <Link
        to="hero"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="cursor-pointer text-white text-2xl sm:hidden md:block">
        Tsugaru Toshiro
      </Link>
      <Link
        to="hero"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="cursor-pointer text-white font-extrabold text-4xl sm:block md:hidden">
        TT
      </Link>
    </div>
  );
};

export default NavbarLogo;
