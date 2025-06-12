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



  // Enhanced audio visualization simulation
  useEffect(() => {
    if (isPlaying) {
      let beatTime = 0
      
      const updateAudioData = () => {
        beatTime += 0.05
        
        const newData = new Array(128).fill(0).map((_, index) => {
          // Create realistic frequency distribution
          const frequency = index / 128
          
          // Bass frequencies (0-20%) - strong beat
          if (frequency < 0.2) {
            const bassbeat = Math.sin(beatTime * 4) * 0.7 + 0.3
            const randomVariation = Math.random() * 0.2
            return Math.min(1, bassbeat + randomVariation)
          }
          
          // Mid frequencies (20-60%) - melody
          if (frequency < 0.6) {
            const midbeat = Math.sin(beatTime * 2 + index * 0.1) * 0.5 + 0.2
            const randomVariation = Math.random() * 0.3
            return Math.min(1, midbeat + randomVariation)
          }
          
          // High frequencies (60-100%) - details
          const highbeat = Math.sin(beatTime * 8 + index * 0.05) * 0.3 + 0.1
          const randomVariation = Math.random() * 0.1
          return Math.min(1, highbeat + randomVariation)
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