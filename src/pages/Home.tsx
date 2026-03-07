import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiArrowDownLine, RiCalendarEventLine, RiMusicLine, RiTimeLine, RiMapPinLine } from 'react-icons/ri'
import PageTransition from '../components/ui/PageTransition'
import WaveformBars from '../components/ui/WaveformBars'

const stats = [
  { value: '110–130', label: 'BPM Range' },
  { value: '4+', label: 'Signature Events' },
  { value: '100%', label: 'Crowd Energy' },
]

const events = [
  {
    icon: '❤️',
    title: "Valentine's Day Brewery Set",
    vibe: 'Soulful & Romantic House',
    bpm: '110–118',
    setting: 'Brewery / Intimate Venue',
    tags: ['Deep House', 'Soulful'],
  },
  {
    icon: '🍺',
    title: 'Oktoberfest Party',
    vibe: 'High Energy Dance Classics',
    bpm: '120–128',
    setting: 'Party Venue / Hall',
    tags: ['Commercial Dance', 'High Energy'],
  },
  {
    icon: '🍀',
    title: "St. Patrick's Day Party",
    vibe: 'Progressive Peak-Time Dance',
    bpm: '118–130',
    setting: 'Bar / Club',
    tags: ['Progressive', 'Peak-Time'],
  },
]

const quickFacts = [
  { label: 'Based In', value: 'Canada' },
  { label: 'Genre', value: 'House · Dance · Electronic' },
  { label: 'Software', value: 'Serato DJ Pro / Rekordbox' },
  { label: 'Format', value: 'USB-ready · Club Format' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-cyan/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-xs font-mono text-neon-cyan tracking-widest uppercase">DJ · Canada · House Music</span>
          </motion.div>

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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-white/60 mb-10 max-w-lg mx-auto"
          >
            From soulful slow burns to 128 BPM madness. Curating feel-good house with emotional build-ups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mb-10"
          >
            <WaveformBars count={48} playing color="#00d4ff" />
          </motion.div>

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
      <section className="py-16 border-y border-white/5 bg-dark-800/50">
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

      {/* About */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">The Artist</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Building journeys,<br />
              <span className="text-gradient">not just playlists.</span>
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                <span className="text-white font-semibold">fivebyfive</span> is a Canada-based DJ specializing in house and dance music
                with a focus on musical storytelling. Starting with deeper grooves and gradually
                elevating into driving, high-BPM energy, his sets are carefully structured to
                create an emotional arc.
              </p>
              <p>
                Known for tight phrasing, harmonic mixing, and intentional track selection — the sound
                adapts to the room, from soulful brewery warm-ups to late-night dance sessions pushing 130 BPM.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* BPM Journey */}
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

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="glass rounded-lg p-3 border border-white/5">
                  <div className="text-[10px] font-mono text-neon-cyan/60 uppercase tracking-widest mb-1">{fact.label}</div>
                  <div className="text-xs text-white/80 font-medium">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Events */}
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
            {events.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass neon-border-purple rounded-xl p-6"
              >
                <div className="text-3xl mb-3">{e.icon}</div>
                <h3 className="font-bold text-white mb-1">{e.title}</h3>
                <p className="text-white/50 text-sm mb-3">{e.vibe}</p>
                <div className="flex flex-wrap gap-2 text-xs text-white/40 mb-3">
                  <span className="flex items-center gap-1">
                    <RiTimeLine size={12} className="text-neon-cyan" />
                    {e.bpm} BPM
                  </span>
                  <span className="flex items-center gap-1">
                    <RiMapPinLine size={12} className="text-neon-cyan" />
                    {e.setting}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-neon-cyan/20 text-neon-cyan/60 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl md:text-2xl font-medium text-white/70 leading-relaxed italic mb-8">
              "My goal is to create immersive dance experiences that feel intentional, emotional, and energetic —
              where every transition tells a story."
            </blockquote>
            <div className="text-neon-cyan font-mono text-sm mb-10">— fivebyfive</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mixes" className="btn-secondary">Hear the Sound</Link>
              <Link to="/contact" className="btn-primary">Book an Event</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
