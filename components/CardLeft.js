import Image from "next/image";

const CardLeft = () => {
  return (
    <div className="hidden xl:flex xl:items-center ">
      <Image
        src={"/perfil.png"}
        width={499}
        height={400}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>)
};

export default CardLeft;
