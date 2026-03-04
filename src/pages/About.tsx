import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/ui/PageTransition'

const genres = [
  { name: 'House', icon: '🏠' },
  { name: 'Deep House', icon: '🌊' },
  { name: 'Melodic House', icon: '🎵' },
  { name: 'Commercial Dance', icon: '💃' },
  { name: 'Afro Grooves', icon: '🪘' },
  { name: 'Party Classics', icon: '🎉' },
]

const mixingSkills = [
  { skill: 'Harmonic Mixing', desc: 'Camelot wheel transitions for seamless key changes', level: 95 },
  { skill: 'BPM Progression', desc: 'Gradual energy climb from 110 to 130 BPM', level: 90 },
  { skill: 'Long Blend Transitions', desc: 'Extended mix-outs for smooth genre bridges', level: 88 },
  { skill: 'Vocal Layering', desc: 'Emotional hooks layered over driving beats', level: 85 },
  { skill: 'Crowd Reading', desc: 'Adapting energy to the room in real time', level: 92 },
]

const timeline = [
  { time: '10:00 PM – 11:00 PM', label: 'Soulful & Deep Grooves', bpm: '110–118', color: 'from-neon-cyan/20 to-neon-cyan/5' },
  { time: '11:00 PM – 12:00 AM', label: 'Uplifting Dance & Familiar Hooks', bpm: '118–125', color: 'from-neon-purple/20 to-neon-purple/5' },
  { time: '12:00 AM – 1:00 AM', label: 'Peak-Time High Energy', bpm: '125–130', color: 'from-neon-pink/20 to-neon-pink/5' },
]

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">The Story</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-none">
              About <span className="text-gradient">fivebyfive</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-5 gap-12"
          >
            {/* Bio */}
            <div className="md:col-span-3 space-y-5 text-white/70 leading-relaxed text-lg">
              <p>
                <span className="text-white font-semibold">fivebyfive</span> is a Canada-based DJ specializing in house and dance music
                with a focus on musical storytelling. Starting with deeper grooves and gradually
                elevating into driving, high-BPM energy, his sets are carefully structured to
                create an emotional arc.
              </p>
              <p>
                Influenced by modern melodic house and timeless dance classics, he blends emotional
                familiarity with underground energy. His style adapts to the room — from soulful
                Valentine's brewery sets to Oktoberfest party energy, to late-night dance sessions
                pushing 125–130 BPM.
              </p>
              <p>
                Known for tight phrasing, harmonic mixing, and intentional track selection, fivebyfive
                focuses on building atmosphere first — then igniting the crowd.
              </p>
            </div>

            {/* Quick facts */}
            <div className="md:col-span-2 space-y-4">
              {[
                { label: 'Based In', value: 'Canada' },
                { label: 'Genre Focus', value: 'House · Dance · Electronic' },
                { label: 'BPM Range', value: '110 – 130 BPM' },
                { label: 'Software', value: 'Serato DJ Pro / Rekordbox' },
                { label: 'Format', value: 'USB-ready · Club Format' },
              ].map((fact) => (
                <div key={fact.label} className="glass rounded-xl p-4 border border-white/5">
                  <div className="text-xs font-mono text-neon-cyan/60 uppercase tracking-widest mb-1">{fact.label}</div>
                  <div className="text-white font-medium">{fact.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Genres */}
        <section className="py-20 bg-dark-800/40 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-3">Music Style</p>
              <h2 className="text-4xl font-bold">Primary <span className="text-gradient-purple">Genres</span></h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {genres.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  className="glass neon-border-purple rounded-xl p-5 text-center group"
                >
                  <div className="text-4xl mb-3">{g.icon}</div>
                  <div className="font-semibold text-white group-hover:text-gradient-purple transition-all duration-300">
                    {g.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mixing Skills */}
        <section className="py-20 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-3">Craft</p>
            <h2 className="text-4xl font-bold">Mixing <span className="text-gradient-cyan">Technique</span></h2>
          </motion.div>

          <div className="space-y-6">
            {mixingSkills.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{item.skill}</h3>
                    <p className="text-sm text-white/40 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-sm font-mono text-neon-cyan">{item.level}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Set Timeline */}
        <section className="py-20 bg-dark-800/40 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-mono text-neon-pink uppercase tracking-widest mb-3">Signature Set Format</p>
              <h2 className="text-4xl font-bold">The <span className="text-gradient">Journey</span></h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-30" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`ml-16 glass rounded-xl p-6 bg-gradient-to-r ${item.color} relative`}
                  >
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-neon-cyan bg-dark-900" />
                    <div className="text-xs font-mono text-white/40 mb-2">{item.time}</div>
                    <div className="font-bold text-white text-lg">{item.label}</div>
                    <div className="text-xs font-mono text-neon-cyan mt-2">{item.bpm} BPM</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-6">Vision</p>
            <blockquote className="text-2xl md:text-3xl font-medium text-white/80 leading-relaxed italic">
              "My goal is to create immersive dance experiences that feel intentional, emotional, and energetic —
              where every transition tells a story and every drop earns its moment."
            </blockquote>
            <div className="mt-8 text-neon-cyan font-mono text-sm">— fivebyfive</div>

            <div className="mt-12 flex justify-center gap-4">
              <Link to="/mixes" className="btn-primary">Hear the Sound</Link>
              <Link to="/contact" className="btn-secondary">Book Now</Link>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  )
}
