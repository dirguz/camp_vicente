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
          path: "https://images2.imgbox.com/84/ca/M5rb1udO_o.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://images2.imgbox.com/9a/b6/mEDNuLEk_o.jpg",
        },
        {
          title: "title",
          path: "https://images2.imgbox.com/b3/5e/bDXo4Mag_o.jpg",
        },
        {
          title: "title",
          path: "https://images2.imgbox.com/3e/ae/p5Ajfx8U_o.jpg",
        },
        {
          title: "title",
          path: "https://images2.imgbox.com/79/b2/YaJGzsTe_o.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://scontent.fbog2-3.fna.fbcdn.net/v/t39.30808-6/369630576_703202128486024_2784482558751142353_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE8Menusvu4JNGhpsQcVPMRkT9qwvTy5i-RP2rC9PLmL4atu1n_kiAuSp5lt3l9_Tk&_nc_ohc=vL7MGqVthMsAX8K5WVH&_nc_ht=scontent.fbog2-3.fna&oh=00_AfBNK3RABM7hEiiD00ni5G3Bme4BOU_vEkPBqqFxmY1v2g&oe=64F2D018",
        },
        {
          title: "title",
          path: "https://scontent.fbog2-3.fna.fbcdn.net/v/t39.30808-6/369557665_702593108546926_5091846481999636626_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEYRI6URrZX4UyPjdzSiaKc4rJA4ecIisfiskDh5wiKxx9MkNmUVQATqPYtsqjzc4U&_nc_ohc=TDEMZDrVoxgAX9JMKTb&_nc_ht=scontent.fbog2-3.fna&oh=00_AfARI3QvGkxr4dCcvnCYsSZXtHbjW2hP-PP1U7u16wQbZQ&oe=64F40A02",
        },
        {
          title: "title",
          path: "https://scontent.fbog2-3.fna.fbcdn.net/v/t39.30808-6/367484298_701904288615808_3720304164644492588_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHvvK8XVt73sJnMAk_Dytkwzt_kqXn7BqzO3-SpefsGrEE9byvxL1k7gl1h8yc_q8U&_nc_ohc=xQrO-xusqAIAX_LGzqZ&_nc_ht=scontent.fbog2-3.fna&oh=00_AfC38sXktBV-PsMeZi9D6SC-wW6Tr2y49TQi-yXGystqLA&oe=64F40E7C",
        },
        {
          title: "title",
          path: "https://scontent.fbog2-3.fna.fbcdn.net/v/t39.30808-6/366974730_703542388451998_5952798130806099761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEbgBShVGGhtA-C0HwwDTqEeZzdleWmlPJ5nN2V5aaU8trU2tQ4Q3mICuQk91Ibxnk&_nc_ohc=o2FdaaDlxpkAX92S4eg&_nc_ht=scontent.fbog2-3.fna&oh=00_AfCHyzPZP56s3ThpJzsZNscT_FN6CBE1xBrccOfl08BkVg&oe=64F29F70",
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
            <div className="grid grid-cols-2 grid-flow-row gap-3 cursor-pointer">
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
