import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
        src={"/perfil.png"}
        width={499}
        height={499}
        alt=""
        className="translate-z-0 w-full h-[80%]"
      />
    </div>
  );
};

export default Avatar;
