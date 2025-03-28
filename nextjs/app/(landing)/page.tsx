"use client";
import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  const [response, setResponse] = useState("");

  // Function to send a variable to the Python API and display the response
  const sendData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/echo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: "Hello from Next.js" }),
      });
      const data = await res.json();
      setResponse(data.received);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-white text-black">Landing Page</div>
        <div className="bg-red-500 text-white">
          Hello Matthew from new project (landing)
        </div>
        <Button variant="destructive" onClick={sendData}>
          Click me ME
        </Button>{" "}
        <h1>Next.js + TypeScript</h1>
        <p>Response from Python: {response}</p>
        <Image src="/logo.png" alt="Vercel Logo" width={72} height={16} />
      </div>
    </div>
  );
}
