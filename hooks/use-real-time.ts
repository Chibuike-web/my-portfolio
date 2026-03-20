"use client";

import { useEffect, useState } from "react";

export function useRealTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      setTime(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}${ampm}`);
    };

    updateTime();

    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return time;
}
