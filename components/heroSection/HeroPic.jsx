import { motion } from "framer-motion";
import { fadeIn } from "../../src/framerMotion/variants";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", "0.2")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <img
        src="../../public/images/HeroImage.jpg"
        alt="Toshiro"
        className="max-h-[450px] w-auto rounded-full"
      />
    </motion.div>
  );
};

export default HeroPic;
