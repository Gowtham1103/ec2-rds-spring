import { useState } from "react";
import "./login.css";

const BASE_URL =
  "http://ec2-13-232-111-122.ap-south-1.compute.amazonaws.com:8080/auth";

function Login({ onBack, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password
    };

    console.log("Login payload:", payload); // debug

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

      if (!res.ok) {
        alert(text || "Login failed");
        return;
      }

      onSuccess(text); // "Hello Firstname Lastname"
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="page login-page">
      <div className="card">
        <h2>Login</h2>

        <form className="form" onSubmit={handleLogin}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button className="btn primary full" type="submit">
            Submit
          </button>
        </form>

        <button className="link-btn" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default Login;
