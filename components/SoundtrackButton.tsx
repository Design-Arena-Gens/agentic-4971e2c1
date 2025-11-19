'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SOUNDTRACK_URL =
  'https://cdn.pixabay.com/download/audio/2023/01/12/audio_aab64d1d637934998bfe55ce49963cf0.mp3?filename=future-bass-fashion-13463.mp3';

export function SoundtrackButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.volume = 0.72;
    audio.loop = true;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setNeedsInteraction(false);
      })
      .catch(() => {
        setNeedsInteraction(true);
      });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsInteraction(false);
      } catch (error) {
        setNeedsInteraction(true);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={handleToggle}
        className="soundtrack-hint"
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
        aria-label={isPlaying ? 'Pause Lunabell soundtrack' : 'Play Lunabell soundtrack'}
      >
        <span role="img" aria-hidden>
          {isPlaying ? '🎧' : '🔥'}
        </span>
        {isPlaying ? 'Sound on · sync with the cuts' : needsInteraction ? 'Tap for the beat drop' : 'Auto-synced soundtrack'}
      </motion.button>
      <audio
        ref={audioRef}
        src={SOUNDTRACK_URL}
        preload="auto"
      />
    </>
  );
}
