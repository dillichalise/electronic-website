import React from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <div className="text-center py-1 ft bg-dark">
      <p style={{ fontSize: 14 }} className="my-1 h6 text-white">
        © {moment().format("YYYY")} | All Rights Reserved | Created by:
        <a
          style={{ textDecoration: "none" }}
          className="text-white"
          target="_blank"
          href="https://www.chalisedilli.com.np"
        >
          {" "}
          Dilli Chalise
        </a>{" "}
      </p>
    </div>
  );
};
export default Footer;
