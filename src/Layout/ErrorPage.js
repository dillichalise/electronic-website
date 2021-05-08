import React from "react";
import errorBackground from "../images/error.jpg";

export const ErrorPage = () => (
  <div
    className="d-flex flex-row-fluid "
    style={{
      backgroundImage: `url(${errorBackground})`,
    }}
  >
    <div className="text-center">
      <h1 className="error-title text-success ">403</h1>
      <p className="error-subtitle text-success ">ERROR</p>
      <p className="display-4 text-danger">
        Seems like you cannot <br /> access this page.
      </p>
    </div>
  </div>
);
