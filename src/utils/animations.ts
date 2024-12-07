import { MutableRefObject } from 'react';
import { Group } from 'three';

export const animateHover = (ref: MutableRefObject<Group | null>, isHovered: boolean) => {
  if (!ref.current) return;
  
  const scale = isHovered ? 1.1 : 1;
  ref.current.scale.set(scale, scale, scale);
};

export const animateRotation = (ref: MutableRefObject<Group | null>, speed: number = 0.01) => {
  if (!ref.current) return;
  ref.current.rotation.y += speed;
};

export const animateFloat = (ref: MutableRefObject<Group | null>, time: number, amplitude: number = 0.1) => {
  if (!ref.current) return;
  ref.current.position.y = Math.sin(time) * amplitude;
};