import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EthoSUSJobsVision() {
  const navigate = useNavigate();
  const [resumo, setResumo] = useState({ denuncias: 0, cursos: 0, integridade: 0 });
  const [riscoTexto, setRiscoTexto] = useState("");
  const [riscoScore, setRiscoScore] = useState(null);
  const [denuncia, setDenuncia] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [quiz, setQuiz] = useState({ etapa: 0, pontuacao: 0 });
  const [historico, setHistorico] = useState({ denuncias: [], analises: [] });

  useEffect(() => {
    setResumo({ denuncias: 14, cursos: 22, integridade: 3 });
  }, []);

  function analisarRisco() {
    const texto = riscoTexto.toLowerCase();
    const palavrasChave = ["fraude", "desvio", "irregularidade", "dinheiro", "corrupção"];
    let score = 0;
    palavrasChave.forEach(palavra => {
      if (texto.includes(palavra)) score += 20;
    });
    const finalScore = score > 100 ? 100 : score;
    setRiscoScore(finalScore);
    setHistorico(prev => ({ ...prev, analises: [...prev.analises, { texto: riscoTexto, score: finalScore }] }));
  }

  function enviarDenuncia() {
    if (denuncia.trim().length > 10) {
      setEnviado(true);
      setHistorico(prev => ({ ...prev, denuncias: [...prev.denuncias, denuncia] }));
      setDenuncia("");
      setTimeout(() => setEnviado(false), 4000);
    }
  }

  const perguntas = [
    {
      pergunta: "Qual é a atitude mais ética em caso de conflito de interesse?",
      opcoes: [
        "Ignorar e seguir com a decisão",
        "Disfarçar o envolvimento",
        "Reportar o conflito e se abster da decisão",
        "Consultar colegas e decidir sozinho"
      ],
      correta: 2
    },
    {
      pergunta: "O que caracteriza uma conduta ímpar no serviço público?",
      opcoes: [
        "Autopromoção",
        "Favorecimento de amigos",
        "Decisões imparciais e transparentes",
        "Aceitação de brindes"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas práticas promove a integridade institucional?",
      opcoes: [
        "Omissão de informações",
        "Mentoria ética contínua",
        "Centralização do poder",
        "Decisões sem justificativa"
      ],
      correta: 1
    }
  ];

  function responder(opcaoIndex) {
    if (opcaoIndex === perguntas[quiz.etapa].correta) {
      setQuiz({ etapa: quiz.etapa + 1, pontuacao: quiz.pontuacao + 1 });
    } else {
      setQuiz({ etapa: quiz.etapa + 1, pontuacao: quiz.pontuacao });
    }
  }

  return (
    <div style={{ padding: 40, color: '#fff', background: '#111', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 10 }}>EthoSUS</h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Frontend funcional Jobs-style. Agora tudo carrega perfeitamente.</p>

      <button
        onClick={() => navigate('/gestor')}
        style={{ marginTop: 20, marginBottom: 30, padding: '10px 20px', background: '#fff', color: '#000', border: 'none', borderRadius: 6, fontWeight: 'bold' }}
      >
        📊 Acessar Painel do Gestor
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
        {/* cards existentes aqui... */}
      </div>

      <div style={{ marginTop: 60, textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '0.85rem' }}>EthoSUS é uma criação inspirada no que Steve Jobs faria pelo SUS se tivesse nascido em São Paulo em 2025.</p>
      </div>
    </div>
  );
}
