'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useMusicContext } from './MusicContext'

const AudioVisualizer: React.FC = () => {
  const { isPlaying, audioData } = useMusicContext()
  const pathname = usePathname()
  const [beatIntensity, setBeatIntensity] = useState(0)
  const [bassIntensity, setBassIntensity] = useState(0)
  const [kickFlash, setKickFlash] = useState(0)
  const [snareFlash, setSnareFlash] = useState(0)

  useEffect(() => {
    if (isPlaying && audioData.length > 0 && pathname === '/') {
      // Analyze realistic frequency ranges like actual audio
      const subBass = audioData.slice(0, 10) // Sub-bass and kick (0-8%)
      const bassData = audioData.slice(10, 25) // Bass (8-20%)
      const lowMidData = audioData.slice(25, 51) // Low-mid (20-40%) - snare
      const midData = audioData.slice(51, 77) // Mid (40-60%) - melody
      const highMidData = audioData.slice(77, 102) // High-mid (60-80%) - hi-hats
      const highData = audioData.slice(102, 128) // High (80-100%) - cymbals
      
      // Calculate averages for different frequency ranges
      const kickIntensity = subBass.reduce((sum, value) => sum + value, 0) / subBass.length
      const bassAverage = bassData.reduce((sum, value) => sum + value, 0) / bassData.length
      const snareIntensity = lowMidData.reduce((sum, value) => sum + value, 0) / lowMidData.length
      const midAverage = midData.reduce((sum, value) => sum + value, 0) / midData.length
      const hihatIntensity = highMidData.reduce((sum, value) => sum + value, 0) / highMidData.length
      const cymbalIntensity = highData.reduce((sum, value) => sum + value, 0) / highData.length
      
             // Create more musical beat intensity (emphasize kick and snare)
       const musicalBeat = (kickIntensity * 0.4) + (snareIntensity * 0.3) + (midAverage * 0.2) + (hihatIntensity * 0.1)
       const enhancedBass = (kickIntensity * 0.6) + (bassAverage * 0.4)
       
       setBeatIntensity(musicalBeat)
       setBassIntensity(enhancedBass)
       
       // Set flash effects for dramatic beats
       setKickFlash(kickIntensity > 0.7 ? kickIntensity : 0)
       setSnareFlash(snareIntensity > 0.6 ? snareIntensity : 0)
    } else {
      setBeatIntensity(0)
      setBassIntensity(0)
    }
  }, [isPlaying, audioData, pathname])

  // Reset effects when navigating away from homepage
  useEffect(() => {
    if (pathname !== '/') {
      setBeatIntensity(0)
      setBassIntensity(0)
    }
  }, [pathname])

  // Only show visualizer on homepage and when playing
  if (!isPlaying || pathname !== '/') {
    return null
  }

  // Dynamic CSS variables for realistic beat-responsive animations
  const pulseStyle = {
    '--beat-intensity': beatIntensity,
    '--bass-intensity': bassIntensity,
    '--kick-flash': kickFlash,
    '--snare-flash': snareFlash,
    '--pulse-scale': 1 + beatIntensity * 0.3,
    '--pulse-opacity': 0.25 + beatIntensity * 0.5,
    '--bass-scale': 1 + bassIntensity * 0.5,
    '--bass-opacity': 0.2 + bassIntensity * 0.6,
  } as React.CSSProperties

  return (
    <>
      {/* Main background pulse layers */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={pulseStyle}
      >
        {/* Primary pulse layer - Kick responsive */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, 
              rgba(255, 20, 147, ${0.2 + beatIntensity * 0.6 + kickFlash * 0.3}) 0%, 
              rgba(255, 0, 255, ${0.1 + beatIntensity * 0.3 + kickFlash * 0.2}) 35%, 
              transparent 70%)`,
            transform: `scale(${1 + beatIntensity * 0.4 + kickFlash * 0.2})`,
            transition: 'all 0.05s ease-out',
            filter: `brightness(${1.6 + kickFlash * 0.8}) saturate(${2.2 + kickFlash * 1.3})`,
          }}
        />
        
        {/* Secondary pulse layer - Snare responsive */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 65% 35%, 
              rgba(0, 255, 255, ${0.15 + bassIntensity * 0.5 + snareFlash * 0.4}) 0%, 
              rgba(0, 191, 255, ${0.08 + bassIntensity * 0.25 + snareFlash * 0.2}) 30%, 
              transparent 65%)`,
            transform: `scale(${1 + bassIntensity * 0.5 + snareFlash * 0.3}) rotate(${beatIntensity * 90 + snareFlash * 45}deg)`,
            transition: 'all 0.08s ease-out',
            filter: `brightness(${1.8 + snareFlash * 1.2}) saturate(${2.5 + snareFlash * 1.5})`,
          }}
        />

        {/* Tertiary pulse layer - Neon Purple */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 25% 75%, 
              rgba(138, 43, 226, ${0.18 + beatIntensity * 0.35}) 0%, 
              rgba(75, 0, 130, ${0.09 + beatIntensity * 0.18}) 40%, 
              transparent 70%)`,
            transform: `scale(${1 + beatIntensity * 0.25}) rotate(${-beatIntensity * 30}deg)`,
            transition: 'all 0.1s ease-out',
            filter: 'brightness(2) saturate(3)',
          }}
        />
      </div>

                           {/* Vibrant floating particles */}
       <div className="fixed inset-0 pointer-events-none z-5">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${(i * 8 + 15) % 85}%`,
                top: `${(i * 12 + 20) % 75}%`,
                width: `${2 + beatIntensity * 6}px`,
                height: `${2 + beatIntensity * 6}px`,
                background: i % 3 === 0 ? '#ff1493' : i % 3 === 1 ? '#00bfff' : '#9932cc',
                opacity: 0.7 + beatIntensity * 0.3,
                transform: `translateY(${Math.sin((Date.now() + i * 150) * 0.002) * 20}px) scale(${1 + beatIntensity * 2})`,
                boxShadow: `0 0 ${12 + beatIntensity * 25}px currentColor`,
                transition: 'all 0.08s ease-out',
                filter: 'brightness(2) saturate(2.5)',
              }}
            />
          ))}
       </div>

      {/* Edge glow effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Top edge glow */}
        <div 
          className="absolute top-0 left-0 right-0 h-20"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(255, 0, 255, ${0.1 + beatIntensity * 0.4}) 0%, 
              transparent 100%)`,
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bottom edge glow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: `linear-gradient(to top, 
              rgba(0, 255, 255, ${0.1 + bassIntensity * 0.4}) 0%, 
              transparent 100%)`,
            transition: 'all 0.1s ease-out',
          }}
        />
      </div>

      {/* Enhanced frequency bars */}
      <div className="fixed bottom-4 left-4 right-4 pointer-events-none z-10 flex justify-center">
        <div className="flex items-end space-x-1 opacity-80">
          {audioData.slice(0, 40).map((value, i) => (
            <div
              key={i}
              className="rounded-t"
              style={{
                width: '2px',
                height: `${Math.max(1, value * 60)}px`,
                background: `linear-gradient(to top, 
                  ${i < 13 ? '#ff00ff' : i < 26 ? '#00ffff' : '#8000ff'}, 
                  ${i < 13 ? '#ff88ff' : i < 26 ? '#88ffff' : '#cc88ff'})`,
                boxShadow: `0 0 ${2 + value * 8}px currentColor`,
                transition: 'all 0.05s ease-out',
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner accent lights */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Top-left corner */}
        <div 
          className="absolute top-0 left-0 w-32 h-32"
          style={{
            background: `radial-gradient(circle at bottom right, 
              rgba(255, 0, 255, ${0.2 + beatIntensity * 0.5}) 0%, 
              transparent 70%)`,
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bottom-right corner */}
        <div 
          className="absolute bottom-0 right-0 w-32 h-32"
          style={{
            background: `radial-gradient(circle at top left, 
              rgba(0, 255, 255, ${0.2 + bassIntensity * 0.5}) 0%, 
              transparent 70%)`,
            transition: 'all 0.1s ease-out',
          }}
        />
      </div>
    </>
  )
}

export default AudioVisualizer 