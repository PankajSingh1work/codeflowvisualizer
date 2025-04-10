"use client";

import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { parseCode } from "../../lib/parseCode"; // Adjust the import path as necessary
import gsap from "gsap";

export default function Home() {
  const [code, setCode] = useState("let x = 5;\nx = x + 1;");
  const [steps, setSteps] = useState<any[]>([]);

  const analyzeCode = () => {
    const ast = parseCode(code);
    if (ast) {
      // Simplified: Extract steps (this will grow with more logic)
      const executionSteps = [];
      executionSteps.push("Highlight line 1: let x = 5");
      executionSteps.push("Highlight line 2: x = x + 1");
      setSteps(executionSteps);

      // Animate steps
      gsap.to(".step", {
        opacity: 1,
        duration: 1,
        stagger: 1,
        onComplete: () => console.log("Animation done"),
      });
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Code Flow Visualizer</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <CodeMirror
            value={code}
            height="300px"
            extensions={[javascript()]}
            onChange={(value) => setCode(value)}
            theme="dark"
          />
          <button
            onClick={analyzeCode}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Run
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-2">Execution Steps</h2>
          {steps.map((step, index) => (
            <p key={index} className="step opacity-0">
              {step}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}