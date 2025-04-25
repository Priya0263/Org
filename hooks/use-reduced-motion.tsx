"use client"

import { useState, useEffect } from "react"

export function useReducedMotion(): boolean {
  // Default to false (no reduced motion) for SSR
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for the prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    // Set the initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Add the callback as a listener for changes to the media query
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaQueryChange)
    }

    // Clean up function to remove the listener when the component unmounts
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaQueryChange)
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleMediaQueryChange)
      }
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return prefersReducedMotion
}
