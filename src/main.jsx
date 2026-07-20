import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./icons.js";
import "./styles.css";

function usePortfolioBehavior() {
  useEffect(() => {
    import("./legacy.js");
  }, []);
}

function Header({ detail = false }) {
  const prefix = detail ? "index.html" : "";
  return (
    <header className="site-header">
      <a className="site-logo" href="index.html" aria-label="Motoki Tatsuta ホーム">Motoki Tatsuta</a>
      <nav className="site-nav" aria-label="メインナビゲーション">
        <a href={`${prefix}#about`}>自己紹介</a>
        <a href={`${prefix}#works`}>制作物</a>
        <a href={`${prefix}#contact`}>連絡先</a>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer className="site-footer"><p>© <span id="current-year" /> Motoki Tatsuta</p></footer>;
}

function HomePage() {
  usePortfolioBehavior();
  return <>
    <Header />
    <main>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">ポートフォリオ</p>
          <h1>Motoki Tatsuta</h1>
          <p className="hero-subtitle">自分の世界を作るのが夢です。</p>
          <p className="hero-description">ロボティクス、ゲーム制作、Webプログラミングを横断して、<br />アイデアをかたちにする人間です。</p>
          <div className="button-row" aria-label="メインアクション">
            <a className="button primary" href="#works">制作物を見る</a>
            <a className="button secondary" href="#contact">連絡する</a>
          </div>
        </div>
        <div className="hero-visual"><img src="assets/profile-hero.jpg" alt="屋外に立つMotoki Tatsutaのプロフィール写真" /></div>
      </section>

      <section id="about" className="section two-column">
        <div><p className="section-label">自己紹介</p><h2>「ゆるく生きる」<br />世界を目指します。</h2></div>
        <div className="section-body">
          <p>責任を持った仕事から、自分で作った笑える制作物までを紹介します。<br />ここでは、これまで取り組んだ制作物や活動をケーススタディとしてまとめました。</p>
          <div className="tag-list" aria-label="スキルと関心領域">
            <span>デザイン</span><span>エンジニアリング</span><span>プロジェクトマネジメント</span><span>ブランディング</span><span>Webプログラミング</span><span>ストーリーテリング</span>
          </div>
        </div>
      </section>

      <section id="works" className="section">
        <div className="section-heading"><p className="section-label">制作物</p><h2>これまでのプロジェクト</h2></div>
        <div id="work-tabs" className="work-tabs" role="tablist" aria-label="制作物のカテゴリ" />
        <div id="work-group-intro" className="work-group-intro" aria-live="polite" />
        <div id="works-grid" className="works-grid" role="tabpanel" aria-live="polite" />
      </section>

      <section id="contact" className="section contact-section">
        <div><p className="section-label">連絡先</p><h2>インターン、面談、プロジェクトの相談など、お気軽にご連絡ください。</h2></div>
        <div className="contact-links" aria-label="連絡先リンク">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kmc2423%40kamiyama.ac.jp" target="_blank" rel="noreferrer"><span>メール</span><span data-icon="arrowRight" /></a>
          <a href="https://github.com/chicken-tatsuta" target="_blank" rel="noreferrer"><span>GitHub</span><span data-icon="arrowRight" /></a>
          <a href="https://x.com/chicken_tatsut" target="_blank" rel="noreferrer"><span>SNS</span><span data-icon="arrowRight" /></a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

function WorkPage() {
  usePortfolioBehavior();
  return <>
    <Header detail />
    <main className="work-page">
      <a className="back-link" href="index.html#works"><span data-icon="chevronsLeft" /><span>制作物一覧へ戻る</span></a>
      <div id="work-detail" />
    </main>
    <Footer />
  </>;
}

const isWorkPage = window.location.pathname.endsWith("work.html");
createRoot(document.getElementById("root")).render(isWorkPage ? <WorkPage /> : <HomePage />);
