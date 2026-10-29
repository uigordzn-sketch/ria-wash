
import { useState } from 'react';
import {
  UserRound,
  Wallet,
  Plus,
  ArrowDownLeft,
  ArrowUpRight,
  Clock3,
  CreditCard,
  ChevronLeft,
  CircleUserRound,
  Sparkles,
} from 'lucide-react';
import './PerfilCliente.css';

export default function PerfilCliente() {
  const [saldo, setSaldo] = useState(85);
  const [valor, setValor] = useState('30');
  const [aviso, setAviso] = useState('');

  const [movimentacoes, setMovimentacoes] = useState([
    {
      id: 1,
      titulo: 'Saldo inicial demonstrativo',
      data: 'Exemplo de movimentação',
      valor: 85,
      tipo: 'entrada',
    },
    {
      id: 2,
      titulo: 'Lavagem de roupas',
      data: 'Exemplo de serviço',
      valor: -25,
      tipo: 'saida',
    },
  ]);

  function adicionarSaldo() {
    const quantia = Number(valor.replace(',', '.'));

    if (!Number.isFinite(quantia) || quantia <= 0) {
      setAviso('Digite um valor válido.');
      return;
    }

    setSaldo((anterior) => anterior + quantia);

    setMovimentacoes((anterior) => [
      {
        id: Date.now(),
        titulo: 'Adição de saldo fictício',
        data: 'Agora • Demonstração',
        valor: quantia,
        tipo: 'entrada',
      },
      ...anterior,
    ]);

    setAviso('Saldo demonstrativo atualizado!');
  }

  function usarSaldo() {
    if (saldo < 25) {
      setAviso('Saldo demonstrativo insuficiente.');
      return;
    }

    setSaldo((anterior) => anterior - 25);

    setMovimentacoes((anterior) => [
      {
        id: Date.now(),
        titulo: 'Lavagem de roupas',
        data: 'Agora • Demonstração',
        valor: -25,
        tipo: 'saida',
      },
      ...anterior,
    ]);

    setAviso('Lavagem simulada com sucesso!');
  }

  return (
    <main className="perfil-page">
      <div className="perfil-container">

        <button
          className="perfil-voltar"
          onClick={() => window.location.reload()}
        >
          <ChevronLeft size={18} />
          Voltar ao site
        </button>

        <div className="perfil-titulo">
          <div>
            <span className="perfil-etiqueta">ÁREA DO CLIENTE</span>
            <h1>Meu perfil</h1>
            <p>Seja bem-vindo à sua área exclusiva RIA WASH.</p>
          </div>

          <div className="perfil-avatar">
            <UserRound size={30} />
          </div>
        </div>

        <div className="perfil-aviso">
          <Sparkles size={18} />
          Ambiente demonstrativo — nenhum dinheiro real é movimentado.
        </div>

        {/* CARTEIRA E DADOS DO CLIENTE */}
        <div className="perfil-grade">

          <div className="perfil-coluna-carteira">

            {/* MINHA CARTEIRA */}
            <section className="carteira-card">
              <div className="carteira-topo">
                <span>
                  <Wallet size={19} /> MINHA CARTEIRA
                </span>
                <span className="carteira-status">DEMO</span>
              </div>

              <p>Saldo disponível</p>

              <h2>
                {saldo.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h2>

              <div className="carteira-rodape">
                <span>Carteira RIA WASH</span>
                <CreditCard size={25} />
              </div>
            </section>

            {/* CARTÃO PREMIUM */}
            <section className="premium-card">
              <div className="premium-card-glow" />

              <div className="premium-card-top">
                <div>
                  <span className="premium-brand">RIA WASH</span>
                  <h2>CARTÃO PREMIUM</h2>
                </div>

                <div className="premium-crown">
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="premium-card-middle">
                <h3>Seu cuidado vale mais.</h3>
                <p>
                  Exclusividade e benefícios especiais para você.
                </p>
              </div>

              <div className="premium-card-bottom">
                <span>CLIENTE RIA WASH</span>

                <span className="premium-status">
                  <span className="premium-status-dot" />
                  EM BREVE
                </span>
              </div>
            </section>

          </div>

          {/* MEUS DADOS */}
          <section className="perfil-cartao">
            <div className="perfil-cartao-titulo">
              <div className="perfil-icone">
                <CircleUserRound size={21} />
              </div>

              <div>
                <h3>Meus dados</h3>
                <p>Informações do cliente</p>
              </div>
            </div>

            <label>Nome</label>
            <div className="perfil-campo">
              Cliente RIA WASH
            </div>

            <label>E-mail</label>
            <div className="perfil-campo">
              cliente@exemplo.com
            </div>

            <span className="perfil-nota">
              Dados fictícios para demonstração.
            </span>
          </section>

        </div>

        {/* RECARGA E MOVIMENTAÇÕES */}
        <div className="perfil-grade perfil-grade-inferior">

          {/* ADICIONAR SALDO */}
          <section className="perfil-cartao">
            <div className="perfil-cartao-titulo">
              <div className="perfil-icone">
                <Plus size={21} />
              </div>

              <div>
                <h3>Adicionar saldo</h3>
                <p>Simule uma recarga na carteira</p>
              </div>
            </div>

            <label htmlFor="valor-recarga">
              Valor da recarga (R$)
            </label>

            <div className="perfil-input-wrap">
              <span>R$</span>

              <input
                id="valor-recarga"
                type="number"
                min="0.01"
                step="0.01"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="30,00"
              />
            </div>

            <button
              className="perfil-botao"
              onClick={adicionarSaldo}
            >
              <Plus size={18} />
              Adicionar saldo fictício
            </button>

            <button
              className="perfil-botao-secundario"
              onClick={usarSaldo}
            >
              Simular lavagem de R$ 25,00
            </button>

            {aviso && (
              <p className="perfil-mensagem" role="status">
                {aviso}
              </p>
            )}
          </section>

          {/* MOVIMENTAÇÕES */}
          <section className="perfil-cartao">
            <div className="perfil-cartao-titulo">
              <div className="perfil-icone">
                <Clock3 size={21} />
              </div>

              <div>
                <h3>Movimentações</h3>
                <p>Histórico desta demonstração</p>
              </div>
            </div>

            <div className="perfil-movimentos">
              {movimentacoes.map((item) => (
                <div
                  className="perfil-movimento"
                  key={item.id}
                >
                  <div
                    className={
                      item.tipo === 'entrada'
                        ? 'movimento-icone entrada'
                        : 'movimento-icone saida'
                    }
                  >
                    {item.tipo === 'entrada' ? (
                      <ArrowDownLeft size={19} />
                    ) : (
                      <ArrowUpRight size={19} />
                    )}
                  </div>

                  <div className="movimento-info">
                    <strong>{item.titulo}</strong>
                    <small>{item.data}</small>
                  </div>

                  <span
                    className={
                      item.tipo === 'entrada'
                        ? 'movimento-valor entrada'
                        : 'movimento-valor saida'
                    }
                  >
                    {item.valor > 0 ? '+' : '−'}

                    {Math.abs(item.valor).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>

        <p className="perfil-rodape-aviso">
          Esta carteira é apenas uma prévia visual. O saldo não é real
          e será reiniciado quando a página for recarregada.
        </p>

      </div>
    </main>
  );
}
