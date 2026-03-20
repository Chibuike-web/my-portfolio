"use client";

import { useRef, useState } from "react";
import { handleCopy } from "@/lib/copy";

export function useCopyEmail() {
  const [copyStatus, setCopyStatus] = useState("");
  const timeoutRef = useRef<number | null>(null);

  const copyEmail = async () => {
    await handleCopy(setCopyStatus);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopyStatus("");
    }, 800);
  };

  return {
    copyStatus,
    copyEmail,
  };
}
