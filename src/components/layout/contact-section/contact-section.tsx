import { buttonVariants, transitionVariants } from '@/libs';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './contact.scss';
export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: ref,
      offset: ['start start', 'end 40%'],
    });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      style={{ opacity }}
      ref={ref}
      id="contact"
      className=" contact"
      aria-labelledby="content-section"
    >
      <div className="contact-img"></div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        viewport={{ once: false }}
        whileInView={transitionVariants}
        className="contact-container"
      >
        <div>
          <p className=" topic-section">Light, Fast & Powerful</p>
          <p className=" sub-topic text-secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
        <motion.button
          variants={buttonVariants}
          initial="visible"
          whileInView="shake_x"
          viewport={{ once: false }}
          className=" btn-primary text-white"
        >
          Purchase UI Kit
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
