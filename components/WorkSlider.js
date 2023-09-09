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
          path: "https://pbs.twimg.com/media/F5Cfd-IWYAAEpA9?format=jpg&name=large",
        },
        {
          title: "title",
          path: "https://pbs.twimg.com/media/F5Cfd-HXEAAIvFO?format=jpg&name=large",
        },
        {
          title: "title",
          path: "https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/373642596_18383493325054257_653016286215008428_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHx5bIbkuf-96Sd6RW82MEO1qEXtgYmTOrWoRe2BiZM6lg5n8YYt7eLkxpdVPj87Hw&_nc_ohc=lZV81i-YvP0AX_8qNcA&_nc_ht=scontent.fbog2-4.fna&oh=00_AfDxk7Pm0-ggdjt84yUNWb2FqrAJChqYw1ZNA7lAABmcfQ&oe=65014030",
        },
        {
          title: "title",
          path: "https://scontent.fbog2-5.fna.fbcdn.net/v/t39.30808-6/373646107_18383493343054257_8135731847384884294_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHLE762gIuOypF3PPtgHspRYGj7IIY5_ANgaPsghjn8A_dEE6TpCaCXomgKhKxjs-A&_nc_ohc=9TPBW5lb4kIAX919w7-&_nc_ht=scontent.fbog2-5.fna&oh=00_AfCnkiHZkB_65cjMZ7pPy0rjKLhlcrwgSznsIMmzV5bkBQ&oe=64FFF27D",
        },
      ],
    },
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
    {
      images: [
        {
          title: "title",
          path: "https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/373636536_18383195209054257_1171018567952666956_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeFMqWuA_aEJTIyLL7l2hWAWjlAm1nHodQiOUCbWceh1CEFSDjPAZj_GhyQD4IDeUdU&_nc_ohc=p018RxGh_VAAX-hhBPr&_nc_ht=scontent.fbog15-1.fna&oh=00_AfAWKM7ap6PwML0p7Of5KA12XL1su4qKVZnMeo5RqD5oDA&oe=64F8E011",
        },
        {
          title: "title",
          path: "https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/374733853_18383195200054257_3789586377407436967_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeFLbEF6ic-s4yR34XXu4B7QLwse8GiLMt8vCx7waIsy3_phdZofV8ivU4EivPn69aU&_nc_ohc=FI6m78WxQxoAX9Jy4U-&_nc_ht=scontent.fbog15-1.fna&oh=00_AfDakuDEswGmrGZG338J8tu69tWSz3TJQtBmW924tzDAjA&oe=64F8B770",
        },
        {
          title: "title",
          path: "https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/373636584_18383195314054257_6120586543481900231_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGJxqCa7A94avQY9O2VejCBXT0PQPbRTsNdPQ9A9tFOw8L6mxqeYeMsqaObZ4rdktk&_nc_ohc=69aUw9pp4OwAX86f762&_nc_ht=scontent.fbog15-1.fna&oh=00_AfBd4hICBUTcXDczOekkCJH3SRLHOxzZ3BrTL-lxbUH9cg&oe=64F7E06F",
        },
        {
          title: "title",
          path: "https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/375046738_18383195266054257_7950805714531570025_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHJc-S_QjWZBvhUrpG6zaODA580rdjHR8MDnzSt2MdHwznDZ_U_GXQn2qPfTxeOpkA&_nc_ohc=IM1xTYLmPXQAX9n5FpS&_nc_ht=scontent.fbog15-1.fna&oh=00_AfBFe__FGEzjtQ_LRdxrQV3sWIrOK6iG3im0jHVGPLvhpg&oe=64F820A6",
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
