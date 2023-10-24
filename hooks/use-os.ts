"use client";

import { useEffect, useState } from "react";

export enum OS {
  WINDOW,
  MAC,
  LINUX,
  UNKNOWN,
}

export const useGetAgentSystem = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!("navigator" in window)) {
    return OS.UNKNOWN;
  }

  const platform = navigator?.userAgent?.toLowerCase();

  if (platform.includes("win")) return OS.WINDOW;
  if (platform.includes("mac")) return OS.MAC;
  if (platform.includes("linux")) return OS.LINUX;
  return OS.UNKNOWN;
};
