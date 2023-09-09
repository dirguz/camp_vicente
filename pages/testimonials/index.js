import { Tweet } from "react-tweet";

const Testimonials = () => {
  return (
    <div className="mh-[350px] overflow-y-auto">
      <div className="dark px-2 mt-[120px] xl:mt-[40px] items-center justify-center xl:gap-2 flex flex-col xl:flex-row gap-1 mh-[200px]">
        <Tweet id="1699590070343209274" />
        <Tweet id="1699893848644997357" />
        <Tweet id="1698032465586045299" />
      </div>
    </div>
  );
};

export default Testimonials;
