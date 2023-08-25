/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
const aboutData = [
  {
    title: "Profesional en Derecho",
    info: [
      {
        title:
          "Abogado Contratista en la Dirección de Asuntos Indígenas, Rom y Minorías",
      },
      {
        title:
          "Asesor Jurídico en la Empresa Social del Estado Centro de Salud Macanal",
      },
      {
        title:
          "Abogado Contratista en el Instituto Nacional de Geología y Minería (Ingeominas)",
      },
    ],
  },
  {
    title: "Concejo Municipal",
    info: [
      {
        title: "Concejal de la ciudad de Tunja",
        stage: "2012 - 2015",
      },
      {
        title: "Presidente del Concejo Municipal de Tunja",
        stage: "2013",
      },
    ],
  },
  {
    title: "Gobierno",
    info: [
      {
        title: "Secretario de Gobierno de Tunja",
        stage: "2020 - 2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center"
          >
            VICENTE ANÍBAL OJEDA MARTINEZ
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto xl:mx-0 mb-4 xl:mb-2 px-2 xl:px-0 xl:text-justify "
          >
            Graduado como Abogado de la Universidad Santo Tomás de Tunja,
            también ostenta el título de Especialista en Gobierno y Gerencia
            Territorial de la misma institución. Amplió sus conocimientos al
            obtener un Magister en Derecho Público de la Universidad Santo Tomás
            de Bogotá, en colaboración con la Universidad de Konstanz en
            Alemania. Su dominio del inglés se certificó mediante el Proficiency
            of English en el Anglo Word Education, instituto asociado a la
            Universidad de Oxford en Inglaterra.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[50%] h-[280px]"
        >
          <div className="flex gap-x-3 xl:gap-x-8 mx-auto xl:mx-0 mb-3">
            {aboutData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    index === i &&
                    "text-accent after:w-[100%] after:bg-[#ff0000] after:transition-all after:duration-300"
                  }cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-[#10b38a] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-1 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-row md:flex-row max-w-max gap-x-1 items-center text-[#ffcc00]/70"
                >
                  <div className="font-light mb-1 md:mb-0 text-xs xl:text-lg xl:text-justify">
                    {item.title}
                  </div>
                  <div className="text-xs xl:text-lg">{item.stage}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
