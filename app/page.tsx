"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const PAPER_URL = "https://ieeexplore.ieee.org/document/10583947";

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
      {isLight ? "☾" : "☀"}
    </button>
  );
}

export default function Home() {
  // Reveal below-the-fold sections on scroll.
  useEffect(() => {
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
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-name">
            Khen Bo Kan
          </a>
          <div className="nav-content">
            <div className="nav-links">
              <a href="#glance">overview</a>
              <a href="#results">results</a>
              <a href="#experience">experience</a>
              <a href="#work">work</a>
              <a href="#contact">contact</a>
            </div>
            <div className="nav-actions">
              <ThemeToggle />
              <a
                href="/Khen_Bo_Kan_CV_AI.pdf"
                className="nav-resume"
                target="_blank"
                rel="noopener"
              >
                résumé ↗
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* HERO — the abstract */}
        <header className="hero wrap">
          <div className="grid">
            <div className="rail">
              <div className="spectrum rise d1" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="col">
              <div className="hero-meta rise d1">
                <span className="field">
                  Applied LLM Engineer · Research + Systems
                </span>
                <span>Nethermind · 2026</span>
              </div>

              <h1 className="rise d2">
                LLM Systems in Production: research, evaluation, and the parts
                that break
              </h1>

              <div className="hero-author rise d3">
                <span className="name">Khen Bo Kan</span>
                <span className="affil">
                  AI Engineer, Nethermind · MSc, Chungnam Nat’l Univ.
                </span>
              </div>

              <p className="abstract rise d4">
                <span className="label">Abstract</span>
                I build <strong>LLM systems</strong> — and the research and
                evaluation that keep them reliable under real load. That spans
                fine-tuning and prompt design, retrieval and agent memory, and
                the evals and monitoring that catch regressions before users do.
                In production this powers <strong>AuditAgent</strong>, an AI
                security auditor trusted by teams like Uniswap, Lido, and UBS; in
                research it produced <strong>BGP-LLaMA</strong> and a first-author
                IEEE paper.
              </p>

              <div className="hero-links rise d5">
                <a href="#work" className="tlink">
                  See the work <span className="arrow">↓</span>
                </a>
                <a href={PAPER_URL} target="_blank" rel="noopener" className="tlink">
                  Read the paper <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* AT A GLANCE — model card as front-matter */}
        <section id="glance" className="section wrap reveal">
          <div className="grid">
            <div className="rail">
              <span className="kicker">Overview</span>
            </div>
            <div className="col">
              <h2>At a glance</h2>
              <div className="spec-list">
                <div className="spec-row">
                  <span className="k">focus</span>
                  <span className="v">research · build · evaluate · monitor</span>
                </div>
                <div className="spec-row">
                  <span className="k">domains</span>
                  <span className="v">
                    autonomous agents · RAG · agent memory · fine-tuning
                  </span>
                </div>
                <div className="spec-row">
                  <span className="k">stack</span>
                  <span className="v">Python · PyTorch · FastAPI · Hugging Face</span>
                </div>
                <div className="spec-row">
                  <span className="k">serving</span>
                  <span className="v">self-hosted open models · vLLM · TGI</span>
                </div>
                <div className="spec-row">
                  <span className="k">providers</span>
                  <span className="v">OpenAI · Anthropic · Google</span>
                </div>
                <div className="spec-row">
                  <span className="k">shipped</span>
                  <span className="v">AuditAgent · BGP-LLaMA · Mobile-LLaMA (IEEE)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS — a paper table */}
        <section id="results" className="section wrap reveal">
          <div className="grid">
            <div className="rail">
              <span className="kicker">Results</span>
            </div>
            <div className="col">
              <h2>Selected outcomes</h2>
              <p className="section-lede">
                Measured on shipped systems — not benchmarks run in isolation.
              </p>
              <figure className="results">
                <table>
                  <tbody>
                    <tr>
                      <td className="val">40%</td>
                      <td className="desc">recall of professional audit findings</td>
                      <td className="src">
                        <span>
                          <span className="sysdot audit" />
                          AuditAgent
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="val">67%</td>
                      <td className="desc">score on the EVMBench benchmark</td>
                      <td className="src">
                        <span>
                          <span className="sysdot audit" />
                          AuditAgent
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="val">−27%</td>
                      <td className="desc">prompt size via agent memory + unified RAG</td>
                      <td className="src">
                        <span>
                          <span className="sysdot audit" />
                          AuditAgent
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="val">−96%</td>
                      <td className="desc">manual network-analysis time</td>
                      <td className="src">
                        <span>
                          <span className="sysdot bgp" />
                          BGP-LLaMA
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <figcaption>
                  Table 1 — Selected outcomes from production and research systems.
                </figcaption>
              </figure>

              <div className="trusted">
                <span className="lbl">Systems trusted by</span>
                <span className="names">Uniswap · Lido · CMTA · UBS</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE — genuinely chronological */}
        <section id="experience" className="section wrap reveal">
          <div className="grid head">
            <div className="rail">
              <span className="kicker">Experience</span>
            </div>
            <div className="col">
              <h2>Where I&apos;ve worked</h2>
            </div>
          </div>

          <div className="grid entry">
            <div className="rail entry-meta">
              <div className="when">2025 — present</div>
              <div className="where">Nethermind · Remote</div>
            </div>
            <div className="col entry-body">
              <h3>AI Engineer — AuditAgent</h3>
              <p>
                Built an autonomous, multi-stage LLM agent pipeline for
                smart-contract security: detection, validation, and persistent
                agent memory over a unified RAG index. Also built the in-house
                multi-provider LLM router (OpenAI · Anthropic · Google) with
                streaming, retries, and cost tracking.
              </p>
              <div className="chips">
                <span className="chip">LLM Agents</span>
                <span className="chip">RAG</span>
                <span className="chip">Agent Memory</span>
                <span className="chip">Evaluation</span>
                <span className="chip">Monitoring</span>
                <span className="chip">FastAPI</span>
              </div>
            </div>
          </div>

          <div className="grid entry">
            <div className="rail entry-meta">
              <div className="when">2023 — 2025</div>
              <div className="where">Chungnam National Univ. · MSc</div>
            </div>
            <div className="col entry-body">
              <h3>AI Researcher — LLMs for Network Analysis</h3>
              <p>
                Built BGP-LLaMA, cutting manual network-analysis time by 96% with
                a fine-tuned LLaMA and prompt-engineered GPT. First-author
                publication in IEEE Network Magazine (Mobile-LLaMA), including a
                purpose-built instruction-tuning dataset.
              </p>
              <div className="chips">
                <span className="chip">Fine-tuning</span>
                <span className="chip">PyTorch</span>
                <span className="chip">Hugging Face</span>
                <span className="chip">IEEE</span>
                <span className="chip">FastAPI</span>
              </div>
            </div>
          </div>
        </section>

        {/* WORK — an index of works */}
        <section id="work" className="section wrap reveal">
          <div className="grid head">
            <div className="rail">
              <span className="kicker">Work</span>
            </div>
            <div className="col">
              <h2>Selected work</h2>
            </div>
          </div>

          <div className="grid entry">
            <div className="rail entry-meta">
              <div className="when">2025</div>
              <div className="status">Production</div>
            </div>
            <div className="col entry-body">
              <h3>
                <a href="https://auditagent.nethermind.io/" target="_blank" rel="noopener">
                  AuditAgent <span className="arrow">↗</span>
                </a>
              </h3>
              <p>
                AI security auditor for smart contracts. A multi-agent pipeline
                reaching 40% recall of professional findings and 67% on EVMBench,
                scanning up to 12k LoC per run with resumable checkpoints.
              </p>
              <div className="chips">
                <span className="chip">Agents</span>
                <span className="chip">RAG</span>
                <span className="chip">Solidity</span>
              </div>
            </div>
          </div>

          <div className="grid entry">
            <div className="rail entry-meta">
              <div className="when">2025</div>
              <div className="status">Prototype</div>
            </div>
            <div className="col entry-body">
              <h3>
                <a href="https://github.com/hyonbokan/ai-customs" target="_blank" rel="noopener">
                  AI Customs <span className="arrow">↗</span>
                </a>
              </h3>
              <p>
                Self-hosted LLM that flags discrepancies in customs declarations —
                Gemma-3-27B on local GPUs (vLLM/TGI) with Docling + OCR parsing and
                JSON-schema-constrained output, so sensitive trade data never leaves
                the operator&apos;s environment.
              </p>
              <div className="chips">
                <span className="chip">Self-hosted</span>
                <span className="chip">vLLM / TGI</span>
                <span className="chip">Docling</span>
              </div>
            </div>
          </div>

          <div className="grid entry">
            <div className="rail entry-meta">
              <div className="when">2024</div>
              <div className="status">Open source</div>
            </div>
            <div className="col entry-body">
              <h3>
                <a href="https://github.com/hyonbokan/BGP-LLaMA-webservice" target="_blank" rel="noopener">
                  BGP-LLaMA <span className="arrow">↗</span>
                </a>
              </h3>
              <p>
                Natural-language BGP anomaly detection: a fine-tuned LLaMA
                (served with vLLM) and GPT behind a React/FastAPI app that cut
                manual network-analysis time by 96%.
              </p>
              <div className="chips">
                <span className="chip">Fine-tuning</span>
                <span className="chip">LLaMA</span>
                <span className="chip">vLLM</span>
              </div>
            </div>
          </div>

          <div className="grid entry">
            <div className="rail entry-meta">
              <div className="when">2024</div>
              <div className="status">Published · IEEE</div>
            </div>
            <div className="col entry-body">
              <h3>
                <a href={PAPER_URL} target="_blank" rel="noopener">
                  Mobile-LLaMA <span className="arrow">↗</span>
                </a>
              </h3>
              <p>
                Instruction fine-tuning of open-source LLMs for 5G network
                analysis. First-author paper in IEEE Network Magazine, with a
                purpose-built training dataset (+90 pts accuracy).
              </p>
              <div className="chips">
                <span className="chip">Research</span>
                <span className="chip">Instruction Tuning</span>
                <span className="chip">Evaluation</span>
              </div>
            </div>
          </div>
        </section>

        {/* CORRESPONDENCE */}
        <section id="contact" className="section wrap reveal corr">
          <div className="grid">
            <div className="rail">
              <span className="kicker">Correspondence</span>
            </div>
            <div className="col">
              <h2>Let&apos;s talk about applied LLMs.</h2>
              <p>
                Always happy to compare notes on agents, retrieval, evaluation,
                and getting open models to production.
              </p>
              <div className="corr-links">
                <a href="mailto:hyonbokan@gmail.com" className="tlink corr-mail">
                  hyonbokan@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/khen-bo-kan-2909a716b/"
                  target="_blank"
                  rel="noopener"
                  className="tlink"
                >
                  LinkedIn <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="colophon">
        <div className="colophon-inner">
          <span>© 2026 Khen Bo Kan · Set in Newsreader &amp; IBM Plex Mono · Built from scratch</span>
          <div className="colophon-links">
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
