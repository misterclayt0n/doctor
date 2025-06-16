"use client";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setIsAnimating(true);
    
    // Small delay to trigger CSS animation
    setTimeout(() => {
      setCurrentWord(word);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Animation duration
    }, 100);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating && isMounted) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation, isMounted]);

  // Fallback for SSR or before hydration
  if (!isMounted) {
    return (
      <span className={cn("inline-block text-left", className)}>
        {currentWord}
      </span>
    );
  }

  return (
    <span 
      className={cn(
        "inline-block text-left transition-all duration-500 ease-in-out",
        isAnimating ? "opacity-0 transform translate-y-2 scale-95" : "opacity-100 transform translate-y-0 scale-100",
        className
      )}
      key={currentWord}
    >
      {currentWord}
    </span>
  );
};