"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
}

const AnimatedCounter = ({ from, to }: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(() => Math.round(count.get()));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <span>{display}</span>;
};

export default AnimatedCounter;
