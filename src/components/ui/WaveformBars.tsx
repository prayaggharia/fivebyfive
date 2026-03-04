import { motion } from 'framer-motion'

interface Props {
  count?: number
  playing?: boolean
  color?: string
}

export default function WaveformBars({ count = 32, playing = true, color = '#00d4ff' }: Props) {
  return (
    <div className="flex items-end gap-[3px] h-12">
      {Array.from({ length: count }).map((_, i) => {
        const height = Math.random() * 70 + 30
        return (
          <motion.div
            key={i}
            className="w-[3px] rounded-full"
            animate={
              playing
                ? {
                    scaleY: [1, Math.random() * 1.5 + 0.5, Math.random() * 0.8 + 0.2, 1],
                    opacity: [0.6, 1, 0.7, 0.6],
                  }
                : { scaleY: 0.3, opacity: 0.3 }
            }
            transition={{
              duration: Math.random() * 0.8 + 0.4,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: i * 0.03,
              ease: 'easeInOut',
            }}
            style={{
              height: `${height}%`,
              backgroundColor: color,
              transformOrigin: 'bottom',
            }}
          />
        )
      })}
    </div>
  )
}
