import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import "./demos/ipc";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./views/splash-screen";
import MainScreen from "./views/main-screen";
import { RecorderProvider } from "./hooks/recorder";
import SessionScreen from "./views/session-screen";
import EndScreen from "./views/end-screen";
import { SystemProvider } from "./hooks/system";
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SystemProvider>
      <RecorderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/main-screen" element={<MainScreen />} />
            <Route path="/session-screen" element={<SessionScreen />} />
            <Route path="/end-screen" element={<EndScreen />} />
          </Routes>
        </BrowserRouter>
      </RecorderProvider>
    </SystemProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
