import { buttonVariants, transitionVariants } from '@/libs';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import './price.scss';
export default function Price() {
  const ref = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
  //   useScroll({
  //     target: ref,
  //     offset: ['start start', 'end 40%'],
  //   });
  // // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.section
      ref={ref}
      className=" price-container"
      aria-labelledby="price-section"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: false }}
        whileInView={transitionVariants}
        className=" price-content"
      >
        <h2 className=" topic-section">A Price To Suit Everyone</h2>
        <p className=" text-secondary sub-topic">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{' '}
        </p>
        <p className="price-dolar">
          <span>$40</span>
          <span>UI Design Kit</span>
        </p>
        <div className=" price-pourchase">
          <span>See, One price. Simple.</span>
          <motion.button
            variants={buttonVariants}
            initial="visible"
            whileInView="shake_y"
            viewport={{ once: false }}
            className=" btn-primary text-white"
          >
            Purchase Now
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}
