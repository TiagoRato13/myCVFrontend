import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthWrapper } from "./context/auth.context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </Router>
  </React.StrictMode>
);
