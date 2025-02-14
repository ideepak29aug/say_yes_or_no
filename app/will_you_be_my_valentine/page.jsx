'use client'

import { useEffect, useState } from "react";
import Love from "../components/Love";

export default function Page() {
  const [storedName, setStoredName] = useState("");
  useEffect(() => {
      const savedName = localStorage.getItem("username");
      if (savedName) {
        setStoredName(savedName);
      }
    }, []);

  return (
    <Love
      imageSrc="/manja.gif"
      message={`Will You be my Valentine ${storedName}? 🤗`}
      yesLink="/yes"
      noLink="/soch_le_ache_se"
    />
  );
}
