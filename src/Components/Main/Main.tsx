import { Suspense } from "react";
import BackgroungImg from "../../assets/hamada.ch19_barber_scissors_minimalist_geometric_logo_White_and_377df3de-9f67-4812-a912-907d792bc3ae.png";
import BgMovie from "../../assets/BgMovie.mp4";
import MainText from "./MainText";

const Background = () => {
  return (
    <div
      id="Main"
      className="h-[100svh] w-full flex justify-center items-center  z-10 bg-stone-900 overflow-hidden"
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
      <Suspense
        fallback={
          <img
            alt="background"
            src={BackgroungImg}
            className="z-50 absolute top-0 left-0 w-screen"
          />
        }
      >
        <video
          src={BgMovie}
          autoPlay
          muted
          loop
          className="relative top-0 brightness-50 z-30 min-h-[100dvh] max-h-[100dvh] shadow-lg drop-shadow-lg w-full object-cover"
        />
      </Suspense>
    </div>
  );
};

export default Background;
