import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-[120px] -bottom-1 rotate-13 mix-blend-lighten animate-pulse duration-75 z-10 w-[180px] xl:w-[220px] xl:-bottom-3 xl:-left-32">
      <Image
        src={"/bulb.png"}
        width={220}
        height={100}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
