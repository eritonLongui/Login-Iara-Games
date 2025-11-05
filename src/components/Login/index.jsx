import { useState } from "react";
import { getUsers } from "../../services/apiAuth.js";
import "../../index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const users = await getUsers();

    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      setMessage(`Bem-vindo, ${userFound.name}!`);
    } else {
      setMessage("Usuário ou senha inválidos.");
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <h1 className="fw-bold mytext-2 mb-4">Login</h1>

      <form
        onSubmit={handleLogin}
        className="box-form py-3 px-4 rounded shadow-sm mybg-5"
        style={{ width: "415px" }}
      >
        <div className="box-item mb-3">
          <label
            htmlFor="email"
            className="fw-bold ms-2 mb-1 mytext-1"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="iara.games@iara.com"
            className="form-control border-0 mybg-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="box-item mb-3">
          <label
            htmlFor="password"
            className="fw-bold ms-2 mb-1 mytext-1"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Senha123"
            className="form-control border-0 mybg-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="5"
          />
        </div>

        <div className="d-grid mt-4">
          <button
            type="submit"
            className="btn fw-bolder px-4 mytext-4 mybg-2"
          >
            Entrar
          </button>
        </div>
      </form>

      {message && (
        <p className="mt-3 fw-semibold mytext-1">{message}</p>
      )}
    </div>
  );
}

export default Login;