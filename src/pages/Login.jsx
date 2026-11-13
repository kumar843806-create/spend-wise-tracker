
function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Login authentication is not connected yet.");
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <p>Login to your SpendWise account.</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          required
        />

        <button className="primary-btn" type="submit">
          Login
        </button>

        <p>Don't have an account? Register now.</p>
      </form>
    </div>
  );
}

export default Login;
