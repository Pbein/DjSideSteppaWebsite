'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react'

interface SoundCloudWidget {
  bind: (event: string, callback: () => void) => void
  play: () => void
  pause: () => void
  setVolume: (volume: number) => void
  getVolume: (callback: (volume: number) => void) => void
}

interface MusicContextType {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  audioData: number[]
  volume: number
  setVolume: (volume: number) => void
  currentTrack: string | null
  setCurrentTrack: (track: string | null) => void
  widgetRef: React.RefObject<HTMLIFrameElement | null>
  widget: SoundCloudWidget | null
  setWidget: (widget: SoundCloudWidget | null) => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export const useMusicContext = () => {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error('useMusicContext must be used within a MusicProvider')
  }
  return context
}

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioData, setAudioData] = useState<number[]>(new Array(128).fill(0))
  const [volume, setVolume] = useState(75)
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [widget, setWidget] = useState<SoundCloudWidget | null>(null)
  const widgetRef = useRef<HTMLIFrameElement | null>(null)
  const animationRef = useRef<number>()



  // Realistic music-like beat simulation
  useEffect(() => {
    if (isPlaying) {
      let beatTime = 0
      let kickPattern = 0
      let snarePattern = 0
      let hihatPattern = 0
      
      const updateAudioData = () => {
        beatTime += 0.03
        kickPattern += 0.15
        snarePattern += 0.125
        hihatPattern += 0.25
        
        // Simulate different drum patterns and musical elements
        const kickDrum = Math.max(0, Math.sin(kickPattern) * 0.8 + 0.2) // Strong kick on 1 and 3
        const snareDrum = Math.max(0, Math.sin(snarePattern + Math.PI) * 0.6 + 0.1) // Snare on 2 and 4
        const hihat = Math.max(0, Math.sin(hihatPattern) * 0.4 + 0.1) // Fast hi-hat pattern
        
        // Add some musical variation and fills
        const fillIntensity = Math.sin(beatTime * 0.1) * 0.3 + 0.7
        const breakdown = Math.sin(beatTime * 0.05) > 0.7 ? 1.5 : 1
        
        const newData = new Array(128).fill(0).map((_, index) => {
          const frequency = index / 128
          
          // Sub-bass and kick (0-8%) - Powerful low end
          if (frequency < 0.08) {
            const intensity = kickDrum * breakdown * (0.8 + Math.random() * 0.2)
            return Math.min(1, intensity)
          }
          
          // Bass frequencies (8-20%) - Bass line with kick influence
          if (frequency < 0.2) {
            const bassLine = Math.sin(beatTime * 3 + index * 0.2) * 0.4 + 0.4
            const kickInfluence = kickDrum * 0.3
            const intensity = (bassLine + kickInfluence) * fillIntensity * (0.7 + Math.random() * 0.3)
            return Math.min(1, intensity)
          }
          
          // Low-mid frequencies (20-40%) - Snare and low melody
          if (frequency < 0.4) {
            const snareInfluence = snareDrum * 0.8
            const melody = Math.sin(beatTime * 1.5 + index * 0.3) * 0.3 + 0.2
            const intensity = (snareInfluence + melody) * fillIntensity * (0.6 + Math.random() * 0.4)
            return Math.min(1, intensity)
          }
          
          // Mid frequencies (40-60%) - Main melody and instruments
          if (frequency < 0.6) {
            const melody = Math.sin(beatTime * 2 + index * 0.1) * 0.5 + 0.3
            const harmonic = Math.sin(beatTime * 1.2 + index * 0.15) * 0.2
            const intensity = (melody + harmonic) * fillIntensity * (0.5 + Math.random() * 0.3)
            return Math.min(1, intensity)
          }
          
          // High-mid frequencies (60-80%) - Hi-hats and percussions
          if (frequency < 0.8) {
            const hihatInfluence = hihat * 0.6
            const percussion = Math.sin(beatTime * 4 + index * 0.05) * 0.3
            const intensity = (hihatInfluence + percussion) * fillIntensity * (0.4 + Math.random() * 0.3)
            return Math.min(1, intensity)
          }
          
          // High frequencies (80-100%) - Cymbals and sparkle
          const sparkle = Math.sin(beatTime * 6 + index * 0.02) * 0.2 + 0.1
          const cymbal = Math.sin(beatTime * 0.8) > 0.9 ? Math.random() * 0.5 : 0
          const intensity = (sparkle + cymbal) * fillIntensity * (0.3 + Math.random() * 0.2)
          return Math.min(1, intensity)
        })
        
        setAudioData(newData)
        animationRef.current = requestAnimationFrame(updateAudioData)
      }
      
      updateAudioData()
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      setAudioData(new Array(128).fill(0))
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  const value: MusicContextType = {
    isPlaying,
    setIsPlaying,
    audioData,
    volume,
    setVolume,
    currentTrack,
    setCurrentTrack,
    widgetRef,
    widget,
    setWidget,
  }

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  )
} 