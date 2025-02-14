'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setStoredName(savedName);
    }
  }, []);

  const handleSave = () => {
    if (!name.trim()) {
      alert("Please enter a name before proceeding.");
      return;
    }
    localStorage.setItem("username", name);
    setStoredName(name);
    router.push("/will_you_be_my_valentine");
  };

  const handleClear = () => {
    localStorage.removeItem("username");
    setStoredName("");
  };

  return (
    <div className="container p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="border p-2 rounded w-80"
      />
      <button onClick={handleSave} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Save Name & Proceed
      </button>
      {storedName && (
        <div className="mt-4">
          <p>Stored Name: {storedName}</p>
          <button onClick={handleClear} className="p-2 bg-red-500 text-white rounded">
            Clear Name
          </button>
        </div>
      )}
    </div>
  );
}
