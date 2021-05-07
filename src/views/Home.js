import React from "react";
// import Facts from "./Facts";
import Introduction from "./Introduction";
import TopProducts from "./TopProducts";
import Slider from "./Slider";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Introduction />
      {/*<Facts />*/}
      <TopProducts />
      <Testimonials />
    </>
  );
};
export default HomePage;
