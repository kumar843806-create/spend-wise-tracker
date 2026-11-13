
function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Registration authentication is not connected yet.");
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Join SpendWise today.</p>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          required
        />

        <button className="primary-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
