'use client';

import { motion } from 'framer-motion';
import { SceneCarousel, type SceneFrame } from '@/components/SceneCarousel';
import { SoundtrackButton } from '@/components/SoundtrackButton';

const scenes: SceneFrame[] = [
  {
    id: 0,
    location: 'Dubai Rooftops',
    tagline: 'خیانت کردی به استایل؟',
    caption: 'Slide back into the spotlight with Lunabell signature titanium frames catching neon skylines.',
    chip: 'Scene 01 · Urban Heat',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 1,
    location: 'Malibu Tidal Zone',
    tagline: 'Luxury or nothing.',
    caption: 'Saltwater shimmer, glassy waves, and polarized reflections that flex harder than your feed.',
    chip: 'Scene 02 · Beach Riot',
    image:
      'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    location: 'Seoul Night Market',
    tagline: 'Glow louder than the city.',
    caption: 'Chrome-plated frames catching LED signage and street-food flames with every head tilt.',
    chip: 'Scene 03 · Neon Pulse',
    image:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    location: 'Santorini Blue Hours',
    tagline: 'شیک مثل افسانه.',
    caption: 'Sun-dipped marble terraces, cerulean domes, and lenses that record every gasp.',
    chip: 'Scene 04 · Mythic Blue',
    image:
      'https://images.unsplash.com/photo-1506634064465-1f487af3ae4c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    location: 'Tokyo Midnight Drive',
    tagline: 'Own every flash.',
    caption: 'Mirror-black alloys reflecting cruisers, tail lights, and paparazzi strobes without mercy.',
    chip: 'Scene 05 · Midnight Drift',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
  }
];

const lookbookShots = [
  {
    title: 'Velvet Skyline',
    description: 'Cinematic rooftop runway with slow-tilt camera sweeps and lens flare pockets.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Sunset Mirage',
    description: 'Desert silhouettes, lens reflections catching gold dust with whip-pan transitions.',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Ultra-Pool Soirée',
    description: 'Slow motion drip shots, floating neon ice cubes, and mirrored chrome temples.',
    image: 'https://images.unsplash.com/photo-1495857000853-fe603074fcd1?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'City of Flash',
    description: 'Handheld, fast-zoom footage through crowded crossings—every cut on beat.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80'
  }
];

const productSpecs = [
  'UV400 prism shield',
  'Featherlight titanium core',
  'Polarized sapphire mirror',
  'Hand-polished acetate tips'
];

export default function Page() {
  return (
    <main>
      <motion.header
        className="hero-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          className="hero-badge"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Lunabell · Viral drop
        </motion.span>
        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.16, ease: [0.12, 0.7, 0.26, 1.05] }}
        >
          Fast cuts. Luxe energy. Meme-ready swagger.
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.86 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          From urban rooftops to tidal glow-ups, the Lunabell reel is engineered to stop thumbs,
          spark duets, and sell out your drop in hours.
        </motion.p>
        <SoundtrackButton />
        <div className="hero-metrics">
          <motion.div
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.45 }}
          >
            <strong>0.8s</strong>
            <span>Average Cut</span>
          </motion.div>
          <motion.div
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.45 }}
          >
            <strong>18</strong>
            <span>Trend Triggers</span>
          </motion.div>
          <motion.div
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.45 }}
          >
            <strong>4K</strong>
            <span>Ultra Texture</span>
          </motion.div>
        </div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <SceneCarousel scenes={scenes} tempoMs={2600} />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
      >
        <h2 className="section-title">Lifestyle x Product</h2>
        <p className="section-subtitle">
          Swap between hero lifestyle shots and tactile macro close-ups. Each look is paired with
          quick zooms, lens flares, and texture reveals for instant thumb-stopping power.
        </p>
        <div className="lookbook-grid">
          {lookbookShots.map((shot, index) => (
            <motion.article
              key={shot.title}
              className="look-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <img src={shot.image} alt={shot.title} />
              <h3>{shot.title}</h3>
              <p>{shot.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="product-spotlight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="product-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="rotating-glasses">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
              alt="Lunabell Aurora frame rotating in studio lighting"
            />
          </div>
          <p>
            Macro shots trace every bevel and beveled reflection. Reverse speed-ramps and light streak
            overlays amplify each rotation, syncing perfectly with the beat.
          </p>
          <div className="product-specs">
            {productSpecs.map((spec) => (
              <span key={spec} className="spec-chip">
                {spec}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h2 className="section-title">Edit Blueprint</h2>
          <p className="section-subtitle">
            Punchy 0.8 second cuts, whip-pan transitions, overlay typography in Farsi and English,
            and trending VHS grain pulses. Every motion cue is synced to the drop for retention.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.75rem', display: 'grid', gap: '1rem' }}>
            {[
              'Hyperlapse openers · 2 quick zooms · match-cut into product rotate',
              'Kinetic typography: “خیانت کردی به استایل؟” smash-cut to “Luxury or nothing.”',
              'Close-up lens tilt with chromatic glints + speed ramp reverse transition',
              'Outro crescendo with layered light leaks and hero slogan lockup'
            ].map((item) => (
              <li
                key={item}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '18px',
                  background: 'rgba(12,12,24,0.78)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.82)',
                  letterSpacing: '0.03em',
                  lineHeight: 1.5
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      <motion.section
        className="final-callout"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease: [0.18, 0.84, 0.36, 1] }}
      >
        <motion.h2
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 0.86, 0.36, 1.12] }}
        >
          Lunabell – چشمای تو، غرور تو.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Drop the reel. Watch the shares ignite. Lunabell is the energy drink for your aesthetic.
        </motion.p>
      </motion.section>
    </main>
  );
}
