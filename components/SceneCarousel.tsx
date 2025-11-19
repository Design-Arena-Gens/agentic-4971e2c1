'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type SceneFrame = {
  id: number;
  location: string;
  tagline: string;
  caption: string;
  chip: string;
  image: string;
};

type SceneCarouselProps = {
  scenes: SceneFrame[];
  tempoMs?: number;
};

const imageVariants = {
  initial: { scale: 1.18, opacity: 0 },
  animate: { scale: 1.02, opacity: 1 },
  exit: { scale: 1.08, opacity: 0 }
};

const overlayVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
};

export function SceneCarousel({ scenes, tempoMs = 2400 }: SceneCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setIndex((prev) => (prev + 1) % scenes.length);
    }, tempoMs);

    return () => clearInterval(tick);
  }, [scenes.length, tempoMs]);

  const activeScene = useMemo(() => scenes[index], [index, scenes]);

  return (
    <div className="scene-frame">
      <div
        className="scene-progress"
        aria-hidden
      >
        <div
          key={`${activeScene.id}-${index}`}
          className="scene-progress-bar progress-animate"
          style={{
            '--duration': `${tempoMs}ms`
          } as CSSProperties}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.img
          key={activeScene.id}
          src={activeScene.image}
          alt={activeScene.location}
          className="scene-image"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeScene.id}-overlay`}
          className="scene-overlay"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <motion.span
            className="overlay-chip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            {activeScene.chip}
          </motion.span>
          <motion.h2
            className="overlay-tagline"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.18, 0.89, 0.32, 1.28] }}
          >
            {activeScene.tagline}
          </motion.h2>
          <motion.p
            className="overlay-caption"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            {activeScene.caption}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
