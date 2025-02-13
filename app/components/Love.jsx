"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
// import styles from "../styles/style.module.css";

const moveRandomEl = (elm) => {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
};

const Love = ({ imageSrc, message, yesLink, noLink, noButtonId }) => {
  useEffect(() => {
    if (noButtonId) {
      const moveRandom = document.querySelector("#" + noButtonId);
      if (moveRandom) {
        moveRandom.addEventListener("mouseenter", function (e) {
          moveRandomEl(e.target);
        });
      }
    }
  }, [noButtonId]);

  return (
    <div className="container">
      <Image src={imageSrc} alt="" width={200} height={200} unoptimized/>
      <h1>{message}</h1>
      <div className="btn">
        <Link href={yesLink}>Yes</Link>
        <Link href={noLink} id={noButtonId}>No</Link>
      </div>
    </div>
  );
};

export default Love;
