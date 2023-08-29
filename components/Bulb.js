import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute left-0 bottom-0 animate-pulse duration-75 z-10 w-[180px] xl:w-[220px] xl:-bottom-0 xl:-left-0 xl:bg-white/50 rounded-lg">
      <Image
        src={"/logo4.png"}
        width={220}
        height={100}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
