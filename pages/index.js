import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-[#00025e] h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/50 to-black/10">
        <div className="text-center flex flex-col xl:gap-[25px] justify-center xl:pt-[90px] xl:text-justify h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 py-0 mt-10 xl:mt-6 xl:z-30 font-serif xl:right-[0%] xl:top-[4%] relative"
          >
            Vicente Anibal Ojeda
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-15 xl:text-justify xl:mt-7 text-lg text-white"
          >
            Candidato a la Alcaldía Mayor de Tunja por el Partido
            Conservador, Liberal, ASI y Nuevo Liberalismo, y el cual tiene un
            compromiso de trabajar Con la Gente para Transformar la ciudad.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex xl:mb-0 xl:mt-[70px] "
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-full absolute right-1 bottom-0">
        <div className="hidden xl:flex xl:max-w-full xl:h-[600px] absolute xl:right-[5%] items-center mt-5">
          <Image
            src={"/va-blanco.png"}
            width={900}
            height={200}
            alt=""
            className="w-full h-screen mix-blend-overlay "
          />
        </div>
        <ParticlesContainer/>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex xl:items-end h-full w-full max-w-[499px] min-h-full absolute -bottom-30 xl:-bottom-30 lg:right-[5%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
