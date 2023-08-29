import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="flex h-full bg-primary/30 py-36 items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-1">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center justify-center flex xl:w-[30vw] flex-col lg:text-left mb-3 xl:mb-0"
          >
            <h2 className="h2 mt-16 xl:mt-12 font-serif">Galeria</h2>
            <p className="mb-0 max-w-[550px] mx-auto lg:mx-2 text-justify font-semibold">
              Bajo el lema <span className="text-xl text-accent">Con la gente</span>, se busca crear un
              gobierno inclusivo y participativo, donde cada ciudadano se sienta
              parte fundamental de las decisiones que afectan a Tunja.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
