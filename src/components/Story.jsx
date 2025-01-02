import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;
    
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut"
    })
  };

  /**
   * Handles the mouse move event and calculates the position of the mouse
   * relative to the element referenced by frameRef.
   *
   * @param {MouseEvent} e - The mouse event object.
   */
  const handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    const element = frameRef.current;

    if(!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX, rotateY,
      transformPerspective: 500, // 3D effect
      ease: "power1.inOut"
    })
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-small uppercase md:text-[10px]">
          The multiversal ip world
        </p>

        <header className="relative size-full">
          <AnimatedTitle
            title="<b>T</b>he st<b>o</b>ry of <br /> a hi<b>d</b>den real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <figure className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </figure>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Story;
