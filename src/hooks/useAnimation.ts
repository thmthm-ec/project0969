import { useRef, useEffect } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { animateFloat, animateRotation } from '../utils/animations';

interface AnimationOptions {
  floating?: boolean;
  rotating?: boolean;
  floatAmplitude?: number;
  rotationSpeed?: number;
}

export function useAnimation(options: AnimationOptions = {}) {
  const ref = useRef<Group>(null);
  const {
    floating = false,
    rotating = false,
    floatAmplitude = 0.1,
    rotationSpeed = 0.01
  } = options;

  useFrame((state) => {
    if (floating) {
      animateFloat(ref, state.clock.elapsedTime, floatAmplitude);
    }
    if (rotating) {
      animateRotation(ref, rotationSpeed);
    }
  });

  return ref;
}