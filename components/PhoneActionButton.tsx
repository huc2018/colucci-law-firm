"use client";

import { useEffect, useRef, useState } from "react";

type PhoneActionButtonProps = {
  phoneNumber: string;
  label: string;
  className?: string;
  copiedLabel?: string;
  copyFailedLabel?: string;
};

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";
const FEEDBACK_TIMEOUT_MS = 2000;

export default function PhoneActionButton({
  phoneNumber,
  label,
  className,
  copiedLabel = "电话已复制",
  copyFailedLabel = "复制失败，请手动复制",
}: PhoneActionButtonProps) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setFeedbackWithTimeout = (message: string) => {
    setFeedback(message);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setFeedback(null);
    }, FEEDBACK_TIMEOUT_MS);
  };

  const handleClick = async () => {
    const isMobile = window.matchMedia(MOBILE_MEDIA_QUERY).matches;

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
      return;
    }

    try {
      await navigator.clipboard.writeText(phoneNumber);
      setFeedbackWithTimeout(copiedLabel);
    } catch {
      setFeedbackWithTimeout(copyFailedLabel);
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {feedback ?? label}
    </button>
  );
}
