import "./Welcome.css";

function Welcome({ message, onLogout }) {
  return (
    <div className="page welcome-page">
      <div className="card">
        <h2>{message || "Hello, User"}</h2>
        <button className="btn secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
