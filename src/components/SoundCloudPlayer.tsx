'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useMusicContext } from './MusicContext'

interface SoundCloudPlayerProps {
  src: string
  className?: string
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ src, className = '' }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { setIsPlaying, setCurrentTrack, volume, setVolume } = useMusicContext()
  const [widget, setWidget] = useState<any>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const loadWidget = () => {
      if (iframeRef.current && (window as any).SC) {
        const widgetInstance = (window as any).SC.Widget(iframeRef.current)
        setWidget(widgetInstance)

        // Bind events for visual effects
        widgetInstance.bind((window as any).SC.Widget.Events.READY, () => {
          console.log('SoundCloud: Widget ready')
          setIsReady(true)
          widgetInstance.setVolume(volume)
        })

        widgetInstance.bind((window as any).SC.Widget.Events.PLAY, () => {
          console.log('SoundCloud: Music started - triggering visuals')
          setIsPlaying(true)
          setCurrentTrack('Side Steppa Live Arlington')
        })

        widgetInstance.bind((window as any).SC.Widget.Events.PAUSE, () => {
          console.log('SoundCloud: Music paused - stopping visuals')
          setIsPlaying(false)
        })

        widgetInstance.bind((window as any).SC.Widget.Events.FINISH, () => {
          console.log('SoundCloud: Music finished - stopping visuals')
          setIsPlaying(false)
        })
      }
    }

    // Load SoundCloud Widget API
    if (!(window as any).SC) {
      const script = document.createElement('script')
      script.src = 'https://w.soundcloud.com/player/api.js'
      script.async = true
      script.onload = loadWidget
      document.head.appendChild(script)
    } else {
      loadWidget()
    }
  }, [setIsPlaying, setCurrentTrack, volume])

  // Update volume when changed
  useEffect(() => {
    if (widget && isReady) {
      widget.setVolume(volume)
    }
  }, [widget, volume, isReady])

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
  }

  return (
    <div className="space-y-4">
      <iframe
        ref={iframeRef}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        className={`rounded-lg shadow-[0_0_30px_#ff00ff55] ${className}`}
        src={src}
        title="SoundCloud Player"
      />
      
      {/* Volume Control */}
      <div className="flex items-center justify-center space-x-3 bg-black/40 rounded-lg p-3 border border-neonBlue/30">
        <span className="text-white text-sm">🔊</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <span className="text-white text-sm font-bold min-w-[35px]">{volume}%</span>
      </div>
    </div>
  )
}

export default SoundCloudPlayer 