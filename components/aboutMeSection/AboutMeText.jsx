import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-start sm:text-center">
      <h2 className="text-6xl text-cyan-500 mb-10">About Me</h2>
      <p className="text-white">
        筑波大学情報メディア創成学類の二年次に所属しています。
        <br />
        2024年の夏からプログラミングを始め、これまでPython,JavaScript,Reactを主に学習してきました。
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex  bg-dark-grey items-center mt-10  hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
