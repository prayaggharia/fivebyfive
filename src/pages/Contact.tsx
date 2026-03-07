import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiSendPlaneLine, RiCheckLine, RiInstagramLine, RiSoundcloudLine, RiMailLine } from 'react-icons/ri'
import PageTransition from '../components/ui/PageTransition'

const eventTypes = ['Brewery Night', 'Club Night', 'Private Party', 'Seasonal Event', 'Corporate Event', 'Other']

interface FormData {
  name: string
  email: string
  eventType: string
  date: string
  venue: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', eventType: '', date: '', venue: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = `w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20
    focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-200 text-sm`

  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-none">
              Book <span className="text-gradient">fivebyfive</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Ready to elevate your event? Tell me about your night and let's make it unforgettable.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass neon-border rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center mx-auto mb-6">
                    <RiCheckLine size={32} className="text-neon-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/50">Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">Name</label>
                      <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">Email</label>
                      <input type="email" name="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">Event Type</label>
                    <select name="eventType" required value={form.eventType} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                      <option value="" disabled>Select event type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t} className="bg-dark-800">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">Event Date</label>
                      <input type="date" name="date" value={form.date} onChange={handleChange} className={`${inputClass} [color-scheme:dark]`} />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">Venue / Location</label>
                      <input type="text" name="venue" placeholder="Venue name or city" value={form.venue} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">Tell me about your event</label>
                    <textarea name="message" required rows={5} placeholder="Describe the vibe, expected crowd size, set duration..." value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: 0.97 }}
                    className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-base"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <RiSendPlaneLine size={18} />
                        Send Booking Request
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="glass rounded-xl p-6 border border-white/5">
                <h3 className="font-bold text-white mb-4">Booking Info</h3>
                <div className="space-y-3 text-sm text-white/60">
                  <p>✓ Available across Canada</p>
                  <p>✓ Adaptable to any venue size</p>
                  <p>✓ Custom set curation per event</p>
                  <p>✓ USB-ready club format</p>
                  <p>✓ Response within 24–48 hours</p>
                </div>
              </div>

              <div className="glass rounded-xl p-6 border border-white/5">
                <h3 className="font-bold text-white mb-4">Connect</h3>
                <div className="space-y-3">
                  {[
                    { icon: RiInstagramLine, label: 'Instagram', handle: '@fivebyfive', href: '#' },
                    { icon: RiSoundcloudLine, label: 'SoundCloud', handle: 'fivebyfive', href: '#' },
                    { icon: RiMailLine, label: 'Email', handle: 'hello@fivebyfive.ca', href: 'mailto:hello@fivebyfive.ca' },
                  ].map(({ icon: Icon, label, handle, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 text-white/50 hover:text-neon-cyan transition-colors duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                        <Icon size={18} className="text-neon-cyan" />
                      </div>
                      <div>
                        <p className="text-xs text-white/30 font-mono">{label}</p>
                        <p className="text-sm text-white/70">{handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
