import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
import {
  RiPlayFill,
  RiPauseFill,
  RiSkipForwardFill,
  RiSkipBackFill,
  RiVolumeUpLine,
  RiVolumeDownLine,
} from 'react-icons/ri'
import WaveformBars from './WaveformBars'

export interface Track {
  title: string
  description: string
  bpm?: string
  genre?: string
  src: string
  duration?: string
}

interface Props {
  tracks: Track[]
}

export default function AudioPlayer({ tracks }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [duration, setDuration] = useState(0)
  const [seek, setSeek] = useState(0)
  const howlRef = useRef<Howl | null>(null)
  const rafRef = useRef<number>(0)
  const track = tracks[currentIndex]

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const updateProgress = () => {
    if (howlRef.current && howlRef.current.playing()) {
      const s = howlRef.current.seek() as number
      const d = howlRef.current.duration()
      setSeek(s)
      setDuration(d)
      setProgress((s / d) * 100)
      rafRef.current = requestAnimationFrame(updateProgress)
    }
  }

  const loadTrack = (index: number, autoplay = false) => {
    if (howlRef.current) {
      howlRef.current.unload()
    }
    cancelAnimationFrame(rafRef.current)

    howlRef.current = new Howl({
      src: [tracks[index].src],
      volume,
      html5: true,
      onplay: () => {
        setPlaying(true)
        rafRef.current = requestAnimationFrame(updateProgress)
      },
      onpause: () => setPlaying(false),
      onstop: () => {
        setPlaying(false)
        setProgress(0)
        setSeek(0)
      },
      onend: () => {
        if (index < tracks.length - 1) {
          setCurrentIndex(index + 1)
        } else {
          setPlaying(false)
        }
      },
    })

    if (autoplay) howlRef.current.play()
  }

  useEffect(() => {
    loadTrack(currentIndex, false)
    setProgress(0)
    setSeek(0)
    return () => {
      howlRef.current?.unload()
      cancelAnimationFrame(rafRef.current)
    }
  }, [currentIndex])

  useEffect(() => {
    howlRef.current?.volume(volume)
  }, [volume])

  const togglePlay = () => {
    if (!howlRef.current) return
    if (playing) {
      howlRef.current.pause()
    } else {
      howlRef.current.play()
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    const d = howlRef.current?.duration() || 0
    howlRef.current?.seek((val / 100) * d)
    setProgress(val)
  }

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1))
  const next = () => setCurrentIndex((i) => Math.min(tracks.length - 1, i + 1))

  return (
    <div className="glass neon-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 p-6 border-b border-white/5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-1">Now Playing</p>
            <h3 className="text-xl font-bold text-white truncate">{track.title}</h3>
            <p className="text-white/50 text-sm mt-1">{track.description}</p>
            <div className="flex gap-3 mt-3 flex-wrap">
              {track.genre && (
                <span className="text-xs px-2 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan font-mono">
                  {track.genre}
                </span>
              )}
              {track.bpm && (
                <span className="text-xs px-2 py-1 rounded-full border border-neon-purple/30 text-neon-purple font-mono">
                  {track.bpm} BPM
                </span>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <WaveformBars count={20} playing={playing} color="#00d4ff" />
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 pt-5 pb-2">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleSeek}
          className="w-full h-1 appearance-none bg-white/10 rounded-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, #00d4ff ${progress}%, rgba(255,255,255,0.1) ${progress}%)`,
          }}
        />
        <div className="flex justify-between mt-1 text-xs font-mono text-white/30">
          <span>{formatTime(seek)}</span>
          <span>{duration ? formatTime(duration) : track.duration || '--:--'}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <RiVolumeDownLine className="text-white/30" size={16} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 h-1 appearance-none rounded-full cursor-pointer"
            style={{
              background: `linear-gradient(to right, #7b2fff ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%)`,
            }}
          />
          <RiVolumeUpLine className="text-white/30" size={16} />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="text-white/40 hover:text-white disabled:opacity-20 transition-colors"
          >
            <RiSkipBackFill size={22} />
          </button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="w-14 h-14 rounded-full flex items-center justify-center relative"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #7b2fff)',
              boxShadow: playing ? '0 0 30px #00d4ff80, 0 0 60px #7b2fff40' : '0 0 15px #00d4ff40',
            }}
          >
            {playing ? <RiPauseFill size={24} className="text-dark-900" /> : <RiPlayFill size={24} className="text-dark-900 ml-1" />}
          </motion.button>

          <button
            onClick={next}
            disabled={currentIndex === tracks.length - 1}
            className="text-white/40 hover:text-white disabled:opacity-20 transition-colors"
          >
            <RiSkipForwardFill size={22} />
          </button>
        </div>

        <div className="text-xs font-mono text-white/30 text-right">
          <div>{currentIndex + 1} / {tracks.length}</div>
          <div>tracks</div>
        </div>
      </div>

      {/* Track List */}
      <div className="border-t border-white/5">
        {tracks.map((t, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === currentIndex) {
                togglePlay()
              } else {
                setCurrentIndex(i)
                setTimeout(() => howlRef.current?.play(), 100)
              }
            }}
            className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 border-b border-white/5 last:border-0 ${
              i === currentIndex
                ? 'bg-neon-cyan/5'
                : 'hover:bg-white/3'
            }`}
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className={`w-6 text-center text-sm font-mono ${i === currentIndex ? 'text-neon-cyan' : 'text-white/20'}`}>
                {i === currentIndex && playing ? '▶' : i + 1}
              </div>
              <div className="min-w-0">
                <p className={`font-medium text-sm truncate ${i === currentIndex ? 'text-neon-cyan' : 'text-white'}`}>
                  {t.title}
                </p>
                <p className="text-xs text-white/30 truncate">{t.genre} {t.bpm ? `· ${t.bpm} BPM` : ''}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-white/30 flex-shrink-0 ml-4">{t.duration || '--:--'}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
