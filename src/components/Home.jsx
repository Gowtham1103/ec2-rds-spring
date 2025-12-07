import "./Home.css";

function Home({ onLogin, onSignup }) {
  return (
    <div className="page home-page">
      <div className="card">
        <h1 className="title">Page-1</h1>
        <p className="subtitle">Auth AWS-Ec2-RDS</p>
        <div className="actions">
          <button className="btn primary" onClick={onLogin}>
            Login
          </button>
          <button className="btn secondary" onClick={onSignup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
