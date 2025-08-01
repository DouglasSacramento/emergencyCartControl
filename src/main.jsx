import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
