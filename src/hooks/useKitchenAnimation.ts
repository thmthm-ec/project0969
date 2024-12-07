import { useRef, useEffect } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export function useKitchenAnimation(isActive: boolean) {
  const ref = useRef<Group>(null);
  
  useFrame((state, delta) => {
    if (!ref.current || !isActive) return;

    // Subtle floating animation only when active
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  useEffect(() => {
    if (!ref.current) return;

    // Smooth scale transition
    if (isActive) {
      ref.current.scale.set(1.05, 1.05, 1.05);
    } else {
      ref.current.scale.set(1, 1, 1);
    }
  }, [isActive]);

  return ref;
}