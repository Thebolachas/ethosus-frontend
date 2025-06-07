import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msg, setMsg] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('ethosus_token') || '');
  const [denuncias, setDenuncias] = useState([]);

  const login = async () => {
    const res = await fetch("https://ethosus-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: senha })
    });

    const data = await res.json();

    if (data.access_token) {
      localStorage.setItem("ethosus_token", data.access_token);
      setToken(data.access_token);
      setMsg("Login realizado com sucesso!");
    } else {
      setMsg(data.detail || "Erro no login");
    }
  };

  const carregarDenuncias = async () => {
    const res = await fetch("https://ethosus-backend.onrender.com/denuncias", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    setDenuncias(data);
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>EthoSUS</h1>

      {!token && (
        <div style={{ marginBottom: 20 }}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: 10 }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ marginRight: 10 }}
          />
          <button onClick={login}>Entrar</button>
        </div>
      )}

      {msg && <p><strong>{msg}</strong></p>}

      {token && (
        <>
          <button onClick={carregarDenuncias}>Carregar Denúncias</button>
          <ul style={{ marginTop: 20 }}>
            {denuncias.map((d) => (
              <li key={d.id}>
                <strong>[{d.type}]</strong> {d.text}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
