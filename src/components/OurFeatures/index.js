/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ourfeatures.css";
import About from "../About";
export default function OurFeatures() {
  return (
    <>
      <div className="features">
        <h1 className="feauturesHeading">Our Featuers</h1>
        <div className="mobileViews">
          <img
            className="imgs"
            src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(1).png?updatedAt=1728987538654"
          />
          <img
            className="imgs"
            src="https://ik.imagekit.io/xshdqvejgf/Overlay.png?updatedAt=1728987539918"
          />
          <img
            className="imgs"
            src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(2).png?updatedAt=1728987540195"
          />
          <img
            className="imgs"
            src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(3).png?updatedAt=1728987538543"
          />
          <img
            className="imgs"
            src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(4).png?updatedAt=1728987538679"
          />
        </div>

        <div className="desktopFeatureView">
          <div className="featureContainersTop">
            <img
              className="mr-4 mb-4"
              src="https://ik.imagekit.io/xshdqvejgf/Overlay.png?updatedAt=1728989897744"
            />
            <div>
              <img
                className="mb-4 h-92 w-92"
                src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(1).png?updatedAt=1728989897505"
              />
              <img
                className="w-90 h-92 w-fit w-92"
                src="https://ik.imagekit.io/xshdqvejgf/Overlay+Shadow.png?updatedAt=1728990726513"
              />
            </div>
            <img
              className="mb-4 ml-4"
              src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(2).png?updatedAt=1728989897292"
            />
          </div>
          <div className="featureContainersBottom">
            <img
              className="mr-4 w-1/2"
              src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(4).png?updatedAt=1728989897545"
            />
            <img
              className="w-1/2"
              src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(3).png?updatedAt=1728989898900"
            />
          </div>
        </div>
      </div>
      <About />
    </>
  );
}
