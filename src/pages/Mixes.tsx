import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiCalendarEventLine, RiSpotifyLine } from 'react-icons/ri'
import PageTransition from '../components/ui/PageTransition'

const setTypes = [
  {
    icon: '🌊',
    title: 'Deep Dive',
    desc: 'Soulful & deep house for intimate settings. 110–120 BPM.',
    tags: ['Deep House', 'Melodic', 'Warm-up'],
  },
  {
    icon: '⚡',
    title: 'Peak Hour',
    desc: 'High-energy commercial dance and house anthems. 125–130 BPM.',
    tags: ['Dance', 'Commercial', 'High Energy'],
  },
  {
    icon: '🎭',
    title: 'Full Journey',
    desc: 'A complete arc from soulful grooves to peak-time madness.',
    tags: ['Full Set', '2–4 hours', 'All BPM'],
  },
]

export default function Mixes() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">Audio</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-none">
              The <span className="text-gradient">Mixes</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Curated sessions and live sets — each one a journey from first beat to last drop.
            </p>
          </motion.div>
        </div>

        {/* Spotify Playlist */}
        <div className="max-w-5xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass neon-border rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <RiSpotifyLine size={22} className="text-[#1DB954]" />
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Now Playing on Spotify</span>
            </div>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://open.spotify.com/embed/playlist/0KQ3TcupS2Ps93gtNUG77t?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: 12 }}
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://open.spotify.com/playlist/0KQ3TcupS2Ps93gtNUG77t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#1DB954] hover:text-[#1ed760] transition-colors"
              >
                <RiSpotifyLine size={14} />
                Open in Spotify
              </a>
            </div>
          </motion.div>
        </div>

        {/* Set Formats */}
        <section className="py-16 bg-dark-800/40 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-3">Available Formats</p>
              <h2 className="text-4xl font-bold">Set <span className="text-gradient-purple">Types</span></h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {setTypes.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-xl p-6 border border-neon-purple/20"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full border border-neon-cyan/20 text-neon-cyan/70 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <RiCalendarEventLine size={16} />
                Book a Set
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
