import React from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <div className="text-center py-1 ft bg-light">
      <p style={{ fontSize: 14 }} className="my-1 h6">
        © {moment().format("YYYY")} | All Rights Reserved | Powered by:
        <a
          className="text-primary"
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
