import { motion } from 'framer-motion'
import { RiCalendarEventLine, RiMapPinLine, RiTimeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import PageTransition from '../components/ui/PageTransition'

const pastEvents = [
  {
    icon: '❤️',
    title: "Brewery Chill House Set",
    type: 'Seasonal Event',
    vibe: 'Soulful & Chill House',
    bpm: '110–118',
    setting: 'Brewery',
    description:
      "Sip your beers, get social and enjoy the music!",
    tags: ['Deep House', 'Soulful', 'Romantic'],
    color: 'from-rose-500/10 to-neon-pink/5',
    border: 'border-neon-pink/20',
  },
  {
    icon: '🍺',
    title: 'Oktoberfest Party',
    type: 'Seasonal Party',
    vibe: 'High Energy Dance Classics',
    bpm: '120–128',
    setting: 'Party Venue / Hall',
    description:
      'High-energy vibes blending classic dance anthems with driving house beats, keeping the crowd moving through the night.',
    tags: ['Commercial Dance', 'Party Classics', 'High Energy'],
    color: 'from-amber-500/10 to-neon-purple/5',
    border: 'border-neon-purple/20',
  },
  {
    icon: '🍀',
    title: "St. Patrick's Day Party",
    type: 'Holiday Event',
    vibe: 'Progressive Peak-Time Dance',
    bpm: '118–130',
    setting: 'Bar / Club',
    description:
      'A progressive BPM climb starting in groove territory and peaking into full peak-time dance euphoria.',
    tags: ['Progressive', 'Peak-Time', 'Dance'],
    color: 'from-green-500/10 to-neon-cyan/5',
    border: 'border-neon-cyan/20',
  },
]

const upcomingPlaceholder = {
  title: 'Next Event TBA',
  desc: 'Stay tuned for upcoming dates. Follow on socials for the latest announcements.',
}

const eventTypes = [
  { icon: '🍻', type: 'Brewery Nights', desc: 'Intimate soulful sets for craft brewery events' },
  { icon: '🎪', type: 'Seasonal Parties', desc: 'Holiday and themed events year-round' },
  { icon: '🕺', type: 'Club / Dance Nights', desc: 'Late-night peak-hour sets for dance floors' },
  { icon: '🎊', type: 'Private Events', desc: 'Custom curated sets for private parties' },
]

export default function Events() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">Live</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-none">
              <span className="text-gradient">Events</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Every event is a different journey — same craft, different vibe.
            </p>
          </motion.div>
        </div>

        {/* Upcoming */}
        <div className="max-w-5xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-neon-cyan/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/3 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Upcoming</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{upcomingPlaceholder.title}</h2>
                  <p className="text-white/50">{upcomingPlaceholder.desc}</p>
                </div>
                <Link to="/contact" className="btn-primary flex-shrink-0">
                  Get Notified
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Past Events */}
        <section className="py-16 bg-dark-800/40 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-3">Performance Highlights</p>
              <h2 className="text-4xl font-bold">Past <span className="text-gradient-purple">Events</span></h2>
            </motion.div>

            <div className="space-y-6">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`glass rounded-2xl p-6 md:p-8 border bg-gradient-to-br ${event.color} ${event.border}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="text-5xl flex-shrink-0">{event.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{event.type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-white/60 leading-relaxed mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-white/40">
                        <span className="flex items-center gap-1.5">
                          <RiTimeLine size={14} className="text-neon-cyan" />
                          {event.bpm} BPM
                        </span>
                        <span className="flex items-center gap-1.5">
                          <RiMapPinLine size={14} className="text-neon-cyan" />
                          {event.setting}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <RiCalendarEventLine size={14} className="text-neon-cyan" />
                          {event.vibe}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {event.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/40 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono text-neon-pink uppercase tracking-widest mb-3">Available For</p>
            <h2 className="text-4xl font-bold">Event <span className="text-gradient">Types</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventTypes.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 text-center border border-white/5"
              >
                <div className="text-3xl mb-3">{e.icon}</div>
                <h4 className="font-bold text-sm text-white mb-1">{e.type}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">Book Your Event</Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
