import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container,
  Row,
  Col,
} from "reactstrap";
import test1 from "../images/mark.png";
import test2 from "../images/mary.png";
import test3 from "../images/john.png";

const GallerySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const testimonials = [
    {
      message:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      image: test1,
      name: "Mark Mark",
      position: " CEO, Company One",
    },
    {
      message:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      image: test2,
      name: "Mary Mary",
      position: " CEO, Company Two",
    },
    {
      message:
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      image: test3,
      name: "John John",
      position: " CEO, Company Three",
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = testimonials.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.image}
        className="galleryImg"
      >
        <div className="my-4 mx-2">
          <div className="quote-item">
            <span className="quote-text">{item.message}</span>
            <div className="quote-item-footer">
              <img className="testimonial-thumb" src={item.image} />
              <div className="quote-item-info pull-right">
                <h3 className="quote-author">{item.name}</h3>
                <span>{item.position}</span>
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col md={8}>
            <h3 className=" pt-4">Testimonials</h3>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              indicators={true}
            >
              <CarouselIndicators
                items={testimonials}
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
          </Col>
          <Col md={2} />
        </Row>
      </Container>
    </div>
  );
};

export default GallerySlider;
