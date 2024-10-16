import React from "react";
import Header from "../Header";
import "./index.css";
import OurFeatures from "../OurFeatures";
export default function Home() {
  return (
    <>
      <div className="landingPage">
        <video autoPlay loop muted plays-inline="true" className="back-video">
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__"
            type="video/mp4"
          />
        </video>
        <Header />
        <div className="homeContainer">
          <div className="text-container">
            <div className="mobileMeetContainer">
              <h1 className="heading">When Innovation Meets</h1>
              <p className="innovation">Innovation</p>
            </div>
            <div className="desktopMeetContainer">
              <p className="whenInnovation">When Innovation</p>
              <p className="meets">
                Meets <p className="investment"> Investment</p>
              </p>
            </div>
            <p className="empowering">
              Empowering Trading Through Advanced Technology{" "}
            </p>
            <p className="mobileOpen">Open dApp</p>
            <p className="desktOpen">Open dApp</p>
          </div>
        </div>
      </div>
      <OurFeatures />
    </>
  );
}
