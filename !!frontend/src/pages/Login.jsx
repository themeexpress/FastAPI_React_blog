import api from "../api/api";

export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await api.post("/token", new URLSearchParams(form));
    localStorage.setItem("token", res.data.access_token);
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <h2>Login</h2>
      <input name="username" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button>Login</button>
    </form>
  );
}
