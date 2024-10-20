import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './_hero.scss';
export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: ref,
      offset: ['start start', 'end end'],
    });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);

  return (
    <motion.section
      ref={ref}
      id="hero"
      className=" hero "
      initial={{ opacity: 1, y: 0 }}
      aria-labelledby="hero-section"
      style={{ opacity }}
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{
          opacity: 1,
          x: 1,
          transition: {
            delay: 0.1,
            duration: 0.8,
          },
        }}
        viewport={{ once: true }}
        style={{ opacity, x: translateX, y: '0' }}
        className="hero-container"
      >
        <p className=" topic">Introduce Your Product Quickly & Effectively</p>
        <p className=" sub-topic text-secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className=" hero-btn ">
          <button className=" btn-primary text-white">Purchase UI Kit</button>
          <button className=" hero-btn-outlined ">Learn More</button>
        </div>
      </motion.div>
    </motion.section>
  );
}
