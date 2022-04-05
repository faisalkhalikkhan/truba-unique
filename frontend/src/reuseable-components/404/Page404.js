import React from "react";
import animation from "./error-page.json";
import Lottie from "lottie-react";

const Page404 = () => {
  return (
    <div>
      <Lottie autoplay={true} loop={true} animationData={animation} />
    </div>
  );
};

export default Page404;
