import {
  gridContainerVariants,
  gridItemVariants,
  MapIcon,
  transitionVariants,
} from '@/libs';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './mobile.scss';
export default function Mobile() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: ref,
      offset: ['start start', 'end 30%'],
    });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '250%']);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      style={{ opacity }}
      className=" mobile "
      aria-labelledby="mobile-section"
    >
      <div className="mobile-container">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
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
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          className=" group-items "
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              variants={gridItemVariants}
              className="item "
            >
              <MapIcon />
              <h5>Title Gose Here</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                alias nulla numquam saepe.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 180 }}
        whileInView={transitionVariants}
        viewport={{ once: true }}
        style={{ opacity, y: translateY }}
        className="mobile-img"
      ></motion.div>
    </motion.section>
  );
}
