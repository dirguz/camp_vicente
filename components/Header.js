import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-0.5 py-1">
          <Link href={'/'}>
            <Image src={"/logo2.png"} width={220} height={150} alt="" className="w-[120px] h-[100px] xl:mt-[100px] xl:w-[220px] xl:h-[190px]"/>
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
