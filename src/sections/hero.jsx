import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "../components/button";

export const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="uppercase caption small-2">Video Editing</div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 ">
              Amazingly Simplified
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We crafted Splice AI Video Editor to be an easy to use, quick to
              learn, and powerful tool
            </p>
            <LinkScroll to="feature" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};
