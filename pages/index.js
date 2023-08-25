import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-[#0051b9]/2 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/50 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 py-0 mt-10 xl:my-2"
          >
            Vicente Anibal Ojeda <br />
            Alcalde <span className="text-[#ff781f]">2024-2027</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-15 xl:text-justify"
          >
            Actualmente es candidato a la Alcaldía Mayor de Tunja por el Partido
            Conservador, Liberal, ASI y Nuevo Liberalismo, y el cual tiene un
            compromiso de trabajar Con la Gente para Transformar la ciudad.
          </motion.p>
          <div className="flex justify-center">logos partidos</div>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex xl:mt-[-15px]"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-lighten translate-z-0"></div>
        {/* <ParticlesContainer/> */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full w-full max-w-[499px] max-h-[499px] absolute -bottom-32 lg:-bottom-0 lg:right-[10%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
