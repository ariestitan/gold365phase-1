"use client";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://tinyurl.com/r32dj69c", "_blank");
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit} autoComplete="off" suppressHydrationWarning>
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          autoComplete="username"
          suppressHydrationWarning
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          suppressHydrationWarning
          required
        />
      </div>
      <button
        type="submit"
        className="login-btn"
        suppressHydrationWarning
      >
        Login
      </button>
    </form>
  );
}
