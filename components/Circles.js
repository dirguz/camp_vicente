import Image from "next/image";

const Circles = () => {
  return <div className="w-[200px] xl:w-[200px] absolute -right-0 -bottom-0 mix-blend-lighten animate-pulse duration-75 z-10">
    <Image src={'/circles.png'} width={260} height={202} alt="" className="w-full h-full"/>
  </div>;
};

export default Circles;
