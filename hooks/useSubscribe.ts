"use client";

import { useState, useCallback } from "react";

export type SubscribeSource = "home" | "footer" | "blog" | "website";

export function useSubscribe(source: SubscribeSource = "website") {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = useCallback(
    async (email: string) => {
      setLoading(true);
      setSuccess(false);
      setError(null);
      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim(), source }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setError(data.message || "Something went wrong. Please try again.");
          return false;
        }
        setSuccess(true);
        return true;
      } catch (e) {
        setError("Something went wrong. Please try again.");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [source]
  );

  return { subscribe, loading, success, error, reset: () => { setSuccess(false); setError(null); } };
}
