import { motion } from "framer-motion";
import { fadeIn } from "../../src/framerMotion/variants";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import SkillsText from "./SkillsText";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[450px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", "0.2")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
