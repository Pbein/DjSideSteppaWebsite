'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useMusicContext } from './MusicContext'

const MusicStateManager = () => {
  const pathname = usePathname()
  const { setIsPlaying, setCurrentTrack } = useMusicContext()

  useEffect(() => {
    // Reset music state when not on homepage
    if (pathname !== '/') {
      setIsPlaying(false)
      setCurrentTrack(null)
    }
  }, [pathname, setIsPlaying, setCurrentTrack])

  return null
}

export default MusicStateManager 