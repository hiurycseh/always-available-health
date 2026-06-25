import { createFileRoute, Link } from "@tanstack/react-router";

const GALLERY = [
  { img: "/assets/real-recepcao.jpg", title: "Recepção", desc: "Hall de entrada amplo" },
  { img: "/assets/real-quarto1.jpg", title: "Quartos", desc: "Acomodação com ar e TV" },
  { img: "/assets/real-quarto2.jpg", title: "Dormitório Individual", desc: "Conforto e privacidade" },
  { img: "/assets/real-sala.jpg", title: "Sala de Convivência", desc: "Espaço para descanso" },
  { img: "/assets/real-refeitorio.jpg", title: "Refeitório", desc: "Área ampla e arejada" },
  { img: "/assets/real-cozinha.jpg", title: "Cozinha", desc: "Estrutura completa" },
  { img: "/assets/real-alimentacao.jpg", title: "Alimentação", desc: "Refeições balanceadas" },
  { img: "/assets/real-piscina1.jpg", title: "Piscina", desc: "Área de lazer ao ar livre" },
  { img: "/assets/real-piscina2.jpg", title: "Área de Piscina", desc: "Espaço de descanso" },
  { img: "/assets/real-area-externa.jpg", title: "Área Externa", desc: "Jardim e lazer" },
  { img: "/assets/real-academia1.jpg", title: "Academia", desc: "Equipamentos completos" },
  { img: "/assets/real-academia2.jpg", title: "Espaço Fitness", desc: "Estrutura ampla" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Atendimento 24h — Centro de Saúde e Acolhimento Humanizado" },
      {
        name: "description",
        content:
          "Centro de saúde profissional com atendimento 24 horas, equipe multidisciplinar e ambiente acolhedor. Orientação, suporte e acolhimento para você e sua família.",
      },
      { name: "theme-color", content: "#003D82" },
      { property: "og:title", content: "Atendimento 24h — Centro de Saúde e Acolhimento" },
      {
        property: "og:description",
        content:
          "Centro de saúde profissional. Atendimento 24 horas, equipe qualificada, ambiente seguro.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Atendimento 24h — Centro de Saúde",
          description:
            "Centro de saúde com atendimento humanizado 24 horas, equipe multidisciplinar e estrutura completa.",
          telephone: "+55-44-99745-5982",
          areaServed: "BR",
          address: {
            "@type": "PostalAddress",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Como funciona o primeiro atendimento?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "O primeiro contato é uma escuta inicial, sem compromisso. Você nos conta sua situação, nós escutamos com atenção e explicamos como podemos ajudar. Não há pressão — apenas compreensão e profissionalismo."
              }
            },
            {
              "@type": "Question",
              name: "Qual é a confidencialidade do atendimento?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Todas as conversas e dados pessoais são tratados com total sigilo, em conformidade com a LGPD (Lei de Proteção de Dados). Sua privacidade é sagrada para nós."
              }
            },
            {
              "@type": "Question",
              name: "Como a família pode participar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A família é bem-vinda e encorajada a participar quando apropriado. Oferecemos orientações específicas e oportunidades de participação em consultas, sempre respeitando a vontade do atendido."
              }
            },
            {
              "@type": "Question",
              name: "Qual é o tempo de permanência ou duração do atendimento?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A duração varia conforme as necessidades individuais. Desenvolvemos um plano personalizado com você. Não existem períodos fixos — o atendimento se adapta ao seu ritmo e objetivos."
              }
            },
            {
              "@type": "Question",
              name: "Preciso ser encaminhado por um médico para iniciar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. Você pode entrar em contato diretamente conosco via WhatsApp ou telefone. Se necessário, orientaremos sobre encaminhamentos profissionais durante o atendimento."
              }
            },
            {
              "@type": "Question",
              name: "Como é a rotina de atendimento?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Você terá acompanhamento profissional regular, com sessões estruturadas, orientações práticas e suporte contínuo. A rotina é pensada para seu bem-estar e recuperação gradual."
              }
            }
          ]
        }),
      },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/5544997455982?text=Ol%C3%A1!%20Vim%20pelo%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
const PHONE = "(44) 99745-5982";

function Index() {
  return (
    <div className="page">
      <style>{css}</style>

      <a
        href={WHATSAPP_URL}
        className="whatsapp-float"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      <nav>
        <div className="logo">Atendimento 24hs</div>
        <a href={WHATSAPP_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
          Contatar
        </a>
      </nav>

      <section className="hero" style={{ backgroundImage: `url(/assets/hero-bg.jpg)` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tags">
            <span className="hero-tag">♡ Acolhimento Humanizado</span>
            <span className="hero-tag">🔒 Sigilo Garantido</span>
            <span className="hero-tag">⏰ Disponível 24h</span>
          </div>

          <div className="hero-logo">
            <span>24h</span>
          </div>

          <h1>Centro de Saúde com Acolhimento Humanizado</h1>
          <p>
            Atendimento profissional 24 horas para orientação, suporte e acolhimento. Ambiente seguro, discreto e respeitoso para você e sua família.
          </p>

          <div className="hero-ctas">
            <a
              href={WHATSAPP_URL}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="btn-icon">
                <path d="M20.52 3.48A12 12 0 003.5 20.34L2 22l1.71-1.45A12 12 0 1020.52 3.48zM12 21.5a9.5 9.5 0 01-4.84-1.33l-.35-.2-3.39.86.9-3.3-.23-.36A9.5 9.5 0 1112 21.5zm5.21-7.12c-.28-.14-1.65-.81-1.91-.9s-.44-.14-.63.14-.72.9-.88 1.08-.33.21-.61.07a7.78 7.78 0 01-2.29-1.41 8.54 8.54 0 01-1.58-1.97c-.17-.28 0-.43.12-.57s.28-.33.42-.49a1.92 1.92 0 00.28-.46.51.51 0 000-.49c-.07-.14-.62-1.5-.85-2s-.46-.46-.62-.46h-.53a1 1 0 00-.74.35 3.13 3.13 0 00-1 2.32 5.45 5.45 0 001.13 2.87 12.46 12.46 0 004.79 4.21 5.5 5.5 0 003.31.72 2.78 2.78 0 001.83-1.29 2.27 2.27 0 00.16-1.29c-.07-.11-.25-.18-.53-.32z" />
              </svg>
              Conversar com Nossa Equipe
            </a>
          </div>

          <div className="hero-card">
            <h3>💙 Nosso Compromisso</h3>
            <p>
              Acolhimento humanizado, ambiente seguro, equipe qualificada e disponibilidade 24h para seu bem-estar.
            </p>
          </div>
        </div>
      </section>

      <section className="about-center">
        <h2>Sobre o Centro</h2>
        <div className="about-center-container">
          <div className="about-text">
            <h3>Nossa Missão</h3>
            <p>
              Oferecer acolhimento humanizado, profissional e seguro para pessoas que buscam orientação, suporte e bem-estar emocional. <strong>Atendimento especializado de bem-estar emocional e orientação psicossocial.</strong> <em>Não substitui atendimento médico ou psiquiátrico emergencial.</em> Acreditamos que cada pessoa merece ser ouvida sem julgamento e respeitada em sua individualidade.
            </p>
          </div>
          <div className="values-grid">
            {[
              ["💙", "Humanidade", "Atendimento respeitoso e empático com cada pessoa e sua família."],
              ["✓", "Profissionalismo", "Equipe qualificada e processos baseados em melhores práticas."],
              ["🔒", "Confidencialidade", "Sigilo garantido em todas as etapas, conforme LGPD."],
              ["⏰", "Disponibilidade", "Atendimento 24 horas, sempre que você precisar."],
            ].map(([icon, title, desc]) => (
              <div className="value-card" key={title}>
                <span className="value-icon">{icon}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Como Funciona o Atendimento</h2>
        <div className="steps-container">
          {[
            ["1", "Primeiro Contato", "Você entra em contato via WhatsApp ou telefone. Nossa equipe faz uma escuta inicial, sem compromisso, para compreender sua situação."],
            ["2", "Avaliação Profissional", "Um profissional qualificado realiza uma avaliação cuidadosa e personalizada de suas necessidades."],
            ["3", "Plano Personalizado", "Juntos, desenvolvemos um plano de ação específico para você, respeitando seus objetivos."],
            ["4", "Envolvimento Familiar", "Trabalhamos em parceria com a família, quando apropriado, reconhecendo seu papel importante no processo."],
            ["5", "Atendimento Contínuo", "Você recebe acompanhamento profissional e contínuo, com avaliação regular do progresso."],
            ["6", "Suporte Pós-Atendimento", "Oferecemos orientações para garantir a continuidade e a sustentabilidade do bem-estar conquistado."],
          ].map(([num, title, desc]) => (
            <div className="step-card" key={num}>
              <div className="step-number">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="differentials">
        <h2>Por Que Nos Escolher</h2>
        <div className="differentials-grid">
          {[
            ["👥", "Equipe Multidisciplinar", "Psiquiatra, Psicólogos (CRP), Enfermeiros (COREN), Nutricionista (CRN) e Terapeutas. Profissionais experientes e dedicados ao seu bem-estar."],
            ["🏥", "Estrutura Moderna", "Ambiente acolhedor, seguro e confortável, projetado para facilitar o bem-estar e a recuperação."],
            ["💙", "Abordagem Humanizada", "Não somos apenas um serviço. Somos parceiros na sua jornada, respeitando sua dignidade e individualidade."],
            ["👨‍👩‍👧", "Suporte Familiar Integrado", "Envolvemos a família no processo, oferecendo orientações e apoio para que todos sejam parte da solução."],
          ].map(([icon, title, desc]) => (
            <div className="differential-card" key={title}>
              <span className="differential-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="physical-structure">
        <h2>Estrutura Física — Conforto e Segurança</h2>
        <div className="gallery-grid">
          {GALLERY.map((g) => (
            <div className="gallery-item" key={g.title}>
              <img src={g.img} alt={g.title} loading="lazy" width={800} height={600} />
              <div className="gallery-item-info">
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="family-support">
        <h2>Atendimento Familiar</h2>
        <div className="family-support-container">
          <div className="family-content">
            <div className="family-process">
              <h3>Por Que o Apoio Familiar É Importante</h3>
              <p>
                A família é fundamental na jornada de bem-estar. Por isso, oferecemos suporte específico para que seus familiares entendam, apoiem e façam parte do processo.
              </p>
              <div className="family-steps">
                {[
                  ["Participação em Consultas", "Seus familiares podem participar de sessões, quando apropriado, para entender melhor sua situação."],
                  ["Atualizações Regulares", "Mantemos a família informada sobre o progresso, com o consentimento e privacidade do atendido."],
                  ["Orientações Específicas", "Oferecemos direcionamentos práticos para que a família saiba como apoiar melhor."],
                  ["Plano de Apoio Pós-Atendimento", "Trabalhamos com a família para criar um plano de sustentabilidade após o atendimento."],
                ].map(([title, desc]) => (
                  <div className="family-step" key={title}>
                    <h4>✓ {title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="family-testimonials">
              <h3>Depoimentos de Familiares</h3>
              <div className="testimonials-grid">
                {[
                  ["Mãe de atendido, Maringá", "Meu filho recebeu acolhimento genuíno. A equipe nos incluiu no processo, o que fez toda a diferença. Hoje vejo esperança novamente."],
                  ["Esposa de atendido, Curitiba", "Não sabia como ajudar meu marido, mas a equipe nos orientou com carinho. O atendimento profissional e humanizado transformou nossa família."],
                  ["Irmã de atendida, Londrina", "Minha irmã agora se sente ouvida e respeitada. A estrutura e o acolhimento do centro mudaram tudo para nós."],
                ].map(([author, text]) => (
                  <div className="testimonial" key={author}>
                    <p className="testimonial-text">"{text}"</p>
                    <p className="testimonial-author">— {author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-list">
          {[
            ["Como funciona o primeiro atendimento?", "O primeiro contato é uma escuta inicial, sem compromisso. Você nos conta sua situação, nós escutamos com atenção e explicamos como podemos ajudar. Não há pressão — apenas compreensão e profissionalismo."],
            ["Qual é a confidencialidade do atendimento?", "Todas as conversas e dados pessoais são tratados com total sigilo, em conformidade com a LGPD (Lei de Proteção de Dados). Sua privacidade é sagrada para nós."],
            ["Como a família pode participar?", "A família é bem-vinda e encorajada a participar quando apropriado. Oferecemos orientações específicas e oportunidades de participação em consultas, sempre respeitando a vontade do atendido."],
            ["Qual é o tempo de permanência ou duração do atendimento?", "A duração varia conforme as necessidades individuais. Desenvolvemos um plano personalizado com você. Não existem períodos fixos — o atendimento se adapta ao seu ritmo e objetivos."],
            ["Preciso ser encaminhado por um médico para iniciar?", "Não. Você pode entrar em contato diretamente conosco via WhatsApp ou telefone. Se necessário, orientaremos sobre encaminhamentos profissionais durante o atendimento."],
            ["Como é a rotina de atendimento?", "Você terá acompanhamento profissional regular, com sessões estruturadas, orientações práticas e suporte contínuo. A rotina é pensada para seu bem-estar e recuperação gradual."],
          ].map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-container">
          <h2>Pronto para Começar Uma Jornada de Acolhimento?</h2>
          <p>
            Nossa equipe está aqui, disponível 24 horas, para acolhê-lo com profissionalismo, humanidade e sigilo.
          </p>
          <div className="trust-badges">
            <span className="badge">🔒 Discreto</span>
            <span className="badge">✓ Seguro</span>
            <span className="badge">👥 Profissional</span>
          </div>
          <a href={WHATSAPP_URL} className="cta-final" target="_blank" rel="noopener noreferrer">
            Falar com Nossa Equipe Agora
          </a>
          <p className="contact-info">
            Ou ligue: <strong>{PHONE}</strong>
          </p>
        </div>
      </section>

      <section className="disclaimer">
        <div className="disclaimer-box">
          <strong>⚠ Importante</strong>
          <p>Este site oferece orientação informativa e suporte profissional. <strong>Não somos um serviço de emergência</strong>. Em caso de risco imediato à vida, ligue <a href="tel:192"><strong>192 (SAMU)</strong></a>. Em situações de crise emocional, ligue <a href="tel:188"><strong>188 (CVV)</strong></a> — atendimento gratuito 24 horas.</p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <h3>Atendimento 24hs</h3>
          <p>Centro de Saúde Profissional · Paraná — Brasil</p>
          <div className="footer-links">
            <Link to="/">Início</Link>
            <span>•</span>
            <Link to="/contato">Contato</Link>
            <span>•</span>
            <Link to="/privacidade">Privacidade</Link>
            <span>•</span>
            <Link to="/termos">Termos</Link>
          </div>
          <div className="footer-credentials">
            <span>Responsável técnico devidamente registrado</span>
            <span>·</span>
            <span>Alvará sanitário em conformidade</span>
          </div>
          <div className="footer-bottom">
            © 2025 Atendimento 24hs. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

const css = `
.page { --primary-blue:#003D82; --secondary-blue:#1E5BA8; --accent-red:#D32F2F; --light-bg:#F8FAFB; --text-dark:#1A2332; --text-light:#5A6B7D; --white:#FFFFFF; --shadow:0 4px 16px rgba(0,61,130,.08); --shadow-lg:0 8px 32px rgba(0,61,130,.12); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif; color:var(--text-dark); background:#fff; line-height:1.6; }
.page * { box-sizing:border-box; }
.page h1,.page h2,.page h3,.page p { margin:0; }
html { scroll-behavior:smooth; }
.whatsapp-float { position:fixed; bottom:30px; right:20px; width:60px; height:60px; background:linear-gradient(135deg,#25D366,#20BA5D); border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:999; box-shadow:0 4px 20px rgba(37,211,102,.4); transition:all .3s ease; animation:pulse 2s infinite; }
.whatsapp-float:hover { transform:scale(1.15); box-shadow:0 6px 30px rgba(37,211,102,.6); animation:none; }
.whatsapp-float:focus { outline:2px solid #25D366; outline-offset:2px; }
.whatsapp-float svg { width:30px; height:30px; fill:#fff; }
@keyframes pulse { 0%,100%{box-shadow:0 4px 20px rgba(37,211,102,.4);} 50%{box-shadow:0 4px 30px rgba(37,211,102,.7);} }
.page nav { position:fixed; top:0; left:0; width:100%; background:#fff; box-shadow:0 2px 12px rgba(0,0,0,.06); z-index:100; display:flex; justify-content:space-between; align-items:center; padding:1rem 1.5rem; }
.logo { font-size:1.3rem; font-weight:700; color:var(--primary-blue); letter-spacing:-.3px; }
.nav-cta { background:var(--accent-red); color:#fff; padding:.65rem 1.2rem; border-radius:6px; text-decoration:none; font-weight:600; font-size:.9rem; transition:all .3s ease; display:inline-flex; align-items:center; min-height:44px; }
.nav-cta:hover { background:#B71C1C; transform:translateY(-2px); }
.nav-cta:focus { outline:2px solid var(--accent-red); outline-offset:2px; }
.hero { margin-top:60px; color:#fff; padding:2.5rem 1.25rem 3rem; text-align:center; position:relative; overflow:hidden; background-size:cover; background-position:center; min-height:100vh; display:flex; align-items:center; }
.hero-overlay { position:absolute; inset:0; background:linear-gradient(160deg, rgba(0,61,130,.88) 0%, rgba(30,91,168,.82) 60%, rgba(0,61,130,.92) 100%); z-index:1; }
.hero-content { max-width:680px; margin:0 auto; position:relative; z-index:2; width:100%; }
.hero-tags { display:flex; flex-wrap:wrap; justify-content:center; gap:.75rem; margin-bottom:2rem; }
.hero-tag { background:rgba(255,255,255,.18); border:1px solid rgba(255,255,255,.3); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); color:#fff; padding:.5rem 1rem; border-radius:999px; font-size:.88rem; font-weight:500; text-shadow:0 1px 3px rgba(0,0,0,.1); }
.hero-logo { width:120px; height:120px; border-radius:50%; background:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; box-shadow:0 8px 32px rgba(0,0,0,.25); border:4px solid rgba(255,255,255,.3); }
.hero-logo span { font-size:2rem; font-weight:800; color:var(--primary-blue); letter-spacing:-1px; }
.hero h1 { font-size:2.6rem; font-weight:700; margin-bottom:1rem; line-height:1.2; letter-spacing:-.5px; }
.hero > .hero-content > p { font-size:1rem; margin-bottom:1.75rem; opacity:.95; line-height:1.6; padding:0 .5rem; }
.hero-ctas { display:flex; flex-direction:column; gap:.75rem; margin-bottom:2rem; }
.btn-whatsapp, .btn-secondary { display:flex; align-items:center; justify-content:center; gap:.6rem; padding:1rem 1.25rem; border-radius:10px; text-decoration:none; font-size:1rem; font-weight:600; transition:all .3s ease; }
.btn-whatsapp { background:linear-gradient(135deg,#25D366,#20BA5D); color:#fff; box-shadow:0 6px 20px rgba(37,211,102,.4); }
.btn-whatsapp:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(37,211,102,.55); }
.btn-whatsapp:focus { outline:2px solid #25D366; outline-offset:2px; }
.btn-secondary { background:rgba(255,255,255,.1); border:1.5px solid rgba(255,255,255,.35); color:#fff; backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); }
.btn-secondary:hover { background:rgba(255,255,255,.18); transform:translateY(-2px); }
.btn-icon { width:22px; height:22px; fill:#fff; }
.hero-card { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.18); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); border-radius:12px; padding:1.25rem 1.4rem; text-align:left; margin-top:1rem; }
.hero-card h3 { font-size:1rem; font-weight:600; margin-bottom:.5rem; color:#fff; }
.hero-card p { font-size:.9rem; line-height:1.6; opacity:.92; color:#fff; }
.cta-primary { display:inline-block; background:var(--accent-red); color:#fff; padding:.85rem 2.5rem; border-radius:6px; text-decoration:none; font-size:1rem; font-weight:600; transition:all .3s ease; box-shadow:0 4px 16px rgba(211,47,47,.3); }
.cta-primary:hover { background:#B71C1C; transform:translateY(-3px); box-shadow:0 6px 24px rgba(211,47,47,.4); }
.cta-primary:focus { outline:2px solid var(--accent-red); outline-offset:2px; }
.features { padding:3.5rem 1.5rem; background:var(--light-bg); }
.features h2,.professionals h2,.contact-section h2 { text-align:center; font-size:2rem; margin-bottom:2rem; color:var(--primary-blue); }
.features-grid { max-width:1000px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1.5rem; }
.feature-card { background:#fff; padding:1.75rem; border-radius:10px; box-shadow:var(--shadow); text-align:center; transition:all .3s ease; border-top:3px solid var(--accent-red); }
.feature-card:hover { transform:translateY(-5px); box-shadow:var(--shadow-lg); }
.feature-icon { font-size:2.2rem; margin-bottom:.75rem; display:block; }
.feature-card h3 { color:var(--primary-blue); font-size:1rem; margin-bottom:.5rem; font-weight:600; }
.feature-card p { color:var(--text-light); font-size:.9rem; }
.professionals { padding:3.5rem 1.5rem; background:#fff; }
.professionals-grid { max-width:1000px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.5rem; }
.pro-card { background:linear-gradient(135deg,rgba(0,61,130,.05),rgba(211,47,47,.05)); padding:1.5rem; border-radius:10px; text-align:center; border:1px solid rgba(0,61,130,.1); transition:all .3s ease; }
.pro-card:hover { border-color:var(--accent-red); box-shadow:var(--shadow-lg); }
.pro-icon { font-size:1.8rem; margin-bottom:.6rem; }
.pro-card h3 { color:var(--primary-blue); font-size:.9rem; margin-bottom:.3rem; font-weight:600; text-transform:uppercase; letter-spacing:.2px; }
.pro-card p { color:var(--text-light); font-size:.8rem; }
.cta-section { background:linear-gradient(135deg,var(--primary-blue),var(--secondary-blue)); color:#fff; padding:3rem 1.5rem; text-align:center; }
.cta-section h2 { font-size:1.7rem; margin-bottom:.75rem; }
.cta-section p { font-size:1rem; margin-bottom:1.75rem; opacity:.95; }
.contact-section { padding:3rem 1.5rem; background:#fff; }
.contact-box { max-width:500px; margin:0 auto; background:linear-gradient(135deg,rgba(0,61,130,.08),rgba(211,47,47,.08)); padding:2.5rem; border-radius:10px; border:1px solid rgba(0,61,130,.15); text-align:center; }
.contact-phone { font-size:2rem; font-weight:700; color:var(--accent-red); margin:1.5rem 0; letter-spacing:1px; }
.contact-text { color:var(--text-dark); font-size:.95rem; margin-bottom:1.5rem; }
.contact-box .cta-primary { width:100%; display:block; }
.info-section { padding:3rem 1.5rem; background:var(--light-bg); }
.info-grid { max-width:900px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1.5rem; text-align:center; }
.info-item h3 { color:var(--primary-blue); font-size:1rem; margin-bottom:.4rem; font-weight:600; }
.info-item p { color:var(--text-light); font-size:.9rem; }
.page footer { background:var(--primary-blue); color:#E8ECEF; padding:2rem 1.5rem; text-align:center; }
.footer-content h3 { margin-bottom:.75rem; font-size:1.1rem; }
.footer-links { display:flex; justify-content:center; gap:1.5rem; margin:1rem 0; flex-wrap:wrap; }
.footer-links a { color:#E8ECEF; text-decoration:none; font-size:.85rem; transition:color .3s ease; }
.footer-links a:hover { color:var(--accent-red); }
.footer-links a:focus { outline:2px solid #E8ECEF; outline-offset:2px; }
.footer-bottom { border-top:1px solid rgba(255,255,255,.2); padding-top:1rem; margin-top:1rem; font-size:.8rem; opacity:.9; color:#E8ECEF; }
.gallery { padding:3.5rem 1.5rem; background:#fff; }
.gallery h2 { text-align:center; font-size:2rem; margin-bottom:2rem; color:var(--primary-blue); }
.gallery-grid { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.5rem; }
.gallery-item { border-radius:12px; overflow:hidden; box-shadow:var(--shadow); transition:all .3s ease; background:var(--light-bg); }
.gallery-item:hover { transform:translateY(-8px); box-shadow:var(--shadow-lg); }
.gallery-item img { width:100%; aspect-ratio:4/3; object-fit:cover; display:block; }
.gallery-item-info { padding:1.25rem 1.5rem; }
.gallery-item-info h3 { color:var(--primary-blue); font-size:1rem; margin-bottom:.35rem; font-weight:600; }
.gallery-item-info p { color:var(--text-light); font-size:.9rem; }
.testimonials { padding:3rem 1.5rem; background:var(--light-bg); }
.testimonials h2 { text-align:center; font-size:2rem; margin-bottom:2rem; color:var(--primary-blue); }
.testimonials-grid { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.5rem; }
.testimonial { background:#fff; padding:1.75rem; border-radius:12px; box-shadow:var(--shadow); border-left:4px solid var(--accent-red); transition:all .3s ease; }
.testimonial:hover { transform:translateY(-2px); box-shadow:var(--shadow-lg); }
.testimonial-text { color:var(--text-dark); font-size:.95rem; line-height:1.6; margin-bottom:1rem; font-style:italic; }
.testimonial-author { color:var(--primary-blue); font-size:.85rem; font-weight:600; margin:0; }
.testimonial-note { text-align:center; color:var(--text-light); font-size:.8rem; margin-top:1.5rem; font-style:italic; }
.faq { padding:3rem 1.5rem; background:#fff; }
.faq h2 { text-align:center; font-size:2rem; margin-bottom:2rem; color:var(--primary-blue); }
.faq-list { max-width:760px; margin:0 auto; display:flex; flex-direction:column; gap:1rem; }
.faq-item { background:var(--light-bg); border:1px solid rgba(0,61,130,.08); border-radius:10px; padding:0; overflow:hidden; transition:all .2s ease; }
.faq-item[open] { border-color:rgba(0,61,130,.2); background:rgba(0,61,130,.02); box-shadow:var(--shadow); }
.faq-item summary { padding:1.1rem 1.25rem; cursor:pointer; font-weight:600; color:var(--primary-blue); font-size:.98rem; list-style:none; display:flex; justify-content:space-between; align-items:center; gap:1rem; transition:background .2s ease; background:transparent; }
.faq-item[open] summary { background:rgba(0,61,130,.05); border-bottom:1px solid rgba(0,61,130,.1); }
.faq-item summary:focus { outline:2px solid var(--primary-blue); outline-offset:-2px; }
.faq-item summary::-webkit-details-marker { display:none; }
.faq-item summary::after { content:'+'; font-size:1.4rem; color:var(--accent-red); font-weight:300; flex-shrink:0; transition:transform .3s ease; }
.faq-item[open] summary::after { transform:rotate(45deg); }
.faq-item p { padding:0 1.25rem 1.1rem; color:var(--text-dark); font-size:.92rem; line-height:1.6; margin:0; }
.disclaimer { padding:2rem 1.5rem; background:var(--light-bg); }
.disclaimer-box { max-width:760px; margin:0 auto; background:rgba(211,47,47,.12); border:1px solid rgba(211,47,47,.2); border-left:4px solid var(--accent-red); padding:1.25rem 1.4rem; border-radius:8px; }
.disclaimer-box strong { color:var(--accent-red); display:block; margin-bottom:.5rem; font-size:.95rem; }
.disclaimer-box p { margin:0; font-size:.88rem; color:var(--text-dark); line-height:1.6; }
.disclaimer-box p strong { display:inline; margin:0; color:var(--accent-red); }
.disclaimer-box a { color:var(--accent-red); text-decoration:underline; transition:opacity .2s ease; }
.disclaimer-box a:hover { opacity:.8; }
.disclaimer-box a:focus { outline:2px solid var(--accent-red); outline-offset:2px; }
.footer-credentials { display:flex; justify-content:center; gap:.75rem; flex-wrap:wrap; margin:.75rem 0; font-size:.75rem; opacity:.75; }
@media (max-width:768px){ .page nav{padding:.75rem 1rem;} .logo{font-size:1rem;} .nav-cta{padding:.75rem 1.5rem;font-size:.8rem;min-height:44px;} .hero{margin-top:60px;padding:2rem 1rem;} .hero h1{font-size:2.2rem;} .features h2,.professionals h2,.contact-section h2,.gallery h2,.faq h2,.testimonials h2{font-size:1.5rem;margin-bottom:1.75rem;} .features-grid,.professionals-grid,.gallery-grid,.testimonials-grid{grid-template-columns:1fr;gap:1.5rem;} .gallery-item img{aspect-ratio:4/3;} .contact-phone{font-size:1.5rem;} .whatsapp-float{bottom:20px;right:15px;width:55px;height:55px;} .about-center h2,.how-it-works h2,.differentials h2,.physical-structure h2,.family-support h2,.final-cta h2{font-size:1.5rem;margin-bottom:1.75rem;} .steps-container,.differentials-grid,.values-grid{grid-template-columns:1fr;gap:1.5rem;} .family-content{grid-template-columns:1fr;} .about-center-content{gap:2rem;} .final-cta{padding:2.5rem 1.5rem;} .final-cta h2{font-size:1.4rem;} .trust-badges{flex-direction:column;} .badge{width:100%;} }
@media (max-width:480px) {
  .nav-cta { padding:.85rem 1.6rem; font-size:.75rem; }
  .hero h1 { font-size:1.9rem; }
  .page p { font-size:.95rem; }
  .value-card p, .step-card p, .differential-card p { font-size:.85rem; }
  .family-step p { font-size:.85rem; }
  .footer-bottom { font-size:.8rem; }
  .footer-links a { font-size:.75rem; }
  .footer-credentials { font-size:.65rem; }
  .disclaimer-box p { font-size:.8rem; }
  .hero-tag { font-size:.8rem; }
  .faq-item summary { font-size:.9rem; }
}
.about-center{padding:3rem 1.5rem;background:var(--light-bg);}
.about-center h2{text-align:center;font-size:2rem;margin-bottom:2rem;padding-top:1.5rem;color:var(--primary-blue);}
.about-center-container{max-width:1100px;margin:0 auto;}
.about-center-content{display:grid;gap:3rem;}
.about-text h3{font-size:1.3rem;color:var(--primary-blue);margin-bottom:1rem;}
.about-text p{color:var(--text-dark);font-size:1rem;line-height:1.6;}
.values-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem;}
.value-card{background:#fff;padding:1.75rem;border-radius:10px;box-shadow:var(--shadow);text-align:center;border-top:3px solid var(--accent-red);transition:all .3s ease;display:flex;flex-direction:column;min-height:240px;}
.value-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);}
.value-icon{font-size:2rem;display:block;margin-bottom:.75rem;}
.value-card h4{color:var(--primary-blue);font-size:1rem;margin-bottom:.5rem;font-weight:600;}
.value-card p{color:var(--text-light);font-size:.9rem;flex:1;}
.how-it-works{padding:3rem 1.5rem;background:#fff;}
.how-it-works h2{text-align:center;font-size:2rem;margin-bottom:2rem;padding-top:1.5rem;color:var(--primary-blue);}
.steps-container{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;}
.step-card{background:var(--light-bg);padding:1.75rem;border-radius:10px;border:1px solid rgba(0,61,130,.1);transition:all .3s ease;display:flex;flex-direction:column;min-height:220px;}
.step-card:hover{border-color:var(--accent-red);box-shadow:var(--shadow-lg);}
.step-number{display:inline-flex;width:45px;height:45px;background:var(--accent-red);color:#fff;border-radius:50%;align-items:center;justify-content:center;font-weight:700;margin-bottom:1rem;}
.step-card h4{color:var(--primary-blue);font-size:1rem;margin-bottom:.5rem;font-weight:600;}
.step-card p{color:var(--text-dark);font-size:.9rem;line-height:1.6;flex:1;}
.differentials{padding:3rem 1.5rem;background:var(--light-bg);}
.differentials h2{text-align:center;font-size:2rem;margin-bottom:2rem;padding-top:1.5rem;color:var(--primary-blue);}
.differentials-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem;}
.differential-card{background:#fff;padding:1.75rem;border-radius:10px;box-shadow:var(--shadow);text-align:center;border-top:3px solid var(--accent-red);transition:all .3s ease;display:flex;flex-direction:column;min-height:240px;}
.differential-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);}
.differential-icon{font-size:2.2rem;display:block;margin-bottom:.75rem;}
.differential-card h3{color:var(--primary-blue);font-size:1rem;margin-bottom:.5rem;font-weight:600;}
.differential-card p{color:var(--text-light);font-size:.9rem;flex:1;}
.physical-structure{padding:3rem 1.5rem;background:#fff;}
.physical-structure h2{text-align:center;font-size:2rem;margin-bottom:2rem;padding-top:1.5rem;color:var(--primary-blue);}
.family-support{padding:3rem 1.5rem;background:var(--light-bg);}
.family-support h2{text-align:center;font-size:2rem;margin-bottom:2rem;padding-top:1.5rem;color:var(--primary-blue);}
.family-support-container{max-width:1200px;margin:0 auto;}
.family-content{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:3rem;}
.family-process h3{font-size:1.2rem;color:var(--primary-blue);margin-bottom:1rem;}
.family-process>p{color:var(--text-dark);font-size:1rem;line-height:1.6;margin-bottom:1.5rem;}
.family-steps{display:flex;flex-direction:column;gap:1.25rem;}
.family-step{background:#fff;padding:1.25rem;border-radius:8px;border-left:4px solid var(--accent-red);display:flex;flex-direction:column;min-height:200px;transition:all .3s ease;}
.family-step:hover{transform:translateY(-2px);box-shadow:var(--shadow);}
.family-step h4{color:var(--primary-blue);font-size:.95rem;margin-bottom:.5rem;font-weight:600;}
.family-step p{color:var(--text-dark);font-size:.9rem;line-height:1.6;flex:1;}
.family-testimonials h3{font-size:1.2rem;color:var(--primary-blue);margin-bottom:1rem;}
.final-cta{background:linear-gradient(135deg,var(--primary-blue),var(--secondary-blue));color:#fff;padding:3rem 1.5rem;text-align:center;}
.final-cta-container{max-width:700px;margin:0 auto;}
.final-cta h2{font-size:1.8rem;margin-bottom:1.5rem;line-height:1.3;padding-top:1.5rem;}
.final-cta>p{font-size:1.05rem;margin-bottom:2rem;opacity:.95;line-height:1.6;}
.trust-badges{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;}
.badge{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;padding:.6rem 1.2rem;border-radius:20px;font-size:.9rem;font-weight:600;backdrop-filter:blur(10px);}
.cta-final{display:inline-block;background:#fff;color:var(--primary-blue);padding:1rem 2.5rem;border-radius:6px;text-decoration:none;font-size:1rem;font-weight:600;transition:all .3s ease;box-shadow:0 4px 16px rgba(0,0,0,.2);}
.cta-final:hover{transform:translateY(-3px);box-shadow:0 6px 24px rgba(0,0,0,.3);}
.cta-final:focus{outline:2px solid var(--primary-blue);outline-offset:2px;}
.contact-info{font-size:.95rem;margin-top:1.5rem;opacity:.9;}
.contact-info strong{color:#fff;font-weight:700;}`