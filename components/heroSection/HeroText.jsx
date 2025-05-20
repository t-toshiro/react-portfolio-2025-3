import { motion } from "framer-motion";
import { fadeIn } from "../../src/framerMotion/variants";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", "0.2")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-cyan"
      >
        Fron End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", "0.4")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Tsugaru Toshiro
      </motion.h1>
    </div>
  );
};

export default HeroText;
