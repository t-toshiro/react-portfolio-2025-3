import { Link } from "react-scroll";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan backdrop-blur-lg lg:bg-dark-grey sm:w-full py-4">
      {links.map((link) => {
        return (
          <li key={link.section} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer text-white hover:text-cyan-200 transition-all duration-200"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan-200 w-0 group-hover:w-full h-[1px] transition-all duration-200"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
