import { useState } from "react";
import Login from '../Login/index.jsx'
import Register from '../Register/index.jsx'
import "../../index.css";

function Body() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      {showLogin ? (
        <>
          <Login />
          <p>
            Ainda não tem login?{" "}
            <button
              onClick={() => setShowLogin(false)}
              className="mytext-1 fw-bold"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Cadastre-se aqui
            </button>
          </p>
        </>
      ) : (
        <>
          <Register />
          <p>
            Já possui uma conta?{" "}
            <button
              onClick={() => setShowLogin(true)}
              className="mytext-1 fw-bold"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Faça login
            </button>
          </p>
        </>
      )}
    </div>
  )
};

export default Body;
