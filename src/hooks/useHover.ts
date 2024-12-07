import { useState, useCallback } from 'react';

export function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerOver = useCallback(() => setIsHovered(true), []);
  const handlePointerOut = useCallback(() => setIsHovered(false), []);

  return {
    isHovered,
    hoverProps: {
      onPointerOver: handlePointerOver,
      onPointerOut: handlePointerOut,
    },
  };
}