import "react-18-image-lightbox/style.css";

import service_scaling from "../../../public/assets/images/projects/scaling.png";
import metrics_dashboard from "../../../public/assets/images/projects/cloudwatch.png";
import feature_prototyping from "../../../public/assets/images/projects/warehouse.png";
import pilot from "../../../public/assets/images/projects/pilot.gif";
import read4fun from "../../../public/assets/images/projects/read-4-fun.gif";
import f1deltatime from "../../../public/assets/images/projects/f1.png";

interface DataType {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  labels: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    image: service_scaling,
    title: "Service Scaling",
    subtitle:
      "Optimized backend service for scale, addressing latency and reliability through architectural improvements and infrastructure tuning to support growing load.",
    labels: "Amazon · 2024-2025",
  },
  {
    id: 2,
    image: feature_prototyping,
    title: "Feature Prototyping",
    subtitle:
      "Rapidly built and evaluated feature concepts to inform roadmap decisions and explore customer-facing opportunities, using stakeholder feedback to iterate early UX.",
    labels: "Amazon · 2024",
  },

  {
    id: 3,
    image: metrics_dashboard,
    title: "Metrics Dashboard",
    subtitle:
      "Designed and implemented a centralized metrics dashboard to surface key operational health indicators across services, improving team visibility and incident response.",
    labels: "Amazon · 2023-2024",
  },
  {
    id: 4,
    image: pilot,
    title: "Pilot Course",
    subtitle:
      "Developed and delivered a pilot English course for primary school students, incorporating dynamic animated characters, engaging worksheets, and interactive vocabulary exercises.",
    labels: "ABC Pathways · 2021",
  },
  {
    id: 5,
    image: read4fun,
    title: "Adult Phonics Course",
    subtitle:
      "Produced an online phonics course for adults, contributing to content design, filming, and video editing to teach essential reading skills in an accessible format.",
    labels: "ABC Pathways · 2021",
  },
  {
    id: 6,
    image: f1deltatime,
    title: "F1DeltaTime",
    subtitle:
      "Implemented front-end edits to the F1 DeltaTime website, aligning with updated visuals during a fast-paced marketing push.",
    labels: "Animoca Brands · 2020",
  },
];

export default function ProfessionalWork() {
  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="container">
          <div className="portfolio-title">
            <h3>Professional Projects</h3>
          </div>
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-4 portfolio-item category-1`}
              >
                {/* <a href={item.link}> */}
                <div className="portfolio-box">
                  <img
                    src={item.image}
                    alt=""
                    style={{ height: "auto" }}
                    data-rjs="2"
                  />
                </div>
                {/* </a> */}
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
