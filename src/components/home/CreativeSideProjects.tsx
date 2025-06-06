import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

import back2back from "../../../public/assets/images/projects/back2back.gif";
import color_array from "../../../public/assets/images/projects/color-array.gif";
import legend_of_zelda from "../../../public/assets/images/projects/legend-of-zelda.gif";
import graduation from "../../../public/assets/images/projects/graduation.png";
import daisy from "../../../public/assets/images/projects/daisy.png";
import packing_game from "../../../public/assets/images/projects/packing-game.png";

interface DataType {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  labels: string;
  link?: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    image: packing_game,
    title: "WIP Co-op Game",
    subtitle:
      "Designing and developing a cooperative packing-themed puzzle game with a team of 4, combining spatial reasoning challenges with rhythm-based mechanics inspired by Overcooked and Tetris.",
    labels: "Team Project · 2025",
  },
  {
    id: 2,
    image: back2back,
    title: "Back 2 Back",
    subtitle:
      "Co-created a web game in 48 hours for the WolverineSoft Shammy Game Jam, winning first place. Players control two characters simultaneously as they defend against traps while standing back-to-back.",
    labels: "HardBoiled Studios · 2020",
    link: "https://hardboiledstudios.itch.io/back-2-back",
  },

  {
    id: 3,
    image: color_array,
    title: "Color Array",
    subtitle:
      "Designed and built a 7-level web-based puzzle-platformer prototype over two weeks. Focused on intuitive level design and gradual difficulty ramp-up to teach players a color-switching mechanic.",
    labels: "Solo Project · 2020",
  },
  {
    id: 4,
    image: legend_of_zelda,
    title: "Legend of Zelda",
    subtitle:
      "Recreated the first dungeon of the original Legend of Zelda (NES) in a web-based format with added custom mechanics and an original bonus level. Built in three weeks with a teammate.",
    labels: "Team Project · 2020",
  },
  {
    id: 5,
    image: daisy,
    title: "Daisy",
    subtitle:
      "Original string quartet piece, written and scored for live performance. Includes both sheet music export and a sight-read recording by live performers.",
    labels: "Composition · 2017",
    link: "https://soundcloud.com/hazelltwong/daisy-1/s-XFOBpsPFmG0?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=2c9f1a2b6b7f4f1ca483879c175dc201",
  },
  {
    id: 6,
    image: graduation,
    title: "Graduation",
    subtitle:
      "Composed an original piece for string trio. Includes a digital rendering and a live sight-read performance.",
    labels: "Composition · 2017",
    link: "https://soundcloud.com/hazelltwong/graduation-3/s-tnSPNIdl7xC?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=16dce355f2fc4c39991598b07341a963",
  },
];

export default function CreativeSideProjects() {
  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="container">
          <div className="portfolio-title">
            <h3>Creative Side Projects</h3>
          </div>
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-4 portfolio-item category-1`}
              >
                {item.link ? (
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
                ) : (
                  <div className="portfolio-box">
                    <img
                      src={item.image}
                      alt=""
                      style={{ height: "auto" }}
                      data-rjs="2"
                    />
                  </div>
                )}
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
