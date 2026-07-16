import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const skills = [
  { title: 'Independent Guide', body: 'An independent API reference for The Movie Database (TMDB), created by Preeti Sharma as a technical-writing portfolio piece.' },
  { title: 'Tested, Not Copied', body: 'Every endpoint is tested by the author in Postman. Every example response and error code is a real captured result.' },
  { title: 'Honest by Design', body: "Expect some deviation from TMDB's official documentation: anything that didn't respond as expected is either excluded or corrected to match the real results." },
];

const tools = [
  { name: 'Docusaurus', note: 'Site framework & docs' },
  { name: 'Markdown / MDX', note: 'Structured content authoring' },
  { name: 'Git & GitHub', note: 'Docs-as-code workflow & review' },
  { name: 'Postman', note: 'Endpoint testing & response capture' },
];

const curl = `$ curl "https://api.themoviedb.org/3/movie/550" \\
    -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
    -H "accept: application/json"`;

const resp = `{
  "id": 550,
  "title": "Fight Club",
  "release_date": "1999-10-15",
  "runtime": 139,
  "vote_average": 8.4
}`;

function CodeCard() {
  const [tab, setTab] = useState('curl');
  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 60px -24px rgba(10,20,15,.35)', border: '1px solid var(--hp-line)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 14px', background: '#0e1621', borderBottom: '1px solid #1e2a38' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ marginLeft: 8, fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: '#7c8a9a' }}>
          GET /movie/{'{movie_id}'}
        </span>
      </div>
      <div style={{ display: 'flex', background: '#0b131c', borderBottom: '1px solid #1e2a38' }}>
        <button onClick={() => setTab('curl')} style={{ padding: '9px 16px', background: 'none', border: 'none', borderBottom: `2px solid ${tab === 'curl' ? 'var(--ifm-color-primary)' : 'transparent'}`, color: tab === 'curl' ? '#e6edf5' : '#7c8a9a', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, cursor: 'pointer' }}>cURL</button>
        <button onClick={() => setTab('res')} style={{ padding: '9px 16px', background: 'none', border: 'none', borderBottom: `2px solid ${tab === 'res' ? 'var(--ifm-color-primary)' : 'transparent'}`, color: tab === 'res' ? '#e6edf5' : '#7c8a9a', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, cursor: 'pointer' }}>Response</button>
      </div>
      <pre style={{ margin: 0, padding: 20, background: '#0b131c', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.8, lineHeight: 1.85, color: '#c9d4e3', overflow: 'auto' }}>
        {tab === 'curl' ? curl : resp}
      </pre>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="TMDB API Reference"
      description="An independent, developer-first reference for the TMDB API — by Preeti Sharma">

      {/* HERO */}
      <section style={{ borderBottom: '1px solid var(--hp-line)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '72px 32px 68px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 999, background: 'var(--hp-surface)', border: '1px solid var(--hp-line)', fontSize: 12.5, fontWeight: 500, color: 'var(--hp-ink-2)', marginBottom: 22 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ifm-color-primary)' }} />
              A technical-writing portfolio
            </div>
            <h1 style={{ fontFamily: 'IBM Plex Serif, serif', fontWeight: 600, fontSize: 54, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
              The Movie Database API Documentation.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--hp-ink-2)', margin: '0 0 32px', maxWidth: 520 }}>
              An independent API reference guide for TMDB — architected, written, and tested end-to-end by the author.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/docs/overview" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 10, background: 'var(--ifm-color-primary)', color: '#fff', fontSize: 15, fontWeight: 600 }}>
                Read the reference →
              </Link>
              <a href="https://github.com/Preeti-sharma-tech-writer/TMDB" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 10, background: 'var(--hp-surface)', border: '1px solid var(--hp-line)', color: 'var(--ifm-font-color-base)', fontSize: 15, fontWeight: 600 }}>
                View on GitHub
              </a>
            </div>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 34 }}>
              <div><div style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: 24, fontWeight: 600 }}>7</div><div style={{ fontSize: 12.5, color: 'var(--hp-ink-2)' }}>endpoints documented</div></div>
              <div style={{ width: 1, background: 'var(--hp-line)' }} />
              <div><div style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: 24, fontWeight: 600 }}>100%</div><div style={{ fontSize: 12.5, color: 'var(--hp-ink-2)' }}>tested in Postman</div></div>
              <div style={{ width: 1, background: 'var(--hp-line)' }} />
              <div><div style={{ fontFamily: 'IBM Plex Serif, serif', fontSize: 24, fontWeight: 600 }}>35+</div><div style={{ fontSize: 12.5, color: 'var(--hp-ink-2)' }}>endpoints tested</div></div>
            </div>
          </div>
          <CodeCard />
        </div>
      </section>

      {/* TRUST / SKILLS */}
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '78px 32px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ifm-color-primary)', marginBottom: 12 }}>
          Why this reference is trustworthy
        </div>
        <h2 style={{ fontFamily: 'IBM Plex Serif, serif', fontWeight: 600, fontSize: 32, letterSpacing: '-0.01em', margin: '0 0 44px', maxWidth: 640 }}>
          Key Features of this Independent Guide
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {skills.map((s) => (
            <div key={s.title} style={{ background: 'var(--hp-surface)', border: '1px solid var(--hp-line)', borderRadius: 14, padding: '28px 26px' }}>
              <h3 style={{ fontFamily: 'IBM Plex Serif, serif', fontWeight: 600, fontSize: 20, margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--hp-ink-2)', margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCS AS CODE */}
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '70px 32px 90px' }}>
        <h2 style={{ fontFamily: 'IBM Plex Serif, serif', fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em', margin: '0 0 34px' }}>
          Tech Stack Used to Build this Reference
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {tools.map((t) => (
            <div key={t.name} style={{ background: 'var(--hp-surface)', border: '1px solid var(--hp-line)', borderRadius: 12, padding: '20px 18px' }}>
              <div style={{ fontWeight: 600, fontSize: 14.5, marginBottom: 5 }}>{t.name}</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.45, color: 'var(--hp-ink-2)' }}>{t.note}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}