import { useState, useEffect } from 'react'
import { Mail, Download, ExternalLink, Menu, X, ArrowRight, FileText, Image as Img } from 'lucide-react'
import { profile } from './profile'
import { skills } from './skills'
import { experience } from './experience'
import { projects, research } from './projects'

const UI = {
  nav:{ Home:['Home','Beranda'], About:['About','Tentang'], Skills:['Skills','Keahlian'], Projects:['Projects','Proyek'], Experience:['Experience','Pengalaman'], Research:['Research','Riset'], Contact:['Contact','Kontak'] },
  ```javascript
sub: ['Bridging IT, data, and business operations to develop digital solutions, improve workflows, and deliver practical, data-driven results.',
  'Menghubungkan bidang IT, data, dan operasional bisnis untuk mengembangkan solusi digital, meningkatkan alur kerja, dan menghasilkan solusi praktis berbasis data.'],
sum: ['Technology-oriented professional with skills in web development, database management, data analysis, and business operations. Proficient in PHP, Laravel, JavaScript, ReactJS, SQL, MySQL, and Microsoft Excel, with experience in team coordination, performance monitoring, and process improvement. Focused on applying technology and analytical thinking to solve problems, improve efficiency, and support business objectives.',
  'Profesional berorientasi teknologi dengan kemampuan dalam pengembangan web, pengelolaan database, analisis data, dan operasional bisnis. Menguasai PHP, Laravel, JavaScript, ReactJS, SQL, MySQL, dan Microsoft Excel, serta memiliki pengalaman dalam koordinasi tim, pemantauan kinerja, dan peningkatan proses. Berfokus pada pemanfaatan teknologi dan pemikiran analitis untuk menyelesaikan masalah, meningkatkan efisiensi, dan mendukung tujuan bisnis.'],
about: ['I combine IT knowledge and technical skills with practical experience in business operations and team leadership. My capabilities include web application development, database management, data processing, and analysis, supported by a structured approach to problem-solving. Alongside my technical interests, I have experience coordinating teams, monitoring operational performance, maintaining service standards, and identifying opportunities to improve workflows. I focus on understanding business needs and translating them into practical solutions through technology, data, and effective collaboration. This combination enables me to contribute across IT, software development, data analysis, business support, and operational management.',
  'Saya menggabungkan pengetahuan dan keterampilan teknis di bidang IT dengan pengalaman praktis dalam operasional bisnis dan kepemimpinan tim. Kemampuan saya mencakup pengembangan aplikasi web, pengelolaan database, pengolahan data, dan analisis, yang didukung oleh pendekatan pemecahan masalah secara terstruktur. Selain memiliki minat di bidang teknis, saya berpengalaman dalam mengoordinasikan tim, memantau kinerja operasional, menjaga standar pelayanan, dan mengidentifikasi peluang perbaikan alur kerja. Saya berfokus pada pemahaman kebutuhan bisnis dan menerjemahkannya menjadi solusi praktis melalui teknologi, data, dan kolaborasi yang efektif. Kombinasi ini memungkinkan saya berkontribusi di bidang IT, pengembangan perangkat lunak, analisis data, dukungan bisnis, dan manajemen operasional.'],
```
  L:{ viewProjects:['View Projects','Lihat Proyek'], cv:['Download CV','Unduh CV'], pf:['Portfolio PDF','PDF Portofolio'], details:['View Details','Lihat Detail'], demo:['Live Demo','Demo Langsung'], src:['Source Code','Kode Sumber'], feat:['Main Features','Fitur Utama'], role:['My Role','Peran Saya'], tech:['Technologies','Teknologi'], overview:['Project Overview','Ringkasan Proyek'], problem:['Background & Problem','Latar Belakang & Masalah'], obj:['Objectives','Tujuan'], proc:['Development Process','Proses Pengembangan'], chal:['Challenges & Solutions','Tantangan & Solusi'], test:['Testing & Outcomes','Pengujian & Hasil'], gal:['Project Gallery','Galeri Proyek'], noGal:['Screenshots will be added here.','Screenshot akan ditambahkan di sini.'], confirm:['Dates to be confirmed','Periode perlu dikonfirmasi'], edu:['Education','Pendidikan'], eduT:['Informatics Engineering — Universitas Dian Nusantara','Teknik Informatika — Universitas Dian Nusantara'], eduS:['Currently in 7th semester (as of September 2026)','Saat ini semester 7 (per September 2026)'], status:['Status','Status'], method:['Method','Metode'], crit:['Planned criteria','Kriteria rencana'], goal:['Goal','Tujuan'], cert:['Certifications','Sertifikasi'], contactT:['Open to opportunities in IT, software development, data, business analysis, and operations.','Terbuka untuk peluang di bidang IT, pengembangan perangkat lunak, data, analisis bisnis, dan operasional.'], close:['Close','Tutup'], rights:['All rights reserved.','Hak cipta dilindungi.'], soon:['Not set yet','Belum diatur'] },
  h:{ About:['About Me','Tentang Saya'], Skills:['Skills & Tools','Keahlian & Tools'], Projects:['Featured Projects','Proyek Unggulan'], Experience:['Experience','Pengalaman'], Research:['Research & Case Studies','Riset & Studi Kasus'] },
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [proj, setProj] = useState(null)
  const i = lang === 'en' ? 0 : 1
  const t = a => (Array.isArray(a) ? a[i] : a)
  useEffect(() => { localStorage.setItem('lang', lang); document.documentElement.lang = lang }, [lang])
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.dataset.s)), { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('[data-s]').forEach(el => o.observe(el)); return () => o.disconnect()
  }, [])
  useEffect(() => {
    document.body.style.overflow = proj ? 'hidden' : ''
    const k = e => e.key === 'Escape' && setProj(null); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [proj])

  const btn = 'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition'
  const primary = btn + ' bg-cy text-bg hover:bg-white'
  const ghost = btn + ' border border-bd text-tx hover:bg-bg2'
  const Sec = ({ id, children, alt }) => <section id={id} data-s={id} className={alt ? 'bg-bg2/50' : ''}><div className="mx-auto max-w-6xl px-5 py-20">{children}</div></section>
  const H = ({ k }) => <h2 className="mb-10 text-3xl font-bold tracking-tight">{t(UI.h[k])}<span className="mt-3 block h-1 w-12 rounded bg-cy" /></h2>
  const Tag = ({ children }) => <span className="rounded-md border border-bd bg-acc/40 px-2.5 py-1 text-xs text-mu">{t(children)}</span>
  const Ext = ({ href, children, cls = ghost }) => href ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}<ExternalLink size={14} /></a> : null

  return (<>
    <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-cy focus:p-2 focus:text-bg">Skip to content</a>
    <nav className="sticky top-0 z-40 border-b border-bd/70 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="text-lg font-bold text-cy">BF</a>
        <ul className="hidden items-center gap-1 lg:flex">{Object.keys(UI.nav).map(k => <li key={k}><a href={'#' + k} aria-current={active === k ? 'true' : undefined} className={`rounded-md px-3 py-1.5 text-sm transition ${active === k ? 'bg-acc text-cy' : 'text-mu hover:text-tx'}`}>{t(UI.nav[k])}</a></li>)}</ul>
        <div className="flex items-center gap-2">
          <div role="group" aria-label="Language" className="flex overflow-hidden rounded-md border border-bd text-xs font-semibold">
            {['en', 'id'].map(l => <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`px-2.5 py-1.5 ${lang === l ? 'bg-cy text-bg' : 'text-mu hover:text-tx'}`}>{l.toUpperCase()}</button>)}
          </div>
          <a href={profile.cv} download className={primary + ' hidden sm:inline-flex !py-1.5'}><Download size={14} />{t(UI.L.cv)}</a>
          <button className="rounded-md border border-bd p-2 lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {open && <ul className="border-t border-bd px-5 pb-3 lg:hidden">{Object.keys(UI.nav).map(k => <li key={k}><a href={'#' + k} onClick={() => setOpen(false)} className="block py-2.5 text-mu">{t(UI.nav[k])}</a></li>)}<li><a href={profile.cv} download className={primary + ' mt-2'}><Download size={14} />{t(UI.L.cv)}</a></li></ul>}
    </nav>

    <main>
      <section id="Home" data-s="Home" className="relative overflow-hidden">
        <svg aria-hidden className="absolute inset-x-0 bottom-0 w-full opacity-60" viewBox="0 0 1440 220" preserveAspectRatio="none"><path fill="#062B4F" d="M0 120c240-80 480 80 720 0s480-80 720 0v100H0z"/><path fill="#0A4268" fillOpacity=".5" d="M0 160c260-60 460 60 720 0s440-60 720 0v60H0z"/></svg>
        <div id="home" className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-32 pt-20 md:grid-cols-[1.4fr_1fr]">
          <div className="fade">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cy">{profile.name}</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Technology, Data &amp; Business Operations.</h1>
            <p className="mt-5 max-w-2xl text-lg text-mu">{t(UI.sub)}</p>
            <p className="mt-4 max-w-2xl text-mu">{t(UI.sum)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#Projects" className={primary}>{t(UI.L.viewProjects)}<ArrowRight size={16} /></a>
              <a href={profile.cv} download className={ghost}><Download size={16} />{t(UI.L.cv)}</a>
              <Ext href={profile.linkedin}>LinkedIn</Ext><Ext href={profile.github}>GitHub</Ext>
            </div>
          </div>
          <div className="mx-auto flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border border-bd bg-gradient-to-br from-acc to-bg2 sm:h-64 sm:w-64">
            {profile.photo ? <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" /> : <span className="text-6xl font-bold text-cy">BF</span>}
          </div>
        </div>
      </section>

      <Sec id="About" alt><H k="About" /><p className="max-w-3xl leading-relaxed text-mu">{t(UI.about)}</p></Sec>

      <Sec id="Skills"><H k="Skills" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skills.map(g => <div key={g.title[0]} className="rounded-xl border border-bd bg-bg2 p-5"><h3 className="mb-3 font-semibold text-cy">{t(g.title)}</h3><div className="flex flex-wrap gap-2">{g.items.map(s => <Tag key={t(s)}>{s}</Tag>)}</div></div>)}</div>
      </Sec>

      <Sec id="Projects" alt><H k="Projects" />
        <div className="grid gap-6 md:grid-cols-2">{projects.map(p => (
          <article key={p.id} className="flex flex-col overflow-hidden rounded-xl border border-bd bg-bg2 transition hover:border-cy/60">
            <div className="flex h-36 items-center justify-center gap-2 bg-gradient-to-br from-acc to-bg text-sm text-mu">{p.cover ? <img src={p.cover} alt={p.name} className="h-full w-full object-cover" /> : <><Img size={18} />{t(UI.L.noGal)}</>}</div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-cy">{t(p.cat)}</p>
              <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-mu">{t(p.short)}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">{p.tech.map(x => <Tag key={x}>{x}</Tag>)}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                <button onClick={() => setProj(p)} className={primary + ' !py-2'}>{t(UI.L.details)}</button>
                <Ext href={p.demo}>{t(UI.L.demo)}</Ext><Ext href={p.repo}>{t(UI.L.src)}</Ext>
              </div>
            </div>
          </article>))}</div>
      </Sec>

      <Sec id="Experience"><H k="Experience" />
        <ol className="space-y-8 border-l border-bd pl-6">{experience.map(e => (
          <li key={e.role + e.org} className="relative"><span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-cy" />
            <h3 className="text-lg font-semibold">{e.role} <span className="font-normal text-mu">· {e.org}</span></h3>
            <p className="text-sm text-cy">{t(e.period)}{e.needsConfirm && <span className="ml-2 rounded border border-amber-400/50 px-1.5 text-xs text-amber-300">{t(UI.L.confirm)}</span>}</p>
            {e.points.length > 0 && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-mu">{e.points.map(p => <li key={p[0]}>{t(p)}</li>)}</ul>}
          </li>))}</ol>
        <div className="mt-14 rounded-xl border border-bd bg-bg2 p-5"><h3 className="mb-1 font-semibold text-cy">{t(UI.L.edu)}</h3><p>{t(UI.L.eduT)}</p><p className="text-sm text-mu">{t(UI.L.eduS)}</p></div>
        {profile.showCertifications && <div className="mt-6 rounded-xl border border-bd bg-bg2 p-5"><h3 className="font-semibold text-cy">{t(UI.L.cert)}</h3><p className="text-sm text-mu">Add your certificates in src/App.jsx.</p></div>}
      </Sec>

      <Sec id="Research" alt><H k="Research" />
        <div className="grid gap-6 md:grid-cols-2">{research.map(r => (
          <article key={r.title[0]} className="rounded-xl border border-bd bg-bg2 p-6">
            <span className="rounded border border-cy/40 px-2 py-0.5 text-xs text-cy">{t(r.status)}</span>
            <h3 className="mt-3 text-lg font-semibold">{t(r.title)}</h3>
            {r.method && <p className="mt-2 text-sm text-mu"><b className="text-tx">{t(UI.L.method)}:</b> {r.method}</p>}
            <p className="mt-2 text-sm text-mu"><b className="text-tx">{t(UI.L.goal)}:</b> {t(r.goal)}</p>
            <p className="mt-2 text-sm font-semibold">{t(UI.L.crit)}</p><ul className="list-disc pl-5 text-sm text-mu">{r.criteria.map(c => <li key={c[0]}>{t(c)}</li>)}</ul>
            <p className="mt-3 text-xs italic text-mu">{t(r.note)}</p>
          </article>))}</div>
      </Sec>

      <Sec id="Contact"><h2 className="mb-4 text-3xl font-bold">{t(UI.nav.Contact)}</h2><p className="mb-8 max-w-2xl text-mu">{t(UI.L.contactT)}</p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={primary}><Mail size={16} />{profile.email}</a>
          <Ext href={profile.linkedin}>LinkedIn</Ext><Ext href={profile.github}>GitHub</Ext>
          {profile.showInstagram && <Ext href={profile.instagram}>Instagram @bbagusf</Ext>}<Ext href={profile.whatsapp}>WhatsApp</Ext>
          <a href={profile.portfolioPdf} target="_blank" rel="noopener noreferrer" className={ghost}><FileText size={16} />{t(UI.L.pf)}</a>
        </div>
      </Sec>
    </main>
    <footer className="border-t border-bd py-8 text-center text-sm text-mu">© {new Date().getFullYear()} {profile.name}. {t(UI.L.rights)}</footer>

    {proj && <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4" onClick={() => setProj(null)}>
      <div role="dialog" aria-modal="true" aria-label={proj.name} onClick={e => e.stopPropagation()} className="fade my-8 w-full max-w-3xl rounded-xl border border-bd bg-bg p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-wider text-cy">{t(proj.cat)}</p><h3 className="text-2xl font-bold">{proj.name}</h3></div>
          <button autoFocus onClick={() => setProj(null)} aria-label={t(UI.L.close)} className="rounded-md border border-bd p-2"><X size={18} /></button></div>
        {[['overview', proj.overview], ['problem', proj.problem], ['obj', proj.objectives], ['role', proj.role]].map(([k, v]) => <div key={k} className="mt-5"><h4 className="font-semibold text-cy">{t(UI.L[k])}</h4><p className="text-sm text-mu">{t(v)}</p></div>)}
        <div className="mt-5"><h4 className="mb-2 font-semibold text-cy">{t(UI.L.tech)}</h4><div className="flex flex-wrap gap-1.5">{proj.tech.map(x => <Tag key={x}>{x}</Tag>)}</div></div>
        <div className="mt-5"><h4 className="font-semibold text-cy">{t(UI.L.feat)}</h4><ul className="list-disc pl-5 text-sm text-mu">{proj.features.map(f => <li key={f[0]}>{t(f)}</li>)}</ul></div>
        {[['proc', proj.process], ['chal', proj.challenges], ['test', proj.testing]].map(([k, v]) => <div key={k} className="mt-5"><h4 className="font-semibold text-cy">{t(UI.L[k])}</h4><p className="text-sm text-mu">{t(v)}</p></div>)}
        <div className="mt-5"><h4 className="mb-2 font-semibold text-cy">{t(UI.L.gal)}</h4>
          {proj.gallery.length ? <div className="grid gap-3 sm:grid-cols-2">{proj.gallery.map(g => <img key={g} src={g} alt={proj.name} loading="lazy" className="rounded-lg border border-bd" />)}</div> : <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-bd text-sm text-mu">{t(UI.L.noGal)}</div>}</div>
        <div className="mt-6 flex flex-wrap gap-2"><Ext href={proj.demo} cls={primary}>{t(UI.L.demo)}</Ext><Ext href={proj.repo}>{t(UI.L.src)}</Ext></div>
      </div></div>}
  </>)
}
