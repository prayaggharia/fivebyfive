import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiArrowDownLine, RiCalendarEventLine, RiMusicLine } from 'react-icons/ri'
import PageTransition from '../components/ui/PageTransition'
import WaveformBars from '../components/ui/WaveformBars'

const taglines = [
  'From soulful slow burns to 128 BPM madness.',
  'Where melody meets movement.',
  'House so good, you call it home!',
]

const stats = [
  { value: '110–130', label: 'BPM Range' },
  { value: '4+', label: 'Signature Events' },
  { value: '100%', label: 'Crowd Energy' },
]

const highlights = [
  { icon: '❤️', event: "Valentine's Day Brewery Set", style: 'Soulful & Romantic House', bpm: '110–118' },
  { icon: '🍺', event: 'Oktoberfest Party', style: 'High Energy Dance Classics', bpm: '120–128' },
  { icon: '🍀', event: "St. Patrick's Day Party", style: 'Progressive Peak-Time Dance', bpm: '125–130' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          {/* DJ tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-cyan/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-xs font-mono text-neon-cyan tracking-widest uppercase">DJ · Canada · House Music</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-2 leading-none tracking-tight">
              <span className="text-gradient">five</span>
              <span className="text-white/20">×</span>
              <span className="text-gradient-purple">five</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-neon-cyan/50" />
              <span className="font-mono text-neon-cyan/60 text-sm tracking-[0.3em]">5 / 5</span>
              <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-neon-purple/50" />
            </div>
          </motion.div>

          {/* Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-1 mb-10"
          >
            {taglines.map((t, i) => (
              <p key={i} className={`text-base md:text-lg ${i === 0 ? 'text-white/80' : 'text-white/40'}`}>
                {t}
              </p>
            ))}
          </motion.div>

          {/* Waveform */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mb-10"
          >
            <WaveformBars count={48} playing color="#00d4ff" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/mixes" className="btn-primary flex items-center justify-center gap-2">
              <RiMusicLine size={18} />
              Listen to Mixes
            </Link>
            <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2">
              <RiCalendarEventLine size={18} />
              Book an Event
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <RiArrowDownLine size={18} />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5 bg-dark-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-xs font-mono text-white/30 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">The Artist</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Building journeys,<br />
              <span className="text-gradient">not just playlists.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Based in Canada, fivebyfive crafts dynamic house and dance sets designed to move both hearts
              and dance floors. Known for smooth BPM progression and melodic transitions, the sound ranges
              from soulful warm-ups to high-energy peak-hour anthems.
            </p>
            <Link to="/about" className="btn-primary inline-flex">
              Full Bio
            </Link>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-xl p-5 neon-border">
              <div className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-3">BPM Journey</div>
              <div className="space-y-3">
                {[
                  { label: 'Warm-up', range: '110–120', w: '40%', color: 'from-neon-cyan/40 to-neon-cyan/20' },
                  { label: 'Groove Build', range: '120–125', w: '65%', color: 'from-neon-cyan to-neon-purple/60' },
                  { label: 'Peak Energy', range: '125–130', w: '100%', color: 'from-neon-cyan via-neon-purple to-neon-pink' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-24 text-xs text-white/40 font-mono flex-shrink-0">{item.label}</div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: item.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      />
                    </div>
                    <div className="text-xs font-mono text-white/40 w-20 text-right">{item.range}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Harmonic Mixing', 'Long Blends', 'Vocal Layering', 'Crowd Connection'].map((skill) => (
                <div key={skill} className="glass rounded-lg p-3 border border-neon-purple/20 text-center">
                  <span className="text-xs text-white/50 font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Event Highlights */}
      <section className="py-24 bg-dark-800/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-3">Performance Highlights</p>
            <h2 className="text-4xl font-bold">Every event, <span className="text-gradient-purple">a different vibe.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass neon-border-purple rounded-xl p-6 group"
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <h3 className="font-bold text-white mb-2">{h.event}</h3>
                <p className="text-white/50 text-sm mb-4">{h.style}</p>
                <span className="text-xs font-mono px-2 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan">
                  {h.bpm} BPM
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/events" className="btn-secondary inline-flex items-center gap-2">
              <RiCalendarEventLine size={16} />
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-mono text-neon-pink uppercase tracking-widest mb-4">Ready to elevate your event?</p>
            <h2 className="text-5xl font-bold mb-6">
              Let's build<br /><span className="text-gradient">something unforgettable.</span>
            </h2>
            <p className="text-white/50 mb-10 text-lg">
              From intimate brewery nights to full-scale dance parties — adaptable sets tailored to your room.
            </p>
            <Link to="/contact" className="btn-primary text-base px-12 py-4">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
