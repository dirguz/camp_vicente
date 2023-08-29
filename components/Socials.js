import Link from "next/link";
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-4xl">
      <Link
        href={"https://wa.me/573123583767"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank">
          <RiWhatsappLine />
        </a>
      </Link>
      <Link
        href={"https://www.instagram.com/vicenteaojeda/"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank">
          <RiInstagramLine />
        </a>
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100063887290537"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank">
          <RiFacebookLine />
        </a>
      </Link>
      <Link
        href={"https://twitter.com/Vicenteaojeda"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank">
          <RiTwitterLine />
        </a>
      </Link>
    </div>
  );
};

export default Socials;
