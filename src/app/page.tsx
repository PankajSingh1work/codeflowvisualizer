"use client"; // Required for client-side components like CodeMirror

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Home() {
  const [code, setCode] = useState("let x = 5;\nx = x + 1;");

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Code Flow Visualizer</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Code Editor */}
        <div className="bg-white p-4 rounded shadow">
          <CodeMirror
            value={code}
            height="300px"
            extensions={[javascript()]}
            onChange={(value) => setCode(value)}
            theme="dark"
          />
        </div>
        {/* Animation Placeholder */}
        <div className="bg-white p-4 rounded shadow">
          <p>Animation will appear here</p>
        </div>
      </div>
    </main>
  );
}