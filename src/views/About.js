import React from "react";
import { Container } from "reactstrap";
import aboutUsBackground from "../images/about-us.png";

const Contact = () => {
  return (
    <>
      <div
        id="banner-area"
        className="banner-area"
        style={{
          backgroundImage: `url(${aboutUsBackground})`,
        }}
      />
      <div className="my-4">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <div className="ts-intro">
                <h3 className="column-title text-center">Who We Are</h3>
                <hr />
                <div className="py-3">
                  <strong>
                    We believe technology is shaping the future of humanity -
                    all made possible through advancements in electronics, but
                    it takes people doing and being their best to make it
                    happen.{" "}
                  </strong>
                </div>
                <hr />
                <p>
                  Pulse, a Yageo company, is a key element in a family of
                  businesses that combine to create one of the largest passive
                  electronic manufacturers in the world. Founded in 1956 in
                  Redwood City, California and acquired by Yageo Corporation in
                  2018 Pulse has over 60 years of innovation experience and is a
                  leader in technology, design and manufacturing. Our passive
                  electronic components include power and networking magnetics,
                  current sensing, cable harnesses, power supplies, antennas and
                  connectors. Our global customer base include the market
                  leaders in the Communications, Computing, Consumer,
                  Industrial, IoT and Transportation segments. Our products can
                  be found in a wide range of applications including hybrid and
                  electric vehicles, 5G mobile network systems, smart grids,
                  wearables, lighting, cell phones, datacenters, wireless
                  charging, industrial automation equipment and security. With
                  offices and manufacturing locations in ten countries, spanning
                  three continents, Pulse has a true global presence while
                  maintaining the ability to respond locally to our worldwide
                  customer base. Employees at Pulse are encouraged to think
                  outside of the box, push limits and apply their strengths to
                  ensure that we remain innovative and effective in all aspects
                  of our business. For information or employment enquires please
                  contact;
                </p>
              </div>
            </div>

            <div className="col-md-6" />
          </div>
        </Container>
      </div>
    </>
  );
};
export default Contact;
