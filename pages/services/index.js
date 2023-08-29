import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="flex top-0 h-full bg-primary/30 py-30 xl:py-20 items-center ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex mt-[44px] flex-col xl:flex-row gap-x-6">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center -mt-[30px] xl:mt-0 flex xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0"
          >
            <h2 className="h2 xl:mt-8 font-serif">Mis propuestas</h2>
            <p className="mb-1 max-w-[400px] mx-auto lg:mx-0 font-semibold">
              Mi programa de gobierno está basado en cinco pilares de transformación para Tunja
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
