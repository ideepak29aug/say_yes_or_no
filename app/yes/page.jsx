"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Page() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play background music
    if (audioRef.current) {
      audioRef.current.play();
    }

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("hearts");
      heart.innerText = "❤️"; // Adds a heart emoji
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    };

    const interval = setInterval(createHeart, 500);
    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="container">
      {/* Background Music - Hidden */}
      <audio ref={audioRef} src="/tum-hi-ho.mp3" loop autoPlay hidden />

      <Image src="/mochi-cat.gif" alt="" width={200} height={200} />
      <h1>Hehehehe, I knew it! 😘</h1>
      <p className="heart">I LOVE YOU MAMTA 💖</p>
    </div>
  );
}
