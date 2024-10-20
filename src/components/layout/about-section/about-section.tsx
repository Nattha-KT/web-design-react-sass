import { transitionVariants } from '@/libs';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './about.scss';
export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: ref,
      offset: ['start start', 'end 30%'],
    });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      style={{ opacity }}
      id="about"
      className=" about "
      aria-labelledby="about-section"
    >
      <div className="about-img"></div>
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={transitionVariants}
          viewport={{ once: false }}
          style={{ opacity }}
        >
          <p className=" topic-section">Light, Fast & Powerful</p>
          <p className=" sub-topic text-secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
