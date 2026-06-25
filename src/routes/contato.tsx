import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato — Atendimento 24h" },
      { name: "description", content: "Fale com nossa equipe. Atendimento humanizado 24 horas por WhatsApp, telefone ou formulário." },
      { property: "og:title", content: "Contato — Atendimento 24h" },
      { property: "og:description", content: "Fale com nossa equipe 24 horas." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

const WHATSAPP_URL = "https://wa.me/5544997455982?text=Ol%C3%A1!%20Vim%20pelo%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
const WHATSAPP_BASE = "https://wa.me/5544997455982";
const PHONE = "(44) 99745-5982";

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.nome}.%0ATelefone: ${form.telefone}%0A%0A${form.mensagem}`;
    window.open(`${WHATSAPP_BASE}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <div className="legal-page">
      <style>{css}</style>
      <nav className="legal-nav">
        <Link to="/" className="legal-back">← Voltar</Link>
        <span className="legal-logo">Atendimento 24h</span>
      </nav>
      <main className="legal-content">
        <h1>Fale Conosco</h1>
        <p className="lead">Nossa equipe está disponível 24 horas para esclarecer dúvidas e oferecer orientação. Escolha o canal de sua preferência.</p>

        <div className="contact-grid">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-card whatsapp">
            <span className="contact-icon">💬</span>
            <strong>WhatsApp</strong>
            <span>{PHONE}</span>
          </a>
          <a href="tel:+5544997455982" className="contact-card phone">
            <span className="contact-icon">📞</span>
            <strong>Telefone</strong>
            <span>{PHONE}</span>
          </a>
          <div className="contact-card hours">
            <span className="contact-icon">⏰</span>
            <strong>Horário</strong>
            <span>24 horas · todos os dias</span>
          </div>
          <div className="contact-card location">
            <span className="contact-icon">📍</span>
            <strong>Atuação</strong>
            <span>Paraná — Brasil todo</span>
          </div>
        </div>

        <h2 className="form-title">Envie uma mensagem</h2>
        {sent ? (
          <div className="form-success">
            <strong>Mensagem encaminhada!</strong>
            <p>Você foi redirecionado para o WhatsApp. Caso contrário, fale conosco pelo número acima.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
            </label>
            <label>
              Telefone / WhatsApp
              <input required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
            </label>
            <label>
              Mensagem
              <textarea required rows={4} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
            </label>
            <button type="submit">Enviar pelo WhatsApp</button>
            <small>Ao enviar, você concorda com nossa <Link to="/privacidade">Política de Privacidade</Link>.</small>
          </form>
        )}

        <div className="emergency-box">
          <strong>⚠ Não é uma emergência?</strong>
          <p>Em caso de risco imediato à vida, ligue <strong>192 (SAMU)</strong>. Em crise emocional, ligue <strong>188 (CVV)</strong> — gratuito e 24h.</p>
        </div>
      </main>
      <footer className="legal-footer">
        <Link to="/">Início</Link> · <Link to="/privacidade">Privacidade</Link> · <Link to="/termos">Termos</Link>
      </footer>
    </div>
  );
}

const css = `
.legal-page { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif; color:#1A2332; background:#fff; line-height:1.6; min-height:100vh; }
.legal-nav { display:flex; justify-content:space-between; align-items:center; padding:1rem 1.5rem; border-bottom:1px solid #eef2f6; position:sticky; top:0; background:#fff; z-index:10; }
.legal-back { color:#003D82; text-decoration:none; font-weight:600; font-size:.95rem; }
.legal-back:hover { color:#D32F2F; }
.legal-logo { font-weight:700; color:#003D82; font-size:1.05rem; }
.legal-content { max-width:760px; margin:0 auto; padding:2.5rem 1.5rem 3rem; }
.legal-content h1 { font-size:2rem; color:#003D82; margin:0 0 .5rem; line-height:1.2; }
.lead { color:#5A6B7D; margin:0 0 2rem; font-size:1rem; }
.contact-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:1rem; margin-bottom:2.5rem; }
.contact-card { display:flex; flex-direction:column; align-items:center; gap:.4rem; padding:1.25rem 1rem; border-radius:10px; background:#F8FAFB; border:1px solid #eef2f6; text-decoration:none; color:#1A2332; transition:all .2s ease; text-align:center; }
.contact-card.whatsapp:hover { background:rgba(37,211,102,.08); border-color:#25D366; transform:translateY(-2px); }
.contact-card.phone:hover { background:rgba(0,61,130,.05); border-color:#003D82; transform:translateY(-2px); }
.contact-icon { font-size:1.6rem; }
.contact-card strong { font-size:.95rem; color:#003D82; }
.contact-card span { font-size:.85rem; color:#5A6B7D; }
.form-title { font-size:1.3rem; color:#003D82; margin:0 0 1rem; }
.contact-form { display:flex; flex-direction:column; gap:1rem; background:#F8FAFB; padding:1.5rem; border-radius:12px; border:1px solid #eef2f6; }
.contact-form label { display:flex; flex-direction:column; gap:.35rem; font-size:.85rem; font-weight:600; color:#1A2332; }
.contact-form input, .contact-form textarea { padding:.75rem .9rem; border:1px solid #d6dde5; border-radius:8px; font-size:.95rem; font-family:inherit; background:#fff; }
.contact-form input:focus, .contact-form textarea:focus { outline:none; border-color:#003D82; box-shadow:0 0 0 3px rgba(0,61,130,.1); }
.contact-form button { background:linear-gradient(135deg,#25D366,#20BA5D); color:#fff; border:none; padding:1rem; border-radius:10px; font-size:1rem; font-weight:600; cursor:pointer; transition:all .2s ease; box-shadow:0 4px 14px rgba(37,211,102,.3); }
.contact-form button:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(37,211,102,.45); }
.contact-form small { color:#5A6B7D; font-size:.8rem; text-align:center; }
.contact-form small a { color:#003D82; }
.form-success { background:rgba(37,211,102,.08); border:1px solid rgba(37,211,102,.3); border-radius:12px; padding:1.5rem; text-align:center; }
.form-success strong { color:#20BA5D; display:block; margin-bottom:.5rem; font-size:1.05rem; }
.form-success p { margin:0; color:#1A2332; font-size:.9rem; }
.emergency-box { margin-top:2.5rem; background:rgba(211,47,47,.06); border-left:4px solid #D32F2F; padding:1.1rem 1.2rem; border-radius:8px; }
.emergency-box strong { color:#D32F2F; display:block; margin-bottom:.4rem; font-size:.95rem; }
.emergency-box p { margin:0; font-size:.88rem; color:#1A2332; }
.legal-footer { text-align:center; padding:1.5rem; border-top:1px solid #eef2f6; color:#5A6B7D; font-size:.85rem; }
.legal-footer a { color:#003D82; text-decoration:none; margin:0 .25rem; }
.legal-footer a:hover { color:#D32F2F; }
`;
