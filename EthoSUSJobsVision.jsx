import React, { useState } from 'react';

const EthoSUSJobsVision = () => {
  const [respostaIA, setRespostaIA] = useState('');
  const [pergunta, setPergunta] = useState('');

  const handlePerguntar = () => {
    // Simulação de resposta IA
    const respostasExemplo = {
      "como funciona a integridade?": "Integridade no setor público envolve ações para prevenir corrupção, garantir transparência e promover decisões éticas.",
      "qual unidade apresenta mais riscos?": "Baseado nos dados simulados, a UPA Central apresenta risco elevado por inconsistência nos contratos terceirizados.",
    };
    setRespostaIA(respostasExemplo[pergunta.toLowerCase()] || "Desculpe, não entendi sua pergunta. Reformule e tente novamente.");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Visão Estratégica do EthoSUS</h1>
      <p className="text-gray-600">
        O EthoSUS integra princípios de integridade com inteligência artificial para apoiar decisões no Sistema Único de Saúde.
        Este módulo permite que você consulte nossa IA para entender pontos críticos da operação.
      </p>

      <div className="border rounded-lg p-4 bg-gray-50 space-y-2">
        <h2 className="font-semibold text-lg">Pergunte ao EthoSUS 🤖</h2>
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Ex: Como funciona a integridade?"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handlePerguntar}
        >
          Perguntar
        </button>
        {respostaIA && <p className="mt-2 text-green-700 font-medium">{respostaIA}</p>}
      </div>
    </div>
  );
};

export default EthoSUSJobsVision;
