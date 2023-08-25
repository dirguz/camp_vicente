import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="flex h-full bg-primary/30 py-36 items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
          >
            <h2 className="h2 xl:mt-8">Mis propuestas.</h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Su dominio del inglés se certificó mediante el Proficiency of
              English en el Anglo Word Education.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
