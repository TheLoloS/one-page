import BgMovie from "../../assets/BgMovie.mp4";
import MainText from "./MainText";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="Main"
      className="h-[calc(100svh-3.75rem)] w-full flex justify-center items-center  z-10 bg-stone-900 overflow-hidden mt-[3.75rem]"
    >
      <MainText />
      {/* <div className="z-50 absolute bg-stone-50 w-[50dvw] max-w-[30rem] m-auto p-4">
        <p className="text-xl font-bold">Witaj</p>
        <br />
        <p className="text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vero
          ea saepe consequatur deleniti exercitationem. Tempora nobis eveniet
          perferendis deserunt laudantium quaerat voluptatum accusantium aliquam
          praesentium? Beatae placeat ut aut?
        </p>
      </div> */}

      <video
        src={BgMovie}
        autoPlay
        muted
        loop
        className="relative top-0 brightness-50 z-30 min-h-[100dvh] max-h-[100dvh] shadow-lg drop-shadow-lg w-full object-cover "
      />
    </motion.div>
  );
};

export default Background;
