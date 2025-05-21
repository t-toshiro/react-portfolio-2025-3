import { motion } from "framer-motion";
import { fadeIn } from "../../src/framerMotion/variants";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Pokedex",
    year: "Feb2025",
    align: "right",
    image: "/images/pokemon.png",
    link: "https://main.dzqyng7j71io0.amplifyapp.com/",
  },
  // {
  //   name: "Moola App",
  //   year: "Sept2022",
  //   align: "left",
  //   image: "../../public/images/website-img-2.webp",
  //   link: "#",
  // },
  // {
  //   name: "Tourzania",
  //   year: "Jan2023",
  //   align: "right",
  //   image: "../../public/images/website-img-3.jpg",
  //   link: "#",
  // },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "../../public/images/website-img-4.jpg",
  //   link: "#",
  // },
];
const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", "0.2")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
