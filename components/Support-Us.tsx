"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `"Pursuing dreams and aspirations is challenging, and one of the hardest parts is to persist and keep chasing them. As Predators, we are dedicated to striving for success, but we need your support in bearing this responsibility."
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
