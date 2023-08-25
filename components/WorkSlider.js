import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "https://images2.imgbox.com/5f/19/mF8vQOQv_o.jpg",
        },
        {
          title: "title",
          path: "https://images2.imgbox.com/e5/7f/fsV8RfXf_o.jpg",
        },
        {
          title: "title",
          path: "https://images2.imgbox.com/48/32/elY4hAVd_o.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[350px] sm:h-[580px]"
    >
      {workSlides.slides.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 cursor-pointer">
              {slide.images.map((image, i) => {
                return (
                  <div
                    key={i}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={image.path}
                        width={400}
                        height={200}
                        alt={image.title}
                        className="hover:scale-150 transition-all duration-700"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#001d5e] to-[#0051b9] opacity-0 group-hover:opacity-50 transition-all duration-700"></div> */}
                      <div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
