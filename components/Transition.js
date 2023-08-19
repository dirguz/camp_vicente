import { motion } from "framer-motion";

const animationVariables = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#ff781f]/50"
        variants={animationVariables}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      >
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-20 bg-[#ff0000]/50"
        variants={animationVariables}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
      >
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-10 bg-[#10b38a]/50"
        variants={animationVariables}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
      >
      </motion.div>
      
    </>
  );
};

export default Transition;
