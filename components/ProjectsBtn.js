import Image from "next/image";
import Link from "next/link";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 ">
      <Link
        href={"/work"}
        className="relative w-[500px] h-[200px] flex justify-center items-center bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/logos_partidos.png"}
          width={400}
          height={400}
          alt=""
          className="w-full h-full max-w-full max-h-full bg-slate-200"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
