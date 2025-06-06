export default function AboutMeArea() {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row align-items-center about-me-container">
            <div className="about-me-side col-lg-4">
              <h1>Hi, I'm Hazel!</h1>
              <div className="resume-button">
                <p>
                  <a href="../../public/assets/pdf/Hazel_Wong_Resume.pdf">
                    Resume
                  </a>
                </p>
              </div>
            </div>
            <div className="about-me-text col-lg-8">
              <h3>Nice to meet you!</h3>
              <p>
                I'm a multidisciplinary creative with experience spanning
                software engineering, game development, product management, and
                creative production. I enjoy building thoughtful, user-centered
                experiences—whether that’s scaling internal systems, launching
                indie games, or designing animated digital products.
              </p>
              <br></br>

              <div className="row about-me-description">
                <div className="col-lg-6">
                  <h4>Day Job</h4>
                  <p>
                    Professionally, I’ve worn many hats—from Software Engineer
                    at Amazon to co-creator of Yolked, a quirky indie game on
                    Steam. I’ve led product and content development for
                    educational platforms and e-commerce storefronts.
                    Academically, I hold a Master’s from Harvard in
                    Computational Science and Engineering and a CS degree from
                    the University of Michigan.
                  </p>
                  <br></br>
                </div>
                <div className="col-lg-6">
                  <h4>Out of Office</h4>
                  <p>
                    Outside of work, I spend my time designing games, animating
                    greeting cards, and exploring creative side projects on
                    Etsy—from illustrated enamel pins to interactive templates.
                    I love traveling, photography, and tackling a good puzzle or
                    trivia night. Always up for building something fun and
                    meaningful!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
