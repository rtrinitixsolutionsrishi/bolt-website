import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  CloudCog,
  Cog,
  Cpu,
  ExternalLink,
  Gauge,
  GitBranch,
  Globe2,
  Infinity,
  LayoutDashboard,
  Menu,
  Network,
  Radar,
  Rocket,
  ScanSearch,
  Scale,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
} from 'lucide-react';

const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1Xoh98jFpuQrhR2M8d3K-u7eYuo_n1NmxPolCGwHHdUdRuphbOnuhmCY458wHgBamXIwqin9BlDX57WL4n67Y9TQ3OOBjZCROe50KNkKGXvXnBWEtyNYzt3hEMAzjgI_o1WIDDME2wVg3Jae0Ii3RIk1rdUv1QT0YU-w7ui9iMLUPrfjc8WFGWH-tpxT7NP0T7sQClRP5Sdihx9YcD83rLwthnQ84gH4gv50akvunN_XSDU52bxopWQcHqu5eU4cSEfH7E3FfgzH8k';
const facilityImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAQj_-GAkyYUnfzDrJfjbNrR2jFqM64Ohjko324ceuhYNoRx7v_TFpeepmIUcji0WJt2mBrVGNnottaBgMLsh4dg0D4kwu9kGA2JzzXl39YjISC7afmmkqMi6v2Hr0K4kRmjKIYDzlm1f4VBpIe-Zb489gpPBRldMdTl8wmu3bky-WXajDeoNZXpGwhqvvu1OJMrGnwET_sxUw0mP-8Jxm3FiL0_gZLj519grnr2wUowgjNo_Vh3dMYw';

type IconType = LucideIcon;

type Service = {
  code: string;
  label: string;
  title: string;
  description: string;
  icon: IconType;
  tone: string;
};

const services: Service[] = [
  { code: '01 // COGNITIVE', label: 'AI', title: 'AI & Intelligent Solutions', description: 'Transform data into insights, automate decisions, and create smarter business experiences with AI-powered solutions.', icon: Bot, tone: 'violet' },
  { code: '02 // SENSORS & ASSETS', label: 'IoT', title: 'IoT & Connected Systems', description: 'Connect devices, assets, people, and processes through intelligent IoT ecosystems and real-time monitoring platforms.', icon: Activity, tone: 'sky' },
  { code: '03 // INFRASTRUCTURE', label: 'CLOUD', title: 'Cloud & DevOps', description: 'Build, deploy, scale, and manage modern cloud-native applications with automation-driven engineering.', icon: CloudCog, tone: 'lavender' },
  { code: '04 // SOFTWARE PRODUCTS', label: 'SAAS', title: 'SaaS Platforms', description: 'Design scalable, secure, and intuitive software platforms that evolve with your business.', icon: LayoutDashboard, tone: 'pink' },
  { code: '05 // VISIBILITY', label: 'DATA', title: 'Intelligent Dashboards', description: 'Turn complex operational data into real-time visibility, actionable insights, and better decisions.', icon: Gauge, tone: 'blue' },
  { code: '06 // ORCHESTRATION', label: 'FLOW', title: 'Business Automation', description: 'Eliminate repetitive processes, connect systems, and create intelligent workflows that improve operational efficiency.', icon: Workflow, tone: 'violet' },
];

const approach = [
  ['01', 'PHASE I', 'DISCOVER', 'Understand the business challenge, examine current roadblocks, and map ecosystem dependencies.', ScanSearch],
  ['02', 'PHASE II', 'ENGINEER', 'Design the right technology architecture, resilient patterns, and bulletproof micro-services.', Settings2],
  ['03', 'PHASE III', 'CONNECT', 'Integrate systems, legacy devices, applications, and clean pipelines into unified data fabrics.', Network],
  ['04', 'PHASE IV', 'AUTOMATE', 'Eliminate friction through intelligent automation, self-healing networks, and AI-driven decision loops.', Bot],
  ['05', 'PHASE V', 'SCALE', 'Build for continuous growth, global node deployment, and iterative technology modernization.', Rocket],
] as const;

const reasons = [
  ['01', 'ENGINEERED FOR SCALE', 'We architect solutions that evolve seamlessly from today’s operational requirements to tomorrow’s opportunities.', Scale],
  ['02', 'INTELLIGENCE BY DESIGN', 'We transform enterprise telemetry into real-time, meaningful business intelligence.', Cpu],
  ['03', 'AUTOMATION FIRST', 'We identify repetitive, error-prone processes and engineer smarter ways to run them reliably.', Cog],
  ['04', 'CONNECTED ECOSYSTEMS', 'We unify applications, edge devices, data pools, people, and processes through integrated platforms.', GitBranch],
  ['05', 'BUSINESS-DRIVEN ENGINEERING', 'Every technology decision starts with an explicit business objective: efficiency, visibility, growth, or innovation.', TrendingUp],
  ['06', 'BUILT FOR THE FUTURE', 'Our solutions are designed with emerging paradigms and evolving business horizons engineered into day one.', Infinity],
] as const;

function ButtonLink({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <a className={`button-link ${light ? 'button-light' : ''}`} href="#contact">
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2.5} />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="RTRINITIX Solutions home">
            <img src={logoUrl} alt="" />
            <span className="brand-copy"><strong>RTRINITIX</strong><small>Solutions</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            {[
              ['Who We Are', '#who-we-are'],
              ['What We Build', '#what-we-build'],
              ['Our Approach', '#our-approach'],
              ['Why RTRINITIX', '#why-rtrinitix'],
              ['Contact', '#contact'],
            ].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <a className="header-cta" href="#contact">Book a Free Consultation <ArrowRight size={14} /></a>
            <span className="profile-mark"><Building2 size={16} /></span>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="glow glow-one" /><div className="glow glow-two" />
          <div className="content-width hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse-dot" /> AI <i>·</i> CLOUD <i>·</i> IoT <i>·</i> AUTOMATION <i>·</i> DATA <i>·</i> SAAS</div>
              <h1>ENGINEERING<br /><span>WHAT’S</span> NEXT.</h1>
              <p className="hero-lead">Digital solutions built to connect, automate, and accelerate modern businesses.</p>
              <p className="hero-description">RTRINITIX Solutions combines AI, Cloud, IoT, Automation, Data, and SaaS engineering to turn complex business challenges into intelligent, scalable technology.</p>
              <div className="hero-tag">Build smarter. Connect deeper. Scale faster.</div>
              <div className="hero-actions"><ButtonLink>Book a Free Consultation</ButtonLink><a className="text-link" href="#our-approach">See Our Approach <ArrowDown size={15} /></a></div>
            </div>
            <div className="telemetry-card">
              <div className="telemetry-top"><span>ARCHITECTURE STATUS // ACTIVE</span><span>SYS_99.98%</span></div>
              <div className="network-visual">
                <div className="node node-data">DATA</div><div className="node node-cloud">CLOUD</div><div className="node node-iot">IoT</div><div className="node node-scale">SCALE</div><div className="node-center"><span /></div>
                <span className="line line-a" /><span className="line line-b" /><span className="line line-c" /><span className="line line-d" />
              </div>
              <div className="telemetry-metric"><div><span>AUTONOMOUS ENGINE</span><b>ACTIVE_V4.2</b></div><div className="metric-bar"><span /></div><div><span>LOW LATENCY PIPELINE</span><span>4.2 MS</span></div></div>
            </div>
            <div className="hero-footer"><span><i className="tiny-dot" /> ENTERPRISE ARCHITECTURE FRAMEWORKS · GLOBAL DELIVERY</span><a href="#who-we-are">EXPLORE ECOSYSTEM <ArrowDown size={14} /></a></div>
          </div>
        </section>

        <section className="section light-section" id="who-we-are">
          <div className="content-width who-grid">
            <div className="section-intro"><span className="section-label">01 / WHO WE ARE</span><h2>Technology That<br /><em>Moves Business</em><br />Forward.</h2><div className="facility-card"><img src={facilityImage} alt="Engineering team collaborating in a technology operations room" /><div><span>FACILITY // NORTH AMERICA NODE</span><span>ENGINEERING PROTOCOL</span></div></div></div>
            <div className="who-copy"><p className="large-copy">We are a digital engineering and technology solutions company focused on building the systems that power the next generation of businesses.</p><p>At RTRINITIX, we bring together software engineering, cloud technologies, intelligent automation, IoT, AI, and data to create connected digital ecosystems that are built for performance, agility, and scale.</p><div className="quote-card"><span className="quote-rule" /><blockquote>“We don’t simply digitize existing processes. We rethink them. Engineer them. Automate them. And make them intelligent.”</blockquote><div><span>RTRINITIX CORE PHILOSOPHY</span><CheckCircle2 size={20} /></div></div><div className="kpis"><div><strong>100%</strong><span>Architectural Agility</span></div><div><strong>10x</strong><span>Process Velocity</span></div><div><strong>Zero</strong><span>Tech Debt Tolerance</span></div></div></div>
          </div>
        </section>

        <section className="section dark-section" id="what-we-build">
          <div className="content-width"><div className="section-heading dark-heading"><div><span className="section-label">02 / WHAT WE BUILD</span><h2>Technology With <em>a Purpose.</em></h2></div><p>We build technology around real business problems—not technology for technology’s sake.</p></div><div className="service-grid">{services.map(({ code, title, description, icon: Icon, tone }) => <article className="service-card" key={title}><div className={`service-accent ${tone}`} /><div><div className="card-meta"><span>{code}</span><Icon size={26} /></div><h3>{title}</h3><p>{description}</p></div><a href="#contact">Explore Engineering <ArrowRight size={16} /></a></article>)}</div></div>
        </section>

        <section className="tech-strip"><div className="content-width"><div className="center-heading"><span className="section-label">FOUNDATIONAL CAPABILITIES</span><h2>Built on Modern Technology.<br /><em>Designed for What’s Next.</em></h2></div><div className="tech-ribbon"><span>AI</span><i>·</i><span>MACHINE LEARNING</span><i>·</i><span>IoT</span><i>·</i><span>CLOUD</span><i>·</i><span>SaaS</span><i>·</i><span>DEVOPS</span><i>·</i><span>APIs</span><i>·</i><span>DATA ENGINEERING</span><i>·</i><span>AUTOMATION</span></div><div className="mini-stats">{[['Cloud-Native.', 'Zero Bottlenecks'], ['API-First.', 'Infinite Composability'], ['Data-Driven.', 'Predictive Telemetry'], ['Automation-Ready.', 'Zero Human Lag']].map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div><div className="scale-badge">BUILT TO SCALE.</div></div></section>

        <section className="section light-section" id="our-approach"><div className="content-width"><div className="approach-heading"><span className="section-label">03 / OUR APPROACH</span><h2>Discover <b>→</b> Engineer <b>→</b> Connect <b>→</b> Automate <b>→</b> Scale</h2><p>A disciplined, end-to-end framework transforming ambiguous enterprise hurdles into resilient operational realities.</p></div><div className="approach-grid">{approach.map(([num, phase, title, description, Icon]) => <article className="approach-card" key={num}><div className="card-accent" /><div className="approach-meta"><strong>{num}</strong><span>{phase}</span></div><h3>{title}</h3><p>{description}</p><Icon size={20} /></article>)}</div></div></section>

        <section className="section soft-section" id="why-rtrinitix"><div className="content-width"><div className="section-heading"><div><span className="section-label">04 / WHY RTRINITIX?</span><h2>More Than Technology.<br /><em>A Technology Partner.</em></h2></div><p>Precision execution, architectural depth, and real business ownership at every milestone.</p></div><div className="reason-grid">{reasons.map(([num, title, description, Icon]) => <article className="reason-card" key={num}><div className="reason-top"><strong>{num}</strong><span><Icon size={17} /></span></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section className="section vision-section"><div className="content-width vision-grid"><div className="vision-panel"><span className="section-label">STRATEGIC HORIZON</span><h2>OUR VISION:<br /><em>To Engineer a Smarter Digital World.</em></h2><p>We envision a future where technology doesn’t simply support businesses—it thinks, connects, adapts, and accelerates them. RTRINITIX aims to build intelligent digital infrastructure that enables organizations to operate smarter, respond faster, and create new possibilities.</p><div className="panel-foot"><Radar size={25} /> PREDICTIVE AUTONOMOUS INFRASTRUCTURE</div></div><div className="mission-panel"><span className="section-label">CORE PURPOSE</span><h2>OUR MISSION:<br /><em>Turn Complexity Into Intelligence.</em></h2><p>Our mission is to engineer technology that makes businesses more connected, automated, intelligent, and scalable. We bring together people, technology, and innovation to solve meaningful problems and create measurable business impact.</p><div className="panel-foot"><Sparkles size={25} /> MEASURABLE ENTERPRISE DELIVERABLES</div></div></div></section>

        <section className="closing-cta" id="contact"><div className="closing-glow" /><div className="content-width"><span className="section-label">READY TO ADVANCE</span><h2>Let’s Engineer What’s Next —<br /><em>Together.</em></h2><p>Talk to our engineering architects about your next digital transformation initiative and scale with complete enterprise certainty.</p><div className="closing-actions"><ButtonLink light>Book a Free Consultation</ButtonLink><a className="portfolio-link" href="#what-we-build">Review Engineering Portfolio <ArrowRight size={16} /></a></div><div className="trust-row"><span><ShieldCheck size={16} /> Enterprise Grade Security</span><span><Gauge size={16} /> High-Velocity Execution</span><span><GitBranch size={16} /> Continuous Integration Lifecycle</span></div></div></section>
      </main>

      <footer className="site-footer"><div className="content-width footer-grid"><div className="footer-brand"><a className="brand" href="#top"><img src={logoUrl} alt="" /><span className="brand-copy"><strong>RTRINITIX</strong><small>Solutions</small></span></a><p>Architecting resilient, mission-critical digital systems, intelligent platforms, and enterprise intelligence for forward-leaning transformation leaders worldwide.</p><div className="footer-icons"><Building2 size={18} /><Globe2 size={18} /><ShieldCheck size={18} /></div></div><div><h3>Company</h3><a href="#who-we-are">Who We Are</a><a href="#our-approach">Our Approach</a><a href="#why-rtrinitix">Why RTRINITIX</a><a href="#contact">Careers</a></div><div><h3>Services</h3><a href="#what-we-build">AI & Intelligent Solutions</a><a href="#what-we-build">IoT & Connected Systems</a><a href="#what-we-build">Cloud & DevOps</a><a href="#what-we-build">SaaS Platforms</a><a href="#what-we-build">Business Automation</a></div><div><h3>Contact & Offices</h3><strong>Global Headquarters</strong><p>Metropolitan Tech Tower, Suite 4800<br />North America & EMEA Nodes</p><a href="mailto:inquiries@rtrinitix.com">inquiries@rtrinitix.com</a><a className="direct-link" href="#contact">Book Direct Consultation <ExternalLink size={13} /></a></div></div><div className="content-width footer-bottom"><span>© 2025 RTRINITIX Solutions LLC. All rights reserved.</span><span><a href="#contact">Security</a><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a></span></div></footer>
    </div>
  );
}

export default App;
