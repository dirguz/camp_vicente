import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Bulb from "../../components/Bulb";
import Link from "next/link";

const Contact = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75ke7z8",
        "template_yjc7rb8",
        formRef.current,
        "pbppb8LlRdh78pE5K"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-34 text-center xl:text-left flex items-center flex-col justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="text-[20px] xl:text-3xl text-center mt-12 mb-2 font-serif">
            Aqui van tus comentarios
          </h2>
          <form
            ref={formRef}
            className="flex-1 flex flex-col gap-5 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Nombre"
                className="input"
                name="name"
              />
              <input
                type="text"
                placeholder="Email"
                className="input"
                name="email"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              className="input"
              name="subject"
            />
            <textarea
              placeholder="Escriba aqui su mensaje"
              className="textarea"
              name="message"
            ></textarea>
            <div className="flex gap-x-20 xl:gap-x-60 w-full items-center pb-3">
              <button
                onClick={sendEmail}
                className="btn rounded-full z-30 border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Enviar
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              <Link href={"https://www.linkedin.com/in/diego-guzman-sanabria-001872215/"}>
              <p className="text-xs">Desarrollado por dirguz</p>
              </Link>
            </div>
          </form>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Contact;
