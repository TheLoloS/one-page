import React, {
  ForwardedRef,
  LegacyRef,
  useImperativeHandle,
  useRef,
} from "react";

type ButtonProps = React.HTMLProps<HTMLDivElement>;

const About = React.forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  return (
    <div
      ref={ref}
      id="About"
      className=" h-[100dvh] w-full z-10 bg-all-green-600"
    >
      About
    </div>
  );
});

export default About;
