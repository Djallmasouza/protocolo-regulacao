import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const STORAGE_KEY = 'protocolo_regulacao_progress';

const initialProgress: UserProgress = {
  currentDay: 1,
  completedRituals: [],
  lastSomaticPoint: null,
  onboardingSeen: false
};

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeRitual = (day: number) => {
    setProgress(prev => {
      const newCompleted = Array.from(new Set([...prev.completedRituals, day]));
      const nextDay = Math.min(7, prev.currentDay + 1);
      return {
        ...prev,
        completedRituals: newCompleted,
        currentDay: nextDay
      };
    });
  };

  const setLastSomaticPoint = (pointId: string) => {
    setProgress(prev => ({ ...prev, lastSomaticPoint: pointId }));
  };

  const markOnboardingAsSeen = () => {
    setProgress(prev => ({ ...prev, onboardingSeen: true }));
  };

  const resetProgress = () => {
    setProgress(initialProgress);
  };

  return {
    progress,
    completeRitual,
    setLastSomaticPoint,
    markOnboardingAsSeen,
    resetProgress
  };
}
