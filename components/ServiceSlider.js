import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[380px] xl:h-[400px] sm:h-[450px]"
    >
      <SwiperSlide>
        <div className="flex flex-col bg-[#ffcc00] rounded-lg cursor-pointer p-2 xl:p-3 h-full items-center hover:bg-slate-600 transition-all duration-300">
          <div className="h-[50px]">
            <h1 className="text-[22px] xl:text-5xl text-center font-serif">
              Educación para el Futuro
            </h1>
          </div>
          <div className="xl:mt-8 xl:p-4">
            <p className="font-semibold text-justify text-[15px] xl:text-xl text-[#001d5e] hover:text-white transition-all duration-300">
              Vicente Aníbal Ojeda Martínez tiene una visión audaz para la
              educación en Tunja. Su compromiso se centra en convertir la ciudad
              en un Distrito de Conocimiento, lo que implica la creación de una
              red educativa que fomente la investigación, la innovación y la
              formación integral. Esto se logrará mediante la inversión en
              infraestructura educativa de última generación, la capacitación
              continua de docentes y la promoción de alianzas con universidades
              y centros de investigación.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col bg-[#001d5e] rounded-lg cursor-pointer p-2 xl:p-3 h-full items-center hover:bg-slate-600 transition-all duration-300">
          <div className="h-[50px]">
            <h1 className="text-[22px] xl:text-5xl text-center font-serif">
              Seguridad Ciudadana Integral
            </h1>
          </div>
          <div className="xl:mt-8 xl:p-4">
            <p className="font-semibold text-justify text-[13px] xl:text-xl text-[#ffcc00] hover:text-white transition-all duration-300">
              La seguridad ciudadana es un pilar esencial en la plataforma de
              Ojeda Martínez. Más allá de enfocarse solo en la prevención del
              delito, su enfoque se extiende a la construcción de una ciudad más
              resiliente y segura para todos. Esto incluye la implementación de
              tecnologías de vigilancia modernas, la promoción de programas
              comunitarios de prevención del delito y la mejora de la
              iluminación y la infraestructura en áreas clave. Ojeda Martínez se
              compromete a trabajar con las autoridades locales y la comunidad
              para garantizar la tranquilidad de los ciudadanos y el bienestar
              de sus familias.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col bg-[#ff0000]/60 rounded-lg cursor-pointer p-2 xl:p-3 h-full items-center hover:bg-slate-600 transition-all duration-300">
          <div className="h-[50px]">
            <h1 className="text-[22px] xl:text-5xl text-center font-serif text-white">
              Mejora de Servicios Públicos Eficientes
            </h1>
          </div>
          <div className="mt-[30px] xl:mt-8 xl:p-4">
            <p className="font-semibold text-justify text-[14px] xl:text-xl text-[#10b38a] hover:text-white transition-all duration-300">
              Ojeda Martínez reconoce la importancia de contar con servicios
              públicos confiables y eficientes para el bienestar de la
              ciudadanía. Su propuesta incluye la modernización de la
              infraestructura para asegurar el acceso equitativo al agua
              potable, la energía eléctrica y la gestión de residuos. Además,
              planea establecer sistemas de monitoreo y retroalimentación
              ciudadana para garantizar que los servicios públicos cumplan con
              los estándares de calidad requeridos.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col bg-[#10b38a] rounded-lg cursor-pointer p-2 xl:p-3 h-full items-center hover:bg-slate-600 transition-all duration-300">
          <div className="h-[50px]">
            <h1 className="text-[22px] xl:text-5xl text-center text-white font-serif">
              Tunja como Ciudad Concertada
            </h1>
          </div>
          <div className="xl:mt-8 xl:p-4">
            <p className="font-semibold text-justify text-lg xl:text-xl text-[#001d5e] hover:text-white transition-all duration-300">
              En su búsqueda de un gobierno participativo y colaborativo, Ojeda
              Martínez plantea la transformación de Tunja en una Ciudad
              Concertada. Esto implica la creación de espacios y plataformas
              donde la comunidad, las organizaciones y las instituciones puedan
              debatir y decidir sobre asuntos relevantes para el desarrollo de
              la ciudad.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col bg-[#ff781f] rounded-lg cursor-pointer p-2 xl:p-3 h-full items-center hover:bg-slate-600 transition-all duration-300">
          <div className="h-[50px]">
            <h1 className="text-[22px] xl:text-5xl text-center xl:font-serif ">
              Identidad y Arraigo cultural
            </h1>
          </div>
          <div className="xl:mt-8 xl:p-4">
            <p className="font-semibold text-justify text-[15px] xl:text-xl text-[#001d5e] hover:text-white transition-all duration-300">
              La riqueza cultural de Tunja es un tesoro que Ojeda Martínez
              valora profundamente. Su propuesta busca fortalecer la identidad y
              el arraigo cultural de la comunidad tunjana. Esto se logrará a
              través del apoyo a festivales y eventos culturales locales, así
              como la promoción de la educación artística y la preservación del
              patrimonio histórico. Ojeda Martínez reconoce que una ciudad que
              valora su cultura y tradiciones en una ciudad que inspira a sus
              ciudadanos y atrae a visitantes.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceSlider;
