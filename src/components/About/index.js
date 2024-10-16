/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./About.css";
import Tokenomics from "../Tokenomics";
export default function About() {
  return (
    <>
      <video autoPlay loop muted plays-inline="true" className="back-leftVideo">
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/f581/08a4/-9842-4434-816a-ae0df77dfb21?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clHR3HHGkj6XBkMAtNWmcAUwge0TOqCpqV8fHOhFXjSOiGKsghHyRBw4k0f01cf2Xsd-bttPTbMJWQjZbBSAQ-U41m2DDXMgkLQ2mpty0TU-EB~bRnhuo1nPJ2KUDCydibgMdHEUyp3rmzRx99Fo2KRtmxkJNSNBXsHPwL5TjcR1Vq9G4hlPmHnNSGbaXKiCA16hePXHcQ4tdblvhcR-x1hkkJjljopjpuDiZhnNFfvmNQAZY51G-IRRVR8OPZOBjqt6W4-yFxTQewdm7BYVneab-NaGk9uB8g4OPny6RwWKB3x05UA6--edUFu2Y1pghOsjupi22~M7qiySpGZAuA__"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        plays-inline="true"
        className="back-rightVideo"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/f581/08a4/-9842-4434-816a-ae0df77dfb21?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clHR3HHGkj6XBkMAtNWmcAUwge0TOqCpqV8fHOhFXjSOiGKsghHyRBw4k0f01cf2Xsd-bttPTbMJWQjZbBSAQ-U41m2DDXMgkLQ2mpty0TU-EB~bRnhuo1nPJ2KUDCydibgMdHEUyp3rmzRx99Fo2KRtmxkJNSNBXsHPwL5TjcR1Vq9G4hlPmHnNSGbaXKiCA16hePXHcQ4tdblvhcR-x1hkkJjljopjpuDiZhnNFfvmNQAZY51G-IRRVR8OPZOBjqt6W4-yFxTQewdm7BYVneab-NaGk9uB8g4OPny6RwWKB3x05UA6--edUFu2Y1pghOsjupi22~M7qiySpGZAuA__"
          type="video/mp4"
        />
      </video>
      <div className="aboutContainer">
        <h1 className="aboutheading">About EthAi</h1>
        <p className="aboutText">
          At Eth Ai, we’re all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders’ movements.
        </p>
        <button className="readBtn">Read more</button>
        <div>
          <img
            className="aboutMobile"
            src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(5).png?updatedAt=1728993120997"
          />
          <img
            className="aboutDesktop"
            src="https://ik.imagekit.io/xshdqvejgf/Overlay%20(6).png?updatedAt=1728993120627"
          />
        </div>
      </div>
      <Tokenomics />
    </>
  );
}
