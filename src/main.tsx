import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Support both Shopify (react-homepage-root) and local dev (root)
const mountApp = () => {
  const rootElement = document.getElementById("react-homepage-root") || document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
};

// For Shopify: wait for DOMContentLoaded
// For local dev: mount immediately if DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
