import { Tweet } from "react-tweet";

const Testimonials = () => {
  return (
    <div className="mh-[350px] overflow-y-auto">
      <div className="dark px-2 mt-[120px] xl:mt-[40px] items-center justify-center xl:gap-2 flex flex-col xl:flex-row gap-1 mh-[200px]">
        <Tweet id="1695624225359364440" />
        <Tweet id="1695598668202615063" />
        <Tweet id="1695500562601590871" />
      </div>
    </div>
  );
};

export default Testimonials;
