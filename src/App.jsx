import { useState } from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [helloMsg, setHelloMsg] = useState("");

  return (
    <div className="app">
      {page === "home" && (
        <Home
          onLogin={() => setPage("login")}
          onSignup={() => setPage("signup")}
        />
      )}

      {page === "login" && (
        <Login
          onBack={() => setPage("home")}
          onSuccess={(msg) => {
            setHelloMsg(msg);
            setPage("welcome");
          }}
        />
      )}

      {page === "signup" && (
        <Signup
          onBack={() => setPage("home")}
          onSuccess={() => setPage("login")}
        />
      )}

      {page === "welcome" && (
        <Welcome
          message={helloMsg}
          onLogout={() => {
            setHelloMsg("");
            setPage("home");
          }}
        />
      )}
    </div>
  );
}

export default App;
