
import { useState } from 'react';
import './MascoteAssistente.css';

export default function MascoteAssistente() {
  const [aberto, setAberto] = useState(false);
  const [mensagem, setMensagem] = useState(
    'Olá! Sou o assistente da RIA WASH. Como posso ajudar?'
  );

  const opcoes = [
    {
      nome: '🧺 Ver serviços',
      resposta: 'Confira a seção de serviços do nosso site!',
      destino: 'servicos',
    },
    {
      nome: '💰 Consultar preços',
      resposta: 'Confira os preços e as promoções disponíveis no site.',
      destino: 'servicos',
    },
    {
      nome: '✨ Como funciona',
      resposta: 'Veja a seção Como funciona para conhecer as etapas do atendimento.',
      destino: 'como-funciona',
    },
    {
      nome: '📞 Entrar em contato',
      resposta: 'Procure os canais de contato disponíveis no site da RIA WASH.',
    },
  ];

  function escolherOpcao(opcao) {
    setMensagem(opcao.resposta);

    if (opcao.destino) {
      document.getElementById(opcao.destino)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className="ria-assistente">
      {aberto && (
        <div className="ria-assistente-painel">
          <div className="ria-assistente-cabecalho">
            <div>
              <strong>RIA WASH</strong>
              <span>Assistente virtual</span>
            </div>

            <button
              className="ria-assistente-fechar"
              onClick={() => setAberto(false)}
              aria-label="Fechar assistente"
            >
              ×
            </button>
          </div>

          <div className="ria-assistente-conteudo">
            <p>{mensagem}</p>

            <div className="ria-assistente-opcoes">
              {opcoes.map((opcao) => (
                <button
                  key={opcao.nome}
                  onClick={() => escolherOpcao(opcao)}
                >
                  {opcao.nome}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        className="ria-assistente-botao"
        onClick={() => setAberto(!aberto)}
        aria-label={aberto ? 'Fechar assistente' : 'Abrir assistente da RIA WASH'}
      >
        <img
          src="/Mascote%20R.I.A%20WASH%20com%20Cesto%20de%20Roupas.png"
          alt="Mascote da RIA WASH"
        />
      </button>

      {!aberto && (
        <span className="ria-assistente-dica">Precisa de ajuda?</span>
      )}
    </div>
  );
}
