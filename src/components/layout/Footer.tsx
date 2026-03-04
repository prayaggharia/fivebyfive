import { Link } from 'react-router-dom'
import { RiInstagramLine, RiSoundcloudLine, RiYoutubeLine, RiMailLine } from 'react-icons/ri'

const socials = [
  { icon: RiInstagramLine, label: 'Instagram', href: '#' },
  { icon: RiSoundcloudLine, label: 'SoundCloud', href: '#' },
  { icon: RiYoutubeLine, label: 'YouTube', href: '#' },
  { icon: RiMailLine, label: 'Email', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                <span className="text-xs font-mono font-bold text-gradient">5/5</span>
              </div>
              <span className="font-bold text-lg">fivebyfive</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              From soulful slow burns to 128 BPM madness.<br />
              Where melody meets movement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Mixes', path: '/mixes' },
                { label: 'Events', path: '/events' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/40 hover:text-neon-cyan transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-white/40 hover:text-neon-cyan transition-colors duration-200 group"
                >
                  <Icon size={18} className="group-hover:neon-text" />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} fivebyfive. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Based in Canada · House · Dance · Electronic
          </p>
        </div>
      </div>
    </footer>
  )
}
