import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Console easter egg — hi there 👀
console.log(
  "%c\n" +
  "   ██╗ ██████╗ \n" +
  "   ██║██╔═══██╗\n" +
  "   ██║██║   ██║\n" +
  "██ ██║██║   ██║\n" +
  "╚█████╔╝╚██████╔╝\n" +
  " ╚════╝  ╚═════╝ \n",
  "color: #7c3aed; font-family: monospace;"
);
console.log(
  "%cHey, I see you're poking around 👋\n" +
  "%cI'm Joseph Onofiok — Blockchain, AI & Full-Stack Developer.\n" +
  "%cLet's build something together → josephonofiok08@gmail.com",
  "font-size: 14px; font-weight: bold; color: #06b6d4;",
  "font-size: 13px; color: #a855f7;",
  "font-size: 12px; color: #94a3b8;"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
