import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";

const GallerySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sliders = [
    {
      title: "Slider One",
      image: bg1,
    },
    {
      title: "Slider Two",
      image: bg2,
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === sliders.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? sliders.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = sliders.map((slider) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={slider.image}
        className="galleryImg"
      >
        <img
          className="img-fluid"
          style={{ maxHeight: "500px", width: "100%" }}
          src={slider.image}
          alt={slider.title}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={sliders}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};

export default GallerySlider;
