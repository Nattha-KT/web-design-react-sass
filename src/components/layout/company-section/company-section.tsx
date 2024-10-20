import { gridContainerVariants, gridItemVariants, MapIcon } from '@/libs';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './company.scss';
export default function Company() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: ref,
      offset: ['start start', 'end 50%'],
    });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 1 }}
      style={{ opacity }}
      className=" company "
      aria-labelledby="company-section"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        viewport={{ once: false }}
        whileInView={{
          opacity: 1,
          x: 1,
          transition: {
            delay: 0.1,
            duration: 0.8,
          },
        }}
        className="company-img"
      ></motion.div>
      <div className="company-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 1,
            transition: {
              delay: 0.1,
              duration: 0.8,
            },
          }}
          viewport={{ once: false }}
          style={{ opacity }}
          className="company-content"
        >
          <p className=" topic-section">Light, Fast & Powerful</p>
          <p className=" sub-topic text-secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
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
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  alias nulla numquam saepe.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
