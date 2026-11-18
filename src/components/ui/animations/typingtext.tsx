import { useEffect, useState } from "react";
import { motion } from "motion/react";

const phrases = [
  "convert visitors into customers. No Bullsh*t.",
  "drive more qualified leads. No Bullsh*t.",
  "make your brand stand out. No Bullsh*t.",
];

export function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex] ?? "";

  useEffect(() => {
    const speed = deleting ? 35 : 65;

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = currentPhrase.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentPhrase) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const nextText = currentPhrase.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, currentPhrase]);

  const accentText = "No Bullsh*t.";
  const accentIndex = text.indexOf(accentText);

  const normalText =
    accentIndex === -1 ? text : text.slice(0, accentIndex);

  const typedAccent =
    accentIndex === -1 ? "" : text.slice(accentIndex);

  return (
    <span className="inline">
      {normalText}
      <span className="text-accent">{typedAccent}</span>

      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        className="ml-1 inline-block"
      >
        |
      </motion.span>
    </span>
  );
}