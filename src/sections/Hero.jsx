import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-52 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className=" small-2 uppercase text-p3 text-center caption">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-s5/85 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 text-s5/70 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div className="absolute top-36 left-[calc(70%-340px)] w-[1230px] pointer-events-none hero-img_res">
           
            <img
              src="/images/cameraman_set_3.jpg"
              className="size-123 max-lg:h-auto"
              alt="hero"
              width={800}
              height={500}
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;