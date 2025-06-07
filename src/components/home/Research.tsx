import "react-18-image-lightbox/style.css";

import fairness from "../../../public/assets/images/projects/fairness.png";
import quantum from "../../../public/assets/images/projects/quantum.png";
import solvents from "../../../public/assets/images/projects/solvents.png";
import procedural from "../../../public/assets/images/projects/procedural.jpg";

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
    image: fairness,
    title: "Fairness in COMPAS",
    subtitle:
      "Researched racial fairness in recidivism risk assessment algorithms under Professor Sindhu Kutty. Contributed to a study that was presented at the Grace Hopper Celebration, examining how racially-aware predictors can reduce bias in sentencing with minimal impact on accuracy.",
    labels: "University of Michigan · 2019–2020",
  },
  {
    id: 2,
    image: procedural,
    title:
      "Project Randomizer: A Look into Procedural Generation in Video Games",
    subtitle:
      "Investigated the use of procedural generation in video games through an undergraduate research project. Designed and implemented a prototype algorithm to generate puzzle levels dynamically, highlighting the benefits of memory efficiency, scalability, and cost savings.",
    labels: "University of Michigan · 2020",
  },
  {
    id: 3,
    image: quantum,
    title: "Using Quantum Mechanics to Dissect RNA-Ligand Interactions",
    subtitle:
      "Applied quantum chemical techniques to study RNA-ligand binding energies. Wrote and ran shell scripts to fragment RNA molecules and compute molecular properties, supporting the rational design of RNA-targeting probes.",
    labels: "University of Michigan · 2018–2019",
    link: "https://pubs.acs.org/doi/abs/10.1021/acs.jpcb.1c02702",
  },
  {
    id: 4,
    image: solvents,
    title: "Reaction Miniaturization in Eco-friendly Solvents",
    subtitle:
      "Explored parallel reaction miniaturization using green chemistry techniques. Conducted experiments in milligram-to-microgram scales with glass vials and plastic wellplates to optimize synthesis of pharmaceutical intermediates.",
    labels: "University of Michigan · 2018",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2452223618300622?via%3Dihub",
  },
];

export default function Research() {
  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="container">
          <div className="portfolio-title">
            <h3>Research</h3>
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
