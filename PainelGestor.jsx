import React from 'react';

const kpis = [
  {
    titulo: 'Índice de Integridade Geral',
    valor: '82%',
    cor: 'bg-green-500',
    alerta: 'Operação dentro dos padrões esperados.',
  },
  {
    titulo: 'Denúncias em Análise',
    valor: '17',
    cor: 'bg-yellow-400',
    alerta: 'Volume moderado de ocorrências.',
  },
  {
    titulo: 'Risco de Fraude por Contratos',
    valor: 'Alta',
    cor: 'bg-red-500',
    alerta: 'Análise automática identificou padrões suspeitos.',
  },
];

const PainelGestor = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Painel do Gestor</h1>
      <p className="text-gray-600">Monitoramento em tempo real da integridade institucional.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="p-4 border rounded shadow bg-white space-y-2">
            <div className={`h-2 w-full ${kpi.cor} rounded`} />
            <h2 className="font-semibold text-lg">{kpi.titulo}</h2>
            <p className="text-3xl font-bold">{kpi.valor}</p>
            <p className="text-sm text-gray-500 italic">{kpi.alerta}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelGestor;
