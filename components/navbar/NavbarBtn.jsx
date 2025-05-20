import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-300 border flex items-center gap-1 bg-gradient-to-r from-cyan-300 to-orange-300 hover:scale-110 transition-all duration-200 hover:border-orange-300 ">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <FiArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
