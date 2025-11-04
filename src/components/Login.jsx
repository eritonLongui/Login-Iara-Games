import { useState } from "react";
import { getUsers } from "../services/apiAuth";

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
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-4">Login Iara Games</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80">
        <input
          type="email"
          placeholder="E-mail"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded">Entrar</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default Login;