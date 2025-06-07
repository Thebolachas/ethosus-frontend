import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [msg, setMsg] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('ethosus_token') || '');

  const login = async () => {
    const res = await fetch("https://ethosus-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@ethosus.com", password: "admin123" })
    });
    const data = await res.json();

    if (data.access_token) {
      localStorage.setItem("ethosus_token", data.access_token);
      setToken(data.access_token);
      setMsg("Login realizado com sucesso.");
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
    setMsg(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>EthoSUS</h1>
      <button onClick={login}>Fazer Login</button>
      <button onClick={carregarDenuncias} disabled={!token} style={{ marginLeft: 10 }}>Carregar Denúncias</button>
      <pre>{msg}</pre>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
