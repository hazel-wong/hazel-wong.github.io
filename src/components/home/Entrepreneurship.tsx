import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

import yolked from "../../../public/assets/images/projects/yolked.gif";
import banana_appeals from "../../../public/assets/images/projects/bananaappeals.gif";
import tiny_pocket_studio from "../../../public/assets/images/projects/tiny-pocket-studio.png";
import pilot from "../../../public/assets/images/projects/pilot.gif";
import read4fun from "../../../public/assets/images/projects/read-4-fun.gif";
import f1deltatime from "../../../public/assets/images/projects/f1.png";

interface DataType {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  labels: string;
  link: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    image: banana_appeals,
    title: "Animated Greeting Cards",
    subtitle:
      "Designing and animating customizable greeting cards sold on Etsy, combining storytelling, motion design, and user personalization. Top-performing card reached 1.8M+ views on TikTok.",
    labels: "BananaAppeals · 2025",
    link: "http://bananaappeals.etsy.com/",
  },
  {
    id: 2,
    image: yolked,
    title: "YOLKED: The Egg Game",
    subtitle:
      "Led development and publishing of a Unity platformer over 3 years, from game design to Steam release, with hands-on involvement in coding, asset integration, and community engagement.",
    labels: "HardBoiled Studios · 2020–2023",
    link: "https://store.steampowered.com/app/1464010/YOLKED__The_Egg_Game/",
  },
  {
    id: 3,
    image: tiny_pocket_studio,
    title: "Enamel Pins",
    subtitle:
      "Designed, manufactured, and sold a collection of 10 original enamel pins through my indie shop, handling everything from vendor sourcing to fulfillment and packaging. Completed 68 sales before pausing the shop due to relocation.",
    labels: "Tiny Pocket Studio · 2022",
    link: "http://tinypocketstudio.etsy.com/",
  },
];

export default function Entrepreneurship() {
  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="container">
          <div className="portfolio-title">
            <h3>Entrepreneurship</h3>
          </div>
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-4 portfolio-item category-1`}
              >
                <a target="_blank" href={item.link}>
                  <div className="portfolio-box">
                    <img
                      src={item.image}
                      alt=""
                      style={{ height: "auto" }}
                      data-rjs="2"
                    />
                  </div>
                </a>
                <div className="portfolio-caption">
                  <h1>{item.title}</h1>
                  <p>{item.subtitle}</p>
                  <h4>{item.labels}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-1 col-sm-1"></div>
        </div>
      </div>
    </>
  );
}
