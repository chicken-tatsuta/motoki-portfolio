import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { filters, projects } from "./data";
import "./styles.css";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Header({ onHome }) {
  const [open, setOpen] = useState(false);
  const go = (hash) => { onHome(); setOpen(false); setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0); };
  return <header className="header">
    <button className="wordmark" onClick={() => go("#top")}>MOTOKI<br/>TATSUTA</button>
    <button className="menu-button" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "CLOSE" : "MENU"}</button>
    <nav id="nav" className={open ? "nav is-open" : "nav"} aria-label="メインナビゲーション">
      <button onClick={() => go("#about")}>About</button><button onClick={() => go("#works")}>Works</button><button onClick={() => go("#contact")}>Contact</button>
    </nav>
  </header>;
}

function Home({ openProject, openDisclosure }) {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(() => projects.filter(p => filter === "All" || p.group === filter), [filter]);
  return <main id="top">
    <section className="hero shell">
      <p className="kicker">PORTFOLIO / 2026</p>
      <h1><span>Ideas into</span><br/><em>motion.</em></h1>
      <div className="hero-bottom">
        <p>企画、デザイン、技術を横断して、<br/>人とアイデアが動き出す仕組みをつくる。</p>
        <a className="round-link" href="#works" aria-label="制作物へ移動">↓</a>
      </div>
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-dot"/>
    </section>

    <section id="about" className="about shell section-pad">
      <p className="section-no">01 — ABOUT</p>
      <div className="about-grid">
        <h2>世界をつくる前に、<br/>人が動く理由をつくる。</h2>
        <div>
          <p className="lead">Motoki Tatsuta。ロボティクス、ゲーム、Webを行き来しながら、まだ名前のないアイデアを形にしています。</p>
          <p>強みは、つくる対象を限定しないことです。国際ロボコンでは営業やイベント、チーム運営を担い、自主制作ではゲームのルールからカードの世界観まで設計してきました。思いつきを作品で終わらせず、誰かに届き、次の行動が生まれるところまでつなげます。</p>
          <div className="skills"><span>Design</span><span>Engineering</span><span>Project Management</span><span>Storytelling</span></div>
        </div>
      </div>
    </section>

    <section id="works" className="works section-pad">
      <div className="shell section-head"><p className="section-no">02 — SELECTED WORKS</p><h2>考えた跡まで、<br/>見える仕事。</h2></div>
      <div className="shell filters" role="group" aria-label="制作物をカテゴリで絞り込む">
        {filters.map(f => <button key={f} className={filter === f ? "active" : ""} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}
      </div>
      <div className="project-list">
        {visible.map(project => <button className={`project-row ${project.accent}`} key={project.id} onClick={() => openProject(project.id)}>
          <span className="project-index">{project.index}</span>
          <span className="project-copy"><small>{project.group} / {project.period}</small><strong>{project.title}</strong><span>{project.summary}</span><span className="tag-line">{project.tags.join(" · ")}</span></span>
          {project.image ? <img src={project.image} alt=""/> : <span className="project-mark" aria-hidden="true">{project.id === "cat" ? "404" : "〈/〉"}</span>}
          <span className="project-arrow" aria-hidden="true">↗</span>
        </button>)}
      </div>
    </section>

    <section id="contact" className="contact shell section-pad">
      <p className="section-no">03 — CONTACT</p>
      <div className="contact-grid"><h2>次の面白いことを、<br/><em>一緒に。</em></h2><div><p>インターン、面談、プロジェクトの相談など、気軽に声をかけてください。</p><a className="email-link" href="mailto:kmc2423@kamiyama.ac.jp?subject=Portfolio%20Website%20Inquiry">メールを送る <Arrow/></a><div className="socials"><a href="https://github.com/chicken-tatsuta" target="_blank" rel="noreferrer">GitHub <Arrow/></a><a href="https://x.com/chicken_tatsut" target="_blank" rel="noreferrer">X <Arrow/></a></div></div></div>
    </section>
    <footer className="footer shell"><span>© 2026 MOTOKI TATSUTA</span><button onClick={openDisclosure}>AI利用について</button><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}

function Detail({ project, close }) {
  useEffect(() => { window.scrollTo(0, 0); }, [project.id]);
  return <main className={`detail ${project.accent}`}>
    <div className="shell detail-top"><button className="back" onClick={close}>← WORKS</button><p>{project.index} / {project.group}</p></div>
    <section className="shell detail-hero"><div><p className="kicker">{project.period}</p><h1>{project.title}</h1><p>{project.subtitle}</p></div>{project.image ? <img src={project.image} alt={project.imageAlt}/> : <div className="detail-symbol">{project.id === "cat" ? "404\nCAT\nFOUND" : "〈/〉"}</div>}</section>
    <section className="facts shell">{project.facts.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="case shell">
      <aside><p className="section-no">CASE STUDY</p><dl><dt>ROLE</dt><dd>{project.role}</dd><dt>TOOLS</dt><dd>Notion / Figma / Adobe / Web</dd></dl></aside>
      <article>
        <div className="chapter"><span>01</span><h2>背景</h2><p>{project.background}</p></div>
        <div className="chapter"><span>02</span><h2>課題と狙い</h2><p>{project.challenge}</p></div>
        <div className="chapter"><span>03</span><h2>プロセス</h2><ol>{project.process.map((p,i) => <li key={p}><b>0{i+1}</b><p>{p}</p></li>)}</ol></div>
        {project.gallery && <div className="gallery">{project.gallery.map((src,i) => <img key={src} src={src} alt={`ZERONIKA カードデザイン ${i+2}`}/>)}</div>}
        <div className="chapter result"><span>04</span><h2>成果</h2><p>{project.result}</p></div>
        <div className="chapter learning"><span>05</span><h2>学び</h2><blockquote>“{project.learning}”</blockquote></div>
      </article>
    </section>
    <section className="next shell"><p>NEXT PROJECT</p><button onClick={() => { const i = projects.findIndex(p => p.id === project.id); location.hash = `work/${projects[(i+1)%projects.length].id}`; }}>{projects[(projects.findIndex(p => p.id === project.id)+1)%projects.length].title} <Arrow/></button></section>
  </main>;
}

function Disclosure({ close }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => e.target === e.currentTarget && close()}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="ai-title"><button className="modal-close" onClick={close} aria-label="閉じる">×</button><p className="section-no">AI DISCLOSURE</p><h2 id="ai-title">AI利用について</h2><p>このポートフォリオでは、構成の整理、Reactコードの雛形・主要ロジック、文章の初稿に OpenAI Codex（GPT-5）を利用し、制作者本人が内容・表現・動作を確認して修正しました。</p><dl><dt>使用日</dt><dd>2026年7月20日</dd><dt>使用範囲</dt><dd>情報設計、文章初稿、React / CSS実装、テスト補助</dd><dt>プロンプト概要</dt><dd>既存ポートフォリオと課題要件をもとに、内容設計・UX・レスポンシブを改善してReactで再構築する。</dd><dt>最終責任</dt><dd>出力をそのまま提出せず、制作者本人が検証・修正し、公開内容に責任を持ちます。</dd></dl><button className="button-dark" onClick={close}>確認して閉じる</button></section></div>;
}

function App() {
  const route = () => decodeURIComponent(location.hash.replace(/^#/, ""));
  const [hash, setHash] = useState(route()); const [disclosure, setDisclosure] = useState(false);
  useEffect(() => { const fn=()=>setHash(route()); addEventListener("hashchange", fn); return()=>removeEventListener("hashchange", fn); }, []);
  useEffect(() => { document.body.style.overflow = disclosure ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [disclosure]);
  const id = hash.startsWith("work/") ? hash.split("/")[1] : null; const project = projects.find(p => p.id === id);
  const home = () => { location.hash = ""; setHash(""); };
  return <><Header onHome={home}/>{project ? <Detail project={project} close={() => { location.hash = "works"; setTimeout(() => document.querySelector("#works")?.scrollIntoView(), 0); }}/> : <Home openProject={id => location.hash=`work/${id}`} openDisclosure={() => setDisclosure(true)}/>} {disclosure && <Disclosure close={() => setDisclosure(false)}/>}</>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
