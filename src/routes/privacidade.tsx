import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: PrivacidadePage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Atendimento 24h" },
      { name: "description", content: "Política de Privacidade e tratamento de dados pessoais conforme a LGPD (Lei nº 13.709/2018)." },
      { property: "og:title", content: "Política de Privacidade — Atendimento 24h" },
      { property: "og:description", content: "Como tratamos seus dados pessoais em conformidade com a LGPD." },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
});

function PrivacidadePage() {
  return (
    <div className="legal-page">
      <style>{legalCss}</style>
      <nav className="legal-nav">
        <Link to="/" className="legal-back">← Voltar</Link>
        <span className="legal-logo">Atendimento 24h</span>
      </nav>
      <main className="legal-content">
        <h1>Política de Privacidade</h1>
        <p className="legal-update">Última atualização: Janeiro de 2025</p>

        <section>
          <h2>1. Quem somos</h2>
          <p>Atendimento 24h é um centro de saúde que oferece orientação, acolhimento e atendimento humanizado. Esta política descreve como coletamos, usamos e protegemos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>
        </section>

        <section>
          <h2>2. Dados que coletamos</h2>
          <ul>
            <li><strong>Dados de contato:</strong> nome, telefone, e-mail informados voluntariamente.</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas (via cookies e ferramentas como Google Analytics).</li>
            <li><strong>Dados de comunicação:</strong> mensagens enviadas pelo WhatsApp ou telefone.</li>
          </ul>
        </section>

        <section>
          <h2>3. Como usamos seus dados</h2>
          <ul>
            <li>Responder às solicitações de informação e atendimento.</li>
            <li>Melhorar a experiência no site e a qualidade do serviço.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </section>

        <section>
          <h2>4. Compartilhamento</h2>
          <p>Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais. Podemos compartilhar dados apenas com provedores essenciais ao funcionamento do serviço (hospedagem, análise) ou por exigência legal.</p>
        </section>

        <section>
          <h2>5. Seus direitos (LGPD)</h2>
          <p>Você pode, a qualquer momento, solicitar: confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação de seus dados. Para exercer esses direitos, entre em contato pelo WhatsApp ou telefone informados no rodapé.</p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>Utilizamos cookies para funcionamento do site e análise de tráfego. Você pode desativar cookies nas configurações do seu navegador.</p>
        </section>

        <section>
          <h2>7. Segurança</h2>
          <p>Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, perda ou alteração.</p>
        </section>

        <section>
          <h2>8. Contato do Encarregado (DPO)</h2>
          <p>Para dúvidas sobre esta política ou tratamento de dados, entre em contato pelo telefone (44) 99745-5982.</p>
        </section>
      </main>
      <footer className="legal-footer">
        <Link to="/">Início</Link> · <Link to="/termos">Termos</Link> · <Link to="/contato">Contato</Link>
      </footer>
    </div>
  );
}

const legalCss = `
.legal-page { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif; color:#1A2332; background:#fff; line-height:1.7; min-height:100vh; }
.legal-nav { display:flex; justify-content:space-between; align-items:center; padding:1rem 1.5rem; border-bottom:1px solid #eef2f6; position:sticky; top:0; background:#fff; z-index:10; }
.legal-back { color:#003D82; text-decoration:none; font-weight:600; font-size:.95rem; }
.legal-back:hover { color:#D32F2F; }
.legal-logo { font-weight:700; color:#003D82; font-size:1.05rem; }
.legal-content { max-width:760px; margin:0 auto; padding:2.5rem 1.5rem 3rem; }
.legal-content h1 { font-size:2rem; color:#003D82; margin:0 0 .5rem; line-height:1.2; }
.legal-update { color:#5A6B7D; font-size:.85rem; margin:0 0 2rem; }
.legal-content section { margin-bottom:2rem; }
.legal-content h2 { font-size:1.2rem; color:#003D82; margin:0 0 .75rem; font-weight:600; }
.legal-content p, .legal-content li { font-size:.95rem; color:#1A2332; margin:0 0 .6rem; }
.legal-content ul { padding-left:1.25rem; margin:.5rem 0 1rem; }
.legal-footer { text-align:center; padding:1.5rem; border-top:1px solid #eef2f6; color:#5A6B7D; font-size:.85rem; }
.legal-footer a { color:#003D82; text-decoration:none; margin:0 .25rem; }
.legal-footer a:hover { color:#D32F2F; }
`;
