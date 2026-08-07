import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { filters, projects } from "./data";
import "./styles.css";

const Arrow = () => <span aria-hidden="true">↗</span>;
const filterLabels = { All: "すべて", Team: "Hanabi", Creative: "Creative", Engineering: "Engineering" };
const filterDescriptions = {
  All: "チームでの実践から自主制作まで、領域を横断した4件のケーススタディです。",
  Team: "国際ロボコンHanabiで、渉外・イベント・チーム運営を横断した取り組みです。",
  Creative: "ゲームとイラストを通して、自分の世界を遊べる形へ変えた自主制作です。",
  Engineering: "身近な課題を見つけ、WebとAIで小さく素早く形にした取り組みです。",
};

function useReveal(routeKey) {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) node.classList.add("is-visible");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, [routeKey]);
}

function Header({ onHome }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);
  const navigate = (hash) => {
    onHome();
    window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 0);
  };
  return <header className="site-header">
    <button className="site-logo" onClick={() => navigate("#top")}>Motoki Tatsuta</button>
    <nav className="site-nav" aria-label="メインナビゲーション">
      <button onClick={() => navigate("#about")}>自己紹介</button>
      <button onClick={() => navigate("#works")}>制作物</button>
      <button onClick={() => navigate("#contact")}>連絡先</button>
    </nav>
    <span className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
  </header>;
}

function ProjectCard({ project, featured, revealIndex, openProject }) {
  return <button className={featured ? "work-card featured" : "work-card"} style={{ "--reveal-delay": `${Math.min(revealIndex, 3) * 90}ms` }} onClick={() => openProject(project.id)} data-reveal>
    <div className="work-card-copy">
      <p className="work-card-meta"><span>{project.index}</span>{project.group} / {project.period}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="work-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <span className="work-link">詳細を見る <Arrow /></span>
    </div>
    <div className={`work-card-visual visual-${project.id}`}>
      {project.image
        ? <img src={project.image} alt={project.imageAlt || ""} />
        : <strong aria-hidden="true">{project.id === "cat" ? "404\nCAT" : "WEB\n/ AI"}</strong>}
    </div>
  </button>;
}

function Home({ openProject, openDisclosure }) {
  const [filter, setFilter] = useState("All");
  const [contact, setContact] = useState({ name: "", reply: "", message: "" });
  const visible = useMemo(() => projects.filter((project) => filter === "All" || project.group === filter), [filter]);
  useReveal(filter);

  const createEmail = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry — ${contact.name}`);
    const body = encodeURIComponent(`お名前: ${contact.name}\n返信先: ${contact.reply}\n\n${contact.message}`);
    window.location.href = `mailto:kmc2423@kamiyama.ac.jp?subject=${subject}&body=${body}`;
  };

  return <main id="top">
    <section className="hero section">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">PORTFOLIO / 2026</p>
        <h1><span>Motoki</span><span>Tatsuta</span></h1>
        <p className="hero-subtitle">アイデアを、人が動くところまで。</p>
        <p className="hero-description">ロボティクス、ゲーム制作、Webプログラミングを横断して、<br />まだ形のない考えを、行動や体験へつなげます。</p>
        <div className="button-row">
          <a className="button primary" href="#works">制作物を見る</a>
          <a className="button secondary" href="#contact">連絡する</a>
        </div>
      </div>
      <div className="hero-visual" data-reveal>
        <div className="motion-ring" aria-hidden="true" />
        <img src="./assets/profile-hero.jpg" alt="神山町の屋外に立つMotoki Tatsuta" />
      </div>
    </section>

    <section id="about" className="section two-column section-space" data-reveal>
      <div>
        <p className="section-label">自己紹介 / ABOUT</p>
        <h2>領域を越えて、<br />人が動く理由をつくる。</h2>
      </div>
      <div className="section-body">
        <p className="about-lead">Motoki Tatsuta。ロボティクス、ゲーム、Webを行き来しながら、まだ名前のないアイデアを形にしています。</p>
        <p>国際ロボコンでは営業やイベント、チーム運営を担当し、自主制作ではゲームのルールから世界観まで設計してきました。完成物だけでなく、相手や状況を理解し、次の行動が生まれるところまでつなげることを大切にしています。</p>
        <div className="tag-list"><span>デザイン</span><span>エンジニアリング</span><span>プロジェクトマネジメント</span><span>ストーリーテリング</span></div>
      </div>
    </section>

    <section className="section strengths" aria-labelledby="strength-title" data-reveal>
      <div className="strength-heading"><p className="section-label">強み / STRENGTHS</p><h2 id="strength-title">考える、伝える、動かす。</h2></div>
      <div className="strength-grid">
        <article><span>01</span><strong>相手を理解する</strong><p>150件以上の提案と対話を重ね、相手に合わせて価値を言語化。</p></article>
        <article><span>02</span><strong>仕組みに変える</strong><p>83回のイベントを設計し、累計15,000人以上へ体験を届ける。</p></article>
        <article><span>03</span><strong>試して磨く</strong><p>100枚以上のカードを制作し、試遊と観察からルールを改善。</p></article>
      </div>
    </section>

    <section id="works" className="works section-space">
      <div className="section section-heading" data-reveal>
        <div><p className="section-label">制作物 / SELECTED WORKS</p><h2>考えた過程まで、<br />見える仕事。</h2></div>
        <p>背景、役割、プロセス、成果、学びを<br />ケーススタディとして紹介します。</p>
      </div>
      <div className="section work-tabs" role="group" aria-label="制作物をカテゴリで絞り込む">
        {filters.map((item) => <button key={item} className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{filterLabels[item]} <span>{projects.filter((project) => item === "All" || project.group === item).length}</span></button>)}
      </div>
      <div key={filter} className="section filter-summary" aria-live="polite"><strong>{filterLabels[filter]}</strong><span>{String(visible.length).padStart(2, "0")} PROJECTS</span><p>{filterDescriptions[filter]}</p></div>
      <div className="section works-grid">
        {visible.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0} revealIndex={index} openProject={openProject} />)}
      </div>
    </section>

    <section id="contact" className="section contact-section section-space" data-reveal>
      <div><p className="section-label">連絡先 / CONTACT</p><h2>次の面白いことを、<br />一緒につくりませんか。</h2></div>
      <div className="contact-copy">
        <p>インターン、面談、プロジェクトの相談など、気軽にご連絡ください。</p>
        <form className="contact-form" onSubmit={createEmail}>
          <label><span>お名前</span><input required autoComplete="name" value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} placeholder="山田 太郎" /></label>
          <label><span>返信先メール</span><input required type="email" autoComplete="email" value={contact.reply} onChange={(event) => setContact({ ...contact, reply: event.target.value })} placeholder="you@example.com" /></label>
          <label><span>相談内容</span><textarea required rows="4" value={contact.message} onChange={(event) => setContact({ ...contact, message: event.target.value })} placeholder="相談したい内容をご記入ください" /></label>
          <button type="submit">メールを作成する <Arrow /></button>
          <small>入力内容を本文に入れた状態で、端末のメールアプリを開きます。</small>
        </form>
        <div className="contact-socials"><a href="https://github.com/chicken-tatsuta" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://x.com/chicken_tatsut" target="_blank" rel="noreferrer">SNS <Arrow /></a></div>
      </div>
    </section>

    <footer className="site-footer section"><span>© 2026 Motoki Tatsuta</span><button onClick={openDisclosure}>AI利用について</button><a href="#top">ページ上部へ ↑</a></footer>
  </main>;
}

function Detail({ project, close }) {
  useReveal(project.id);
  useEffect(() => { window.scrollTo(0, 0); }, [project.id]);
  const nextIndex = (projects.findIndex((item) => item.id === project.id) + 1) % projects.length;

  return <main className="project-page">
    <div className="section detail-top"><button onClick={close}>← 制作物一覧へ</button><span>{project.index} / {project.group}</span></div>
    <header className="section project-header" data-reveal>
      <div><p className="section-label">CASE STUDY / {project.period}</p><h1>{project.title}</h1><p className="project-lead">{project.subtitle}</p></div>
      <dl><dt>担当</dt><dd>{project.role}</dd><dt>期間</dt><dd>{project.period}</dd><dt>種別</dt><dd>{project.group === "Team" ? "チームプロジェクト" : "自主制作"}</dd><dt>ツール</dt><dd>{project.tools.join(" / ")}</dd></dl>
    </header>
    <div className={`section project-key-visual visual-${project.id}`} data-reveal>
      {project.image ? <img src={project.image} alt={project.imageAlt} /> : <strong>{project.id === "cat" ? "404 CAT FOUND" : "WEB / AI TOOLS"}</strong>}
      <span>IDEAS INTO MOTION / {project.index}</span>
    </div>
    <section className="section project-metrics" data-reveal>{project.facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <div className="section case-layout">
      <aside><p className="section-label">CONTENTS</p><a href="#background">01 背景</a><a href="#challenge">02 課題と狙い</a><a href="#process">03 プロセス</a><a href="#result">04 成果</a><a href="#learning">05 学び</a></aside>
      <article>
        <section id="background" className="story-section" data-reveal><span>01</span><div><h2>背景</h2><p>{project.background}</p></div></section>
        <section id="challenge" className="story-section orange-band" data-reveal><span>02</span><div><h2>課題と狙い</h2><p>{project.challenge}</p></div></section>
        <section id="process" className="story-section" data-reveal><span>03</span><div><h2>プロセス</h2><ol>{project.process.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></li>)}</ol></div></section>
        {project.gallery && <div className="project-gallery" data-reveal>{project.gallery.map((src, index) => <img key={src} src={src} alt={`${project.title}の制作画像 ${index + 2}`} />)}</div>}
        <section id="result" className="story-section result-band" data-reveal><span>04</span><div><h2>成果</h2><p>{project.result}</p></div></section>
        <section id="learning" className="story-section learning" data-reveal><span>05</span><div><h2>学び</h2><blockquote>「{project.learning}」</blockquote></div></section>
      </article>
    </div>
    <section className="section next-project"><p>次のプロジェクト</p><button onClick={() => { window.location.hash = `work/${projects[nextIndex].id}`; }}>{projects[nextIndex].title} <Arrow /></button></section>
  </main>;
}

function Disclosure({ close }) {
  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && close()}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="ai-title"><button className="modal-close" onClick={close} aria-label="閉じる">×</button><p className="section-label">AI DISCLOSURE</p><h2 id="ai-title">AI利用について</h2><p>構成整理、Reactコードの雛形・主要ロジック、文章初稿、デザイン実装にOpenAI Codex（GPT-5）を利用し、制作者本人が内容・表現・動作を確認して修正しました。</p><dl><dt>使用日</dt><dd>2026年7月20日・8月7日</dd><dt>使用範囲</dt><dd>情報設計、文章初稿、React / CSS実装、テスト補助</dd><dt>指示概要</dt><dd>提出済みコンセプトと元サイトの構成・配色・書体を維持し、ルーブリックに沿って内容設計・UX・レスポンシブを改善。</dd><dt>最終責任</dt><dd>制作者本人が検証・修正し、公開内容に責任を持ちます。</dd></dl><button className="modal-action" onClick={close}>確認して閉じる</button></section></div>;
}

function App() {
  const readRoute = () => decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const [route, setRoute] = useState(readRoute());
  const [disclosure, setDisclosure] = useState(false);
  useEffect(() => { const update = () => setRoute(readRoute()); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  useEffect(() => { document.body.style.overflow = disclosure ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [disclosure]);
  const project = route.startsWith("work/") ? projects.find((item) => item.id === route.split("/")[1]) : null;
  const home = () => { window.location.hash = ""; setRoute(""); };
  return <><Header onHome={home} />{project ? <Detail project={project} close={() => { window.location.hash = "works"; window.setTimeout(() => document.querySelector("#works")?.scrollIntoView(), 0); }} /> : <Home openProject={(id) => { window.location.hash = `work/${id}`; }} openDisclosure={() => setDisclosure(true)} />}{disclosure && <Disclosure close={() => setDisclosure(false)} />}</>;
}

createRoot(document.getElementById("root")).render(<App />);
