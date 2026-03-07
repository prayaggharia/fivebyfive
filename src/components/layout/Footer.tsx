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

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-gradient">5/5</span>
            </div>
            <span className="font-bold text-sm">fivebyfive</span>
            <span className="text-white/20 text-xs font-mono ml-2">· House · Dance · Electronic</span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200"
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} fivebyfive. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { label: 'Home', path: '/' },
              { label: 'Mixes', path: '/mixes' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-xs text-white/30 hover:text-neon-cyan transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
