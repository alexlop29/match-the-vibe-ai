"use client";
// default
import { useState, useEffect } from "react";

// comps
import { Progress } from "./ui/progress";

const Loader = () => {
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 15));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} />;
};

export { Loader };
