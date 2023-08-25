import { Tweet } from "react-tweet";

const Testimonials = () => {
  return (
    <div className="mh-[350px] overflow-y-auto">
      <div className="dark px-2 mt-[120px] xl:mt-[40px] items-center justify-center xl:gap-2 flex flex-col xl:flex-row gap-1 mh-[200px]">
        <Tweet id="1694710830208872585" />
        <Tweet id="1694337726068281566" />
        <Tweet id="1694009090182189197" />
      </div>
    </div>
  );
};

export default Testimonials;
