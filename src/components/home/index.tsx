import HeroArea from "./HeroArea";
import ProfessionalWork from "./ProfessionalWork";
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterOne from "../../layouts/footers/FooterOne";
import ScrollTop from "../common/ScrollTop";
import CustomCursor from "../common/CustomCursor";
import ScrollToTop from "../common/ScrollToTop";
import Entrepreneurship from "./Entrepreneurship";
import CreativeSideProjects from "./CreativeSideProjects";
import Research from "./Research";

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* <div className="dotted-background" id="smooth-content"> */}
          <main>
            <HeroArea />
            {/* <BrandArea /> */}
            {/* <AboutArea /> */}
            {/* <ServiceArea /> */}
            <ProfessionalWork />
            <Entrepreneurship />
            <CreativeSideProjects />
            <Research />
            {/* <TestimonoalArea /> */}
            {/* <BlogArea /> */}
            {/* <ContactArea /> */}
          </main>
          <FooterOne />
        </div>
      </div>
      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  );
}
