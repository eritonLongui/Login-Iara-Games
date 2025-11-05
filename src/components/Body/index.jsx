import { useState } from "react";
import Login from '../Login/index.jsx'
import Register from '../Register/index.jsx'

function Body() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <Login />
          <p>
            Ainda não tem login?{" "}
            <button
              onClick={() => setShowLogin(false)}
              style={{
                color: "blue",
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
              style={{
                color: "blue",
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
