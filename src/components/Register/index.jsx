import { useState } from "react";
import { createUser } from "../../services/apiAuth.js";
import { buscarEndereco } from "../../services/apiViaCep.js";
import "../../index.css";

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
      const data = await buscarEndereco(form.cep);
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
    <div className="mx-auto mt-5" style={{ maxWidth: "480px" }}>
      <h1 className="fs-5 fw-bold mytext-4 mb-4 text-center">
        Cadastro Iara Games
      </h1>

      <form onSubmit={handleSubmit} className="box-form">
        <div className="box-item">
          <label htmlFor="name" className="fw-bold ms-3 mt-2 mb-1 mytext-1">
            Nome
          </label>
          <input
            name="name"
            id="name"
            placeholder="Iara da Silva"
            className="form-control border-0 mybg-5"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="box-item">
          <label htmlFor="email" className="fw-bold ms-3 mt-2 mb-1 mytext-1">
            E-mail
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="iara.games@iara.com"
            className="form-control border-0 mybg-5"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="box-item">
          <label htmlFor="password" className="fw-bold ms-3 mt-2 mb-1 mytext-1">
            Senha
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Senha123"
            className="form-control border-0 mybg-5"
            value={form.password}
            onChange={handleChange}
            required
            minLength={5}
          />
        </div>

        <div className="box-item">
          <label htmlFor="cep" className="fw-bold ms-3 mt-2 mb-1 mytext-1">
            CEP
          </label>
          <input
            name="cep"
            id="cep"
            placeholder="00000-000"
            className="form-control border-0 mybg-5"
            value={form.cep}
            onChange={handleChange}
            onBlur={handleCepBlur}
          />
        </div>

        <div className="box-item">
          <label htmlFor="address" className="fw-bold ms-3 mt-2 mb-1 mytext-1">
            Endereço
          </label>
          <input
            name="address"
            id="address"
            placeholder="Rua, bairro, cidade"
            className="form-control border-0 mybg-5"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button
            type="submit"
            className="btn fw-bolder px-4 mytext-4"
            aria-label="Pressione para Cadastrar"
          >
            Cadastrar
          </button>
        </div>
      </form>

      {message && (
        <p className="mt-3 text-success fw-bold text-center">{message}</p>
      )}
    </div>
  );
}

export default Register;