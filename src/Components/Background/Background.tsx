import { Suspense } from "react";
import BackgroungImg from "../../assets/hamada.ch19_barber_scissors_minimalist_geometric_logo_White_and_377df3de-9f67-4812-a912-907d792bc3ae.png";
import BgMovie from "../../assets/BgMovie.mp4";

const Background = () => {
  return (
    <div className="h-[100dvh] w-screen">
      <div className="w-screen  relative  z-10 bg-stone-900 h-[100dvh]"></div>
      <Suspense
        fallback={
          <img
            alt="background"
            src={BackgroungImg}
            className="z-50 absolute top-0 left-0 w-screen h-screen"
          />
        }
      >
        <video
          src={BgMovie}
          autoPlay
          muted
          loop
          className="absolute brightness-50 z-30 top-0 scale-[3] translate-y-full shadow-lg drop-shadow-lg"
        />
      </Suspense>
    </div>
  );
};

export default Background;
