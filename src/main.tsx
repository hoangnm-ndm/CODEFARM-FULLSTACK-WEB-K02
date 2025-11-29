import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { queryClient } from "./api/apiQuery.ts";
import App from "./App.tsx";
import "./index.css";
import ThemeControl from "./ThemeControl.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeControl>
        <App />
      </ThemeControl>
    </QueryClientProvider>
  </StrictMode>
);
