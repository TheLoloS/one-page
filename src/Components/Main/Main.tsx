import BackgroundImage from "../../assets/bg.webp";
import MainText from "./MainText";
import { motion } from "framer-motion";

const Background = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      id="Main"
      className="h-[100vh] relative w-full flex justify-center items-center  z-10 bg-stone-900"
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

      {/* <video
        src={BgMovie}
        autoPlay
        muted
        loop
        className="relative top-0 brightness-50 z-30 min-h-[100dvh] max-h-[100dvh] shadow-lg drop-shadow-lg w-full object-cover "
      /> */}
      <motion.img
        src={BackgroundImage}
        className="relative top-0 brightness-50 z-30 h-100vh min-h-[100vh] shadow-lg drop-shadow-lg w-full object-cover "
        // loading="lazy"
      />
    </motion.div>
  );
};

export default Background;
