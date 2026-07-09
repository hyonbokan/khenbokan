"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "next-themes";

type TraceLine = { cls?: string; tag?: string; content: ReactNode };

const TRACE: TraceLine[] = [
  {
    cls: "cmd",
    content: (
      <>
        <span className="prompt">$</span>{" "}
        <span className="msg">khen_bo --whoami</span>
      </>
    ),
  },
  { tag: "role", content: "applied AI / LLM engineer" },
  { tag: "builds", content: "autonomous agents · RAG · agent memory" },
  { tag: "stack", content: "Python · FastAPI · PyTorch · LLMOps" },
  { tag: "models", content: "OpenAI · Anthropic · Google" },
  { tag: "serving", content: "self-hosted open models · vLLM · TGI" },
  { cls: "done", tag: "shipped", content: "AuditAgent · BGP-LLaMA · IEEE paper" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isLight = mounted && resolvedTheme === "light";
  return (
    <button
      className="theme-btn"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? "☀" : "☾"}
    </button>
  );
}

export default function Home() {
  const [visible, setVisible] = useState(0);

  // Trace reveal
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(TRACE.length);
      return;
    }
    setVisible(1);
    let i = 1;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      i += 1;
      setVisible(i);
      if (i < TRACE.length) t = setTimeout(step, 520);
    };
    t = setTimeout(step, 650);
    return () => clearTimeout(t);
  }, []);

  // Reveal-on-scroll + metric count-up
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

    const mio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const card = e.target as HTMLElement;
          card.classList.add("in");
          const v = card.querySelector(".val") as HTMLElement | null;
          if (!v) return;
          const to = parseInt(v.getAttribute("data-to") || "0", 10);
          const pre = v.getAttribute("data-prefix") || "";
          const suf = v.getAttribute("data-suffix") || "";
          if (reduce) {
            v.textContent = pre + to + suf;
            mio.unobserve(card);
            return;
          }
          let start: number | null = null;
          const dur = 900;
          const tick = (ts: number) => {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            v.textContent = pre + Math.round(to * eased) + suf;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          mio.unobserve(card);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".metric").forEach((n) => mio.observe(n));

    return () => {
      io.disconnect();
      mio.disconnect();
    };
  }, []);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="caret">▸</span> khen_bo_kan
          </a>
          <div className="nav-links">
            <a href="#metrics">impact</a>
            <a href="#experience">experience</a>
            <a href="#work">work</a>
            {/* <a href="#writing">writing</a> */}
            <a href="#contact">contact</a>
            <ThemeToggle />
            <a
              href="/Khen_Bo_Kan_CV_AI.pdf"
              className="nav-cta"
              target="_blank"
              rel="noopener"
            >
              résumé ↗
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Applied AI / LLM Engineer</span>
              <h1>
                I build autonomous <span className="hl">LLM agents</span>, RAG
                pipelines, and the systems that run them.
              </h1>
              <p className="lede">
                Currently at Nethermind, building the agent pipeline behind
                AuditAgent — an AI security auditor used by teams like Uniswap,
                Lido, and UBS.
              </p>
              <div className="hero-cta">
                <a href="#work" className="btn primary">
                  View work →
                </a>
                <a href="#contact" className="btn">
                  Get in touch
                </a>
              </div>
            </div>

            {/* SIGNATURE: whoami trace */}
            <div className="trace" aria-label="khen_bo --whoami">
              <div className="trace-bar">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
                <span className="trace-title">
                  khen_bo · <span className="live">whoami</span>
                </span>
              </div>
              <div className="trace-body">
                {TRACE.slice(0, visible).map((ln, i) => (
                  <div key={i} className={`tline ${ln.cls || ""}`}>
                    {ln.cls === "cmd" ? (
                      ln.content
                    ) : (
                      <>
                        {ln.tag && <span className="tag">{ln.tag}</span>}
                        <span className="msg">{ln.content}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* METRICS */}
        <section id="metrics" className="wrap reveal">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2>Impact, measured</h2>
          </div>
          <div className="metrics">
            <div className="metric">
              <div className="val" data-to="40" data-suffix="%">
                40%
              </div>
              <div className="label">recall of professional audit findings</div>
            </div>
            <div className="metric">
              <div className="val" data-to="67" data-suffix="%">
                67%
              </div>
              <div className="label">on the EVMBench benchmark</div>
            </div>
            <div className="metric">
              <div className="val" data-to="27" data-prefix="−" data-suffix="%">
                −27%
              </div>
              <div className="label">smaller prompts via agent memory + RAG</div>
            </div>
            <div className="metric">
              <div className="val" data-to="30" data-prefix="−" data-suffix="%">
                −30%
              </div>
              <div className="label">inference cost on a production pipeline</div>
            </div>
          </div>

          <div className="trusted">
            <span className="lbl">Systems I build are trusted by</span>
            <div className="logos">
              <span className="logo">Uniswap</span>
              <span className="logo">Lido</span>
              <span className="logo">CMTA</span>
              <span className="logo">UBS</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="wrap reveal">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2>Experience</h2>
          </div>
          <div className="xp">
            <div className="xp-row">
              <div className="xp-meta">
                <div className="when">2025 — present</div>
                <div className="where">Nethermind · Remote</div>
              </div>
              <div className="xp-body">
                <h3>AI Engineer — AuditAgent</h3>
                <p>
                  Built an autonomous, multi-stage LLM agent pipeline for
                  smart-contract security: detection, validation, and persistent
                  agent memory over a unified RAG indexer. Also built the
                  in-house multi-provider LLM router (OpenAI · Anthropic ·
                  Google) with streaming, retries, and cost tracking.
                </p>
                <div className="tags">
                  <span className="tag-chip">LLM Agents</span>
                  <span className="tag-chip">RAG</span>
                  <span className="tag-chip">Agent Memory</span>
                  <span className="tag-chip">LLMOps</span>
                  <span className="tag-chip">Python</span>
                  <span className="tag-chip">FastAPI</span>
                </div>
              </div>
            </div>
            <div className="xp-row">
              <div className="xp-meta">
                <div className="when">2023 — 2025</div>
                <div className="where">Chungnam National University · MSc</div>
              </div>
              <div className="xp-body">
                <h3>AI Researcher — LLMs for Network Analysis</h3>
                <p>
                  Built BGP-LLaMA, an AI web app that cut manual
                  network-analysis time by 96% using a fine-tuned LLaMA +
                  prompt-engineered GPT. First-author publication in IEEE Network
                  Magazine (Mobile-LLaMA).
                </p>
                <div className="tags">
                  <span className="tag-chip">Fine-tuning</span>
                  <span className="tag-chip">PyTorch</span>
                  <span className="tag-chip">Hugging Face</span>
                  <span className="tag-chip">IEEE</span>
                  <span className="tag-chip">Django</span>
                  <span className="tag-chip">React</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK / PROJECTS */}
        <section id="work" className="wrap reveal">
          <div className="sec-head">
            <span className="sec-num">03</span>
            <h2>Selected work</h2>
          </div>
          <div className="proj-grid">
            <a
              className="card"
              href="https://auditagent.nethermind.io/"
              target="_blank"
              rel="noopener"
            >
              <div className="status">Production</div>
              <h3>
                AuditAgent <span className="arrow">↗</span>
              </h3>
              <p>
                AI security auditor for smart contracts. Multi-agent pipeline
                reaching 40% recall of professional findings, 67% on EVMBench,
                scanning up to 12k LoC per run with resumable checkpoints.
              </p>
              <div className="tags">
                <span className="tag-chip">Agents</span>
                <span className="tag-chip">RAG</span>
                <span className="tag-chip">Solidity</span>
              </div>
            </a>
            <a
              className="card"
              href="https://github.com/hyonbokan/BGP-LLaMA-webservice"
              target="_blank"
              rel="noopener"
            >
              <div className="status">Open source</div>
              <h3>
                BGP-LLaMA <span className="arrow">↗</span>
              </h3>
              <p>
                Natural-language BGP anomaly detection: a fine-tuned LLaMA + GPT
                behind a React/Django app that cut manual network-analysis time
                by 96%. Code on GitHub.
              </p>
              <div className="tags">
                <span className="tag-chip">Fine-tuning</span>
                <span className="tag-chip">LLaMA</span>
                <span className="tag-chip">Django</span>
              </div>
            </a>
            <a
              className="card"
              href="https://ieeexplore.ieee.org/document/10583947"
              target="_blank"
              rel="noopener"
            >
              <div className="status">Published</div>
              <h3>
                Mobile-LLaMA <span className="arrow">↗</span>
              </h3>
              <p>
                Instruction fine-tuning of open-source LLMs for 5G network
                analysis. First-author paper in IEEE Network Magazine, with a
                purpose-built training dataset (+90 pts accuracy).
              </p>
              <div className="tags">
                <span className="tag-chip">Research</span>
                <span className="tag-chip">Instruction Tuning</span>
                <span className="tag-chip">IEEE</span>
              </div>
            </a>
            <a
              className="card"
              href="https://github.com/hyonbokan/LLM-research"
              target="_blank"
              rel="noopener"
            >
              <div className="status">Open source</div>
              <h3>
                LLM-Research <span className="arrow">↗</span>
              </h3>
              <p>
                Fine-tuning scripts, synthetic-data generation (self-instruct +
                few-shot), and custom evaluation harnesses for open-source LLMs.
                The lab notebook behind the papers.
              </p>
              <div className="tags">
                <span className="tag-chip">PyTorch</span>
                <span className="tag-chip">Hugging Face</span>
                <span className="tag-chip">Evaluation</span>
              </div>
            </a>
          </div>
        </section>

        {/* WRITING — coded and ready; commented out until posts are published.
        <section id="writing" className="wrap reveal">
          <div className="sec-head">
            <span className="sec-num">04</span>
            <h2>Writing</h2>
          </div>
          <div className="posts">
            <a className="post" href="#">
              <span className="post-meta">soon · 6 min</span>
              <div>
                <h3>
                  Agent memory without a vector database{" "}
                  <span className="arrow">↗</span>
                </h3>
                <p>
                  How a deterministic, unified RAG index serves both code and
                  memory — and cuts prompt size ~27%.
                </p>
              </div>
            </a>
            <a className="post" href="#">
              <span className="post-meta">soon · 5 min</span>
              <div>
                <h3>
                  Cutting audit false positives with a critic pass{" "}
                  <span className="arrow">↗</span>
                </h3>
                <p>
                  Why a second-stage validation agent beats prompt-tuning alone
                  for precision.
                </p>
              </div>
            </a>
            <a className="post" href="#">
              <span className="post-meta">soon · 8 min</span>
              <div>
                <h3>
                  An in-house LLM router across three providers{" "}
                  <span className="arrow">↗</span>
                </h3>
                <p>
                  Structured output, tool loops, streaming, and fallback without
                  a heavy SDK.
                </p>
              </div>
            </a>
          </div>
        </section>
        */}

        {/* CONTACT */}
        <section id="contact" className="contact wrap reveal">
          <span className="eyebrow">Contact</span>
          <h2>
            Let&apos;s <span className="hl">talk</span>.
          </h2>
          <p>
            Always happy to talk about LLM agents, RAG, and applied AI.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <a href="mailto:hyonbokan@gmail.com" className="btn primary">
              hyonbokan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/khen-bo-kan-2909a716b/"
              target="_blank"
              rel="noopener"
              className="btn"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-inner">
          <span className="c">© 2026 Khen Bo Kan · built from scratch</span>
          <div className="foot-links">
            <a href="https://github.com/hyonbokan" target="_blank" rel="noopener">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/khen-bo-kan-2909a716b/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a href="mailto:hyonbokan@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
