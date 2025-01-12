import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

import PropTypes from "prop-types";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <main id="contact" className="my-20 min-h-96 w-screen  px-10">
      <section className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <figure className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            alt="contact-1"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            alt="contact-2"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </figure>

        <figure className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            alt="swordman"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            alt="swordman"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </figure>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild <b>t</b>he <br /> new <b>e</b>ra of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <a
            href="https://zentry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="contact us" containerClass="mt-10 cursor-pointer transition-transform transform hover:scale-105 hover:bg-violet-100" />
          </a>
        </div>
      </section>
    </main>
  );
};

ImageClipBox.propTypes = {
  src: PropTypes.string.isRequired,
  clipClass: PropTypes.string.isRequired,
};

export default Contact;
