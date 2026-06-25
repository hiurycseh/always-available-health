import{r as t,j as e,L as a}from"./index-LoNKGQFp.js";const m="https://wa.me/5544997455982?text=Ol%C3%A1!%20Vim%20pelo%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",g="https://wa.me/5544997455982",s="(44) 99745-5982";function x(){const[c,l]=t.useState(!1),[o,n]=t.useState({nome:"",telefone:"",mensagem:""});function i(r){r.preventDefault();const d=`Olá! Meu nome é ${o.nome}.%0ATelefone: ${o.telefone}%0A%0A${o.mensagem}`;window.open(`${g}?text=${d}`,"_blank"),l(!0)}return e.jsxs("div",{className:"legal-page",children:[e.jsx("style",{children:p}),e.jsxs("nav",{className:"legal-nav",children:[e.jsx(a,{to:"/",className:"legal-back",children:"← Voltar"}),e.jsx("span",{className:"legal-logo",children:"Atendimento 24h"})]}),e.jsxs("main",{className:"legal-content",children:[e.jsx("h1",{children:"Fale Conosco"}),e.jsx("p",{className:"lead",children:"Nossa equipe está disponível 24 horas para esclarecer dúvidas e oferecer orientação. Escolha o canal de sua preferência."}),e.jsxs("div",{className:"contact-grid",children:[e.jsxs("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"contact-card whatsapp",children:[e.jsx("span",{className:"contact-icon",children:"💬"}),e.jsx("strong",{children:"WhatsApp"}),e.jsx("span",{children:s})]}),e.jsxs("a",{href:"tel:+5544997455982",className:"contact-card phone",children:[e.jsx("span",{className:"contact-icon",children:"📞"}),e.jsx("strong",{children:"Telefone"}),e.jsx("span",{children:s})]}),e.jsxs("div",{className:"contact-card hours",children:[e.jsx("span",{className:"contact-icon",children:"⏰"}),e.jsx("strong",{children:"Horário"}),e.jsx("span",{children:"24 horas · todos os dias"})]}),e.jsxs("div",{className:"contact-card location",children:[e.jsx("span",{className:"contact-icon",children:"📍"}),e.jsx("strong",{children:"Atuação"}),e.jsx("span",{children:"Paraná — Brasil todo"})]})]}),e.jsx("h2",{className:"form-title",children:"Envie uma mensagem"}),c?e.jsxs("div",{className:"form-success",children:[e.jsx("strong",{children:"Mensagem encaminhada!"}),e.jsx("p",{children:"Você foi redirecionado para o WhatsApp. Caso contrário, fale conosco pelo número acima."})]}):e.jsxs("form",{className:"contact-form",onSubmit:i,children:[e.jsxs("label",{children:["Nome",e.jsx("input",{required:!0,value:o.nome,onChange:r=>n({...o,nome:r.target.value})})]}),e.jsxs("label",{children:["Telefone / WhatsApp",e.jsx("input",{required:!0,value:o.telefone,onChange:r=>n({...o,telefone:r.target.value})})]}),e.jsxs("label",{children:["Mensagem",e.jsx("textarea",{required:!0,rows:4,value:o.mensagem,onChange:r=>n({...o,mensagem:r.target.value})})]}),e.jsx("button",{type:"submit",children:"Enviar pelo WhatsApp"}),e.jsxs("small",{children:["Ao enviar, você concorda com nossa ",e.jsx(a,{to:"/privacidade",children:"Política de Privacidade"}),"."]})]}),e.jsxs("div",{className:"emergency-box",children:[e.jsx("strong",{children:"⚠ Não é uma emergência?"}),e.jsxs("p",{children:["Em caso de risco imediato à vida, ligue ",e.jsx("strong",{children:"192 (SAMU)"}),". Em crise emocional, ligue ",e.jsx("strong",{children:"188 (CVV)"})," — gratuito e 24h."]})]})]}),e.jsxs("footer",{className:"legal-footer",children:[e.jsx(a,{to:"/",children:"Início"})," · ",e.jsx(a,{to:"/privacidade",children:"Privacidade"})," · ",e.jsx(a,{to:"/termos",children:"Termos"})]})]})}const p=`
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
`;export{x as component};
