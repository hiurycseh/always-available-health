import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  component: TermosPage,
  head: () => ({
    meta: [
      { title: "Termos de Uso — Atendimento 24h" },
      { name: "description", content: "Termos e condições de uso do site e dos serviços de orientação e acolhimento." },
      { property: "og:title", content: "Termos de Uso — Atendimento 24h" },
      { property: "og:description", content: "Termos e condições de uso." },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
});

function TermosPage() {
  return (
    <div className="legal-page">
      <style>{css}</style>
      <nav className="legal-nav">
        <Link to="/" className="legal-back">← Voltar</Link>
        <span className="legal-logo">Atendimento 24h</span>
      </nav>
      <main className="legal-content">
        <h1>Termos de Uso</h1>
        <p className="legal-update">Última atualização: Janeiro de 2025</p>

        <section>
          <h2>1. Aceitação</h2>
          <p>Ao acessar este site e utilizar nossos canais de atendimento, você concorda com estes Termos de Uso. Se não concordar, recomendamos não utilizar o serviço.</p>
        </section>

        <section>
          <h2>2. Natureza do serviço</h2>
          <p>Oferecemos orientação informativa, acolhimento e suporte profissional. <strong>Não somos um serviço de emergência médica</strong>. Em situações de risco imediato à vida ou saúde, procure imediatamente o pronto-socorro mais próximo ou ligue para o SAMU (192). Em casos de crise emocional, ligue para o CVV (188), disponível 24h gratuitamente.</p>
        </section>

        <section>
          <h2>3. Uso adequado</h2>
          <ul>
            <li>As informações fornecidas no site têm caráter informativo e não substituem avaliação profissional individual.</li>
            <li>É proibido o uso do site para fins ilícitos, ofensivos ou que violem direitos de terceiros.</li>
          </ul>
        </section>

        <section>
          <h2>4. Propriedade intelectual</h2>
          <p>Textos, imagens, marca e identidade visual são protegidos por direitos autorais. É proibida a reprodução sem autorização prévia.</p>
        </section>

        <section>
          <h2>5. Limitação de responsabilidade</h2>
          <p>Empenhamo-nos em manter as informações precisas, mas não garantimos disponibilidade ininterrupta do site. Não nos responsabilizamos por decisões tomadas exclusivamente com base no conteúdo informativo publicado.</p>
        </section>

        <section>
          <h2>6. Alterações</h2>
          <p>Estes Termos podem ser atualizados periodicamente. Recomendamos consulta regular.</p>
        </section>

        <section>
          <h2>7. Foro</h2>
          <p>Fica eleito o foro da comarca do Paraná para dirimir quaisquer questões oriundas destes Termos.</p>
        </section>
      </main>
      <footer className="legal-footer">
        <Link to="/">Início</Link> · <Link to="/privacidade">Privacidade</Link> · <Link to="/contato">Contato</Link>
      </footer>
    </div>
  );
}

const css = `
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
