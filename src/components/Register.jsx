import { useState } from "react";
import { createUser } from "../services/apiAuth";
import { getAddressByCep } from "../services/apiViaCep";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cep: "",
    address: "",
  });
  const [message, setMessage] = useState("");

  async function handleCepBlur() {
    if (form.cep.length === 8) {
      const data = await getAddressByCep(form.cep);
      setForm((prev) => ({ ...prev, address: data.logradouro || "Não encontrado" }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createUser(form);
    setMessage("Cadastro realizado com sucesso!");
    setForm({ name: "", email: "", password: "", cep: "", address: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-4">Cadastro Iara Games</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input
          name="name"
          placeholder="Nome"
          className="p-2 border rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          className="p-2 border rounded"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          className="p-2 border rounded"
          value={form.password}
          onChange={handleChange}
        />
        <input
          name="cep"
          placeholder="CEP"
          className="p-2 border rounded"
          value={form.cep}
          onChange={handleChange}
          onBlur={handleCepBlur}
        />
        <input
          name="address"
          placeholder="Endereço"
          className="p-2 border rounded"
          value={form.address}
          onChange={handleChange}
        />
        <button className="bg-green-600 text-white p-2 rounded">Cadastrar</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default Register;