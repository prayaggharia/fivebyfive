import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiFolderMusicLine, RiUploadCloudLine, RiCalendarEventLine } from 'react-icons/ri'
import PageTransition from '../components/ui/PageTransition'
import AudioPlayer from '../components/ui/AudioPlayer'
import type { Track } from '../components/ui/AudioPlayer'

/**
 * HOW TO ADD YOUR MUSIC:
 * 1. Drop your audio files (MP3/WAV) into /public/music/
 * 2. Add entries to the `tracks` array below with the filename matching your file.
 * 3. Example: src: '/music/my-set.mp3'
 */
const tracks: Track[] = [
  // Add your tracks here. Example:
  // {
  //   title: 'Valentine Brewery Set',
  //   description: 'Soulful deep house warmup into melodic peak',
  //   genre: 'Deep House',
  //   bpm: '112–118',
  //   duration: '58:32',
  //   src: '/music/valentine-set.mp3',
  // },
]

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
  const hasTracks = tracks.length > 0

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
              Recorded sets, live mixes, and curated sessions — each one a journey from first beat to last drop.
            </p>
          </motion.div>
        </div>

        {/* Player or Placeholder */}
        <div className="max-w-5xl mx-auto px-6 mb-20">
          {hasTracks ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <AudioPlayer tracks={tracks} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass neon-border rounded-2xl p-16 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-neon-cyan/10 flex items-center justify-center mx-auto mb-6">
                <RiFolderMusicLine size={36} className="text-neon-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Mixes Coming Soon</h3>
              <p className="text-white/40 max-w-sm mx-auto mb-6 leading-relaxed">
                Drop your audio files in <code className="text-neon-cyan font-mono text-sm bg-neon-cyan/10 px-2 py-0.5 rounded">/public/music/</code> and
                add them to the tracks array in <code className="text-neon-purple font-mono text-sm bg-neon-purple/10 px-2 py-0.5 rounded">Mixes.tsx</code>.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-white/20 border border-white/10 rounded-full px-4 py-2">
                <RiUploadCloudLine size={14} />
                Supports MP3, WAV, FLAC
              </div>
            </motion.div>
          )}
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
