import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      toastOptions={{
        className: "font-semibold py-2 px-4",
      }}
    />
  </StrictMode>
);
