"use client";

import { useState } from "react";
import { useSubscribe, type SubscribeSource } from "@/hooks/useSubscribe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type SubscribeFormProps = {
  source: SubscribeSource;
  /** Layout: "inline" (input + button row) or "stacked" (button below) */
  variant?: "inline" | "stacked";
  /** Override placeholder */
  placeholder?: string;
  /** Override button text */
  buttonText?: string;
  /** Extra class for the wrapper */
  className?: string;
  /** Input class name */
  inputClassName?: string;
  /** Button class name */
  buttonClassName?: string;
};

export function SubscribeForm({
  source,
  variant = "inline",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  className = "",
  inputClassName = "",
  buttonClassName = "",
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const { subscribe, loading, success, error, reset } = useSubscribe(source);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const ok = await subscribe(email);
    if (ok) setEmail("");
  };

  if (success) {
    return (
      <div className={`flex items-center gap-2 text-emerald-600 dark:text-emerald-400 ${className}`}>
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        <span className="text-sm font-medium">Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={variant === "inline" ? "flex flex-col sm:flex-row gap-3" : "space-y-4"}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            reset();
          }}
          disabled={loading}
          required
          className={inputClassName}
        />
        <Button type="submit" disabled={loading} className={buttonClassName}>
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </>
          )}
        </Button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </form>
  );
}
