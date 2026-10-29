
import { useEffect, useState } from 'react';
import MascoteAssistente from './MascoteAssistente';
import PerfilCliente from './PerfilCliente';

import {
  ArrowDownRight, ArrowRight, Bell, CheckCircle2, ChevronLeft, ChevronRight,
  Clock3, Droplets, Gift, Menu, PackageCheck, Shirt, Sparkles, WashingMachine,
  WalletCards, X, CalendarDays, MapPin, Plus, UserRound, Snowflake, BadgeCheck
} from 'lucide-react';

const banners = [
  {
    image: '/Lavagem Profissional_ Roupas Limpas e Perfumadas.png',
    alt: 'Lavagem profissional, roupas limpas e perfumadas',
  },
  {
    image: '/Lavanderia inteligente_ mais cuidado, mais vantagens.png',
    alt: 'Lavanderia inteligente, mais cuidado e vantagens',
  },
  {
    image: '/Promoção especial_ roupas limpas com desconto.png',
    alt: 'Promoção especial, roupas limpas com desconto',
  },
];

 


const services = [
  { icon: WashingMachine, title: 'Lavar roupas', description: 'Cuidado prático para suas peças do dia a dia.', price: 'A partir de R$ 12,00', tag: 'MAIS PEDIDO' },
  { icon: Droplets, title: 'Lavar e secar', description: 'Um ciclo completo para facilitar sua rotina.', price: 'Consulte os valores', tag: 'PRATICIDADE' },
  { icon: Shirt, title: 'Lavagem por quilo', description: 'Uma opção prática para cuidar de várias peças.', price: 'Preço por kg', tag: 'FLEXÍVEL' },
  { icon: Sparkles, title: 'Passadoria', description: 'Peças alinhadas para você sair preparado.', price: 'Sob consulta', tag: 'CUIDADO EXTRA' },
];

const machines = [
  { name: 'Lavadora 01', status: 'Disponível', state: 'available', detail: 'Pronta para uso' },
  { name: 'Lavadora 02', status: 'Em uso', state: 'busy', detail: 'Previsão: 18 min' },
  { name: 'Lavadora 03', status: 'Disponível', state: 'available', detail: 'Pronta para uso' },
  { name: 'Secadora 01', status: 'Em uso', state: 'busy', detail: 'Previsão: 9 min' },
];

function App() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [notice, setNotice] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 5500);
    return () => window.clearInterval(timer);
  }, []);
  
<div className="ria-mascote-ajuda">
  <img
    src="/Mascote%20R.I.A%20WASH%20com%20Cesto%20de%20Roupas.png"
    alt="Mascote RIA WASH"
  />
  <span>Olá! Posso ajudar?</span>
</div>


  const moveBanner = (direction) => setActiveBanner((current) => (current + direction + banners.length) % banners.length);
  const goTo = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const showMessage = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 3200);
  };

  return (
    <div className="app-shell">
      <MascoteAssistente />
      



{showBooking && (
  <div className="booking-floating" id="agendamento">
    <div className="booking-modal">
      <button
        type="button"
        className="booking-close"
        onClick={() => setShowBooking(false)}
        aria-label="Fechar agendamento"
      >
        <X size={22} />
      </button>

      <span className="section-kicker">RIA WASH</span>
      <h2>Agende sua lavagem</h2>
      <p>Escolha o serviço e o melhor horário para você.</p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setShowBooking(false);
          showMessage(
            'Agendamento registrado no protótipo! A reserva ainda não foi conectada ao sistema.'
          );
        }}
      >
        <label>
          Serviço
          <select name="servico" required defaultValue="">
            <option value="" disabled>Selecione um serviço</option>
            <option value="Lavar roupas">Lavar roupas</option>
            <option value="Lavar e secar">Lavar e secar</option>
            <option value="Lavagem por quilo">Lavagem por quilo</option>
            <option value="Passadoria">Passadoria</option>
          </select>
        </label>

        <label>
          Quantidade (kg ou peças)
          <input
            name="quantidade"
            type="number"
            min="1"
            required
            placeholder="Ex.: 5"
          />
        </label>

        <label>
          Data
          <input
            name="data"
            type="date"
            min={new Date().toLocaleDateString('en-CA')}
            required
          />
        </label>

        <label>
          Horário desejado
          <select name="horario" required defaultValue="">
            <option value="" disabled>Selecione um horário</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>
        </label>

        <button type="submit" className="primary-button booking-submit">
          Confirmar agendamento <ArrowRight size={16} />
        </button>
      </form>
    </div>
  </div>
)}


      <div className="top-strip"><div className="container top-strip-inner"><span><Sparkles size={14} /> Cuidado inteligente com suas roupas</span><span className="top-strip-right"><MapPin size={14} /> Sua lavanderia, mais prática</span></div></div>
      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => goTo('inicio')} aria-label="RIA WASH - início">
          <img
  className="brand-logo"
  src="/ria_wash_logo_transparente.png"
  alt="RIA WASH"
/>
            <span className="brand-copy"><strong>RIA WASH</strong><small>LAVANDERIA INTELIGENTE</small></span>
          </button>
        
          <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
            <button onClick={() => goTo('inicio')}>Início</button>
            <button onClick={() => goTo('servicos')}>Serviços</button>
            <button onClick={() => goTo('maquinas')}>Máquinas</button>
            <button onClick={() => goTo('delivery')}>Delivery</button>
            <button
              className="nav-cliente-button"
              onClick={() => {
                setShowPerfil(true);
                setMobileMenuOpen(false);
              }}
            >
              Área do cliente
            </button>
          </nav>

          <div className="nav-actions">
            <button className="login-button" onClick={() => setShowLogin(true)}><UserRound size={17} /> Entrar</button>
           
<button
  className="primary-button nav-cta"
  onClick={() => {
    setShowBooking(true);
    setMobileMenuOpen(false);
  }}
>
  Agendar agora <ArrowRight size={16} />
</button>

          </div>
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}>{mobileMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
       

<section className="section services-section" id="servicos">
  <div className="container">
    <div className="section-heading">
      <div>
        <span className="section-kicker">NOSSOS SERVIÇOS</span>

        <h2>
          Cuidado ideal para <span>cada rotina.</span>
        </h2>

        <p>
          Soluções práticas para lavar, secar e cuidar das suas roupas
          com mais comodidade.
        </p>
      </div>

      <button
        className="outline-button"
        onClick={() =>
          showMessage(
            'O catálogo completo de serviços será disponibilizado nesta etapa do projeto.'
          )
        }
      >
        Ver todos os serviços <ArrowRight size={16} />
      </button>
    </div>

    <div className="service-grid">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <article className="service-card" key={service.title}>
            <div className="service-card-top">
              <span className="service-icon">
                <Icon size={23} />
              </span>

              <span className="service-tag">
                {service.tag}
              </span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-card-bottom">
              <span>{service.price}</span>

              <button
                aria-label={`Saiba mais sobre ${service.title}`}
                onClick={() =>
                  showMessage(
                    `${service.title}: detalhes e agendamento serão conectados ao sistema na próxima etapa.`
                  )
                }
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>

        <section className="machines-section section" id="maquinas"><div className="container machines-layout">

<div className="ria-machine-grid">
  {machines.map((machine, index) => (
    <article className="ria-machine-card" key={machine.name}>
      <div className="ria-machine-visual">
        <span className="ria-machine-number">
          EQUIPAMENTO {String(index + 1).padStart(2, "0")}
        </span>

        
<img
  className="ria-machine-image"
  src={
    machine.name.toLowerCase().includes("secadora")
      ? "/images/secadora-3d.png"
      : "/images/lavadora-3d.png"
  }
  alt={machine.name}
/>


        <span className={`ria-machine-status ${machine.state}`}>
          <span className="ria-status-dot" />
          {machine.status}
        </span>
      </div>

      <div className="ria-machine-info">
        <span className="ria-machine-category">
          RIA WASH · EQUIPAMENTO COMERCIAL
        </span>
        <h3>{machine.name}</h3>

        <div className="ria-machine-details">
          <div>
            <span className="ria-detail-label">CAPACIDADE</span>
            
<strong>
  {machine.name === "Lavadora 01"
    ? "10 kg"
    : machine.name === "Lavadora 02"
      ? "15 kg"
      : machine.name === "Lavadora 03"
        ? "20 kg"
        : machine.name.toLowerCase().includes("secadora")
          ? "20 kg"
          : "A definir"}
</strong>
          </div>
          <span className="ria-machine-type-icon">
            {machine.name.toLowerCase().includes("secadora")
              ? "SECADORA"
              : "LAVADORA"}
          </span>

        </div>

        <p className="ria-machine-description">{machine.detail}</p>
      </div>
    </article>
  ))}
</div>


<div className="ria-panel">
  <div className="ria-panel-header">
    <div>
      <span className="ria-panel-kicker">RIA WASH · CONTROLE</span>
      <h3>Disponibilidade</h3>
      <p>Visão geral das máquinas</p>
    </div>

  <div className="ria-panel-intro">
    <span className="section-kicker">DISPONIBILIDADE</span>
    <h2>Mais informação antes de <span>sair de casa.</span></h2>
    <p>
      Consulte a disponibilidade das máquinas antes de sair.
      Na versão conectada, os estados serão atualizados pelo
      sistema de controle da lavanderia.
    </p>

    <div className="machine-legend">
      <span>🟢 Disponível</span>
      <span>🟠 Em uso</span>
      <span>🔴 Indisponível</span>
    </div>

    <button
      type="button"
      className="ria-how-button"
      onClick={() =>
        document.getElementById("como-funciona")?.scrollIntoView({
          behavior: "smooth"
        })
      }
    >
      Como funciona
    </button>
  </div>

    <span className="ria-demo">
      <span className="ria-demo-dot" />
      DEMONSTRAÇÃO
    </span>
  </div>

  <div className="ria-stats">
    <div className="ria-stat">
      <div className="ria-stat-icon ria-total">▦</div>
      <span className="ria-stat-label">Total de máquinas</span>
      <strong>04</strong>
    </div>

    <div className="ria-stat">
      <div className="ria-stat-icon ria-available">✓</div>
      <span className="ria-stat-label">Disponíveis</span>
      <strong>02</strong>
      <span className="ria-stat-note">Prontas para uso</span>
    </div>

    <div className="ria-stat">
      <div className="ria-stat-icon ria-busy">◷</div>
      <span className="ria-stat-label">Em uso</span>
      <strong>02</strong>
      <span className="ria-stat-note">Em funcionamento</span>
    </div>
  </div>

  <div className="ria-panel-footer">
    <Clock3 size={16} />
    <span>Informações ilustrativas, sem conexão em tempo real.</span>
  </div>
</div>
</div></section>

        <section className="section steps-section" id="como-funciona"><div className="container"><div className="center-heading"><span className="section-kicker">COMO FUNCIONA</span><h2>Três passos para uma rotina <span>mais leve.</span></h2><p>Uma experiência pensada para você acompanhar tudo com facilidade.</p></div><div className="steps-grid"><div className="step-card"><span className="step-number">01</span><span className="step-icon"><CalendarDays size={25} /></span><h3>Escolha seu serviço</h3><p>Consulte as opções e organize seu atendimento de acordo com sua necessidade.</p></div><div className="step-card"><span className="step-number">02</span><span className="step-icon"><PackageCheck size={25} /></span><h3>Acompanhe seu pedido</h3><p>Veja as atualizações do serviço e acompanhe as etapas do atendimento.</p></div><div className="step-card"><span className="step-number">03</span><span className="step-icon"><CheckCircle2 size={25} /></span><h3>Receba a notificação</h3><p>Saiba quando suas roupas estiverem prontas para retirada.</p></div></div></div></section>

       



<section className="delivery-section" id="delivery">
  <div className="container">
    <div className="delivery-content">
      <span className="section-kicker">
        RIA WASH DELIVERY
      </span>

      <h2>
        Mais praticidade para você.
        <span> Mais cuidado com suas roupas.</span>
      </h2>

      <p>
        Sua rotina já é cheia de compromissos. Conte com a
        praticidade da RIA WASH para simplificar o cuidado com
        suas roupas, com opções de retirada e entrega conforme
        a disponibilidade do serviço.
      </p>

      <div className="delivery-steps">
        <div className="delivery-step">
          <span>01</span>
          <h3>Agende sua coleta</h3>
          <p>
            Consulte as condições e combine a retirada
            das suas roupas.
          </p>
        </div>

        <div className="delivery-step">
          <span>02</span>
          <h3>Deixe o cuidado com a gente</h3>
          <p>
            Suas roupas recebem o cuidado e a atenção
            que merecem.
          </p>
        </div>

        <div className="delivery-step">
          <span>03</span>
          <h3>Mais comodidade na sua rotina</h3>
          <p>
            Tenha mais praticidade no dia a dia
            com a RIA WASH.
          </p>
        </div>
      </div>

      <button
        className="primary-button"
        onClick={() =>
          showMessage(
            "Entre em contato com a RIA WASH para consultar a disponibilidade, as áreas atendidas e as condições do delivery."
          )
        }
      >
        Consultar delivery <ArrowRight size={17} />
      </button>

      <small>
        Consulte as áreas atendidas, os horários e as
        condições do serviço.
      </small>
    </div>
  </div>
</section>


        <section className="newsletter-section"><div className="container newsletter-inner"><div><span className="section-kicker">FIQUE POR DENTRO</span><h2>Novidades da RIA WASH, <span>em primeira mão.</span></h2><p>Esta área poderá receber cadastro para avisos de promoções e novidades.</p></div><button className="primary-button" onClick={() => setShowLogin(true)}>Criar minha conta <ArrowRight size={17} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><button className="brand footer-brand" onClick=
      {() => goTo('inicio')}>
<img
  className="brand-logo"
  src="/ria_wash_logo_transparente.png"
  alt="RIA WASH - Lavanderia Inteligente"
/>
</button><p>Mais praticidade para cuidar das suas roupas e do seu tempo.</p><div className="footer-links"><button onClick={() => goTo('servicos')}>Serviços</button><button onClick={() => goTo('maquinas')}>Máquinas</button><button onClick={() => goTo('vantagens')}>Benefícios</button><button onClick={() => showMessage('Os canais de atendimento serão adicionados antes do lançamento.')}>Contato</button></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} RIA WASH. Todos os direitos reservados.</span><span>Versão inicial demonstrativa</span></div></footer>

      {notice && <div className="toast" role="status"><CheckCircle2 size={19} /><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Fechar aviso"><X size={16} /></button></div>}
            {showPerfil && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          overflowY: 'auto',
          background: '#f4f7fb'
        }}>
          
          <PerfilCliente />
        </div>
      )}
      {showLogin && <div className="modal-backdrop" onClick={() => setShowLogin(false)}><div className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowLogin(false)} aria-label="Fechar"><X size={20} /></button><span className="modal-icon"><UserRound size={24} /></span><span className="section-kicker">ÁREA DO CLIENTE</span><h2 id="login-title">Entre na RIA WASH</h2><p>O cadastro e a autenticação serão conectados ao sistema nas próximas etapas.</p><label htmlFor="email">Seu e-mail</label><input id="email" type="email" placeholder="voce@email.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button className="primary-button modal-submit" onClick={() => { setShowLogin(false); showMessage(email.includes('@') ? 'Prévia: o cadastro de ' + email + ' será habilitado quando a autenticação estiver configurada.' : 'Digite um e-mail válido para continuar.'); }}>{email.includes('@') ? 'Continuar' : 'Continuar com e-mail'} <ArrowRight size={17} /></button><small className="modal-disclaimer">Esta versão é uma demonstração visual. Nenhum dado de acesso será enviado ou armazenado.</small></div></div>}
    </div>
  );
}

export default App;
