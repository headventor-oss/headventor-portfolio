import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { projectImages } from '../data/projectImages';
import { AnimatedHeadline } from './AnimatedHeadline';
import { ease, curtainReveal } from '../utils/animations';

const projectData = {
  'HV-01': {
    name: 'Procura',
    descriptor: 'End-to-end procurement intelligence — from live supplier discovery to AI-generated contracts and clause risk review',
    builtIn: '2025',
    stack: 'React 18 · OpenAI GPT-4.1 · Python · Recharts',
    domain: 'Procurement · Supply Chain',
    status: 'Production',
    brief: 'A mid-sized manufacturer managing $48M in annual procurement spend across eight categories had no real system — only spreadsheets, ad-hoc templates, and gut-feel shortlisting. Sourcing managers were spending fourteen hours a week on manual tasks. RFIs were drafted from scratch each cycle, routinely missing mandatory compliance clauses. Supplier selection was made on unit price alone, with no model for total cost of ownership, no country risk weighting, and no financial health checks before award — while contract leakage ran at an estimated 8.6% of annual spend.',
    build: 'We built a five-stage platform covering the full supplier lifecycle. Stage one uses OpenAI\'s live web search to surface real global suppliers from a structured item brief — returning name, country, certifications, and risk classification in seconds. A six-dimension scoring algorithm ranks suppliers across capability, certification fit, country risk, geographic proximity, lead time, and export track record, supplemented by an AI-generated risk brief drawing on live financial, ESG, and geopolitical data. RFI and RFQ generation runs via streaming GPT-4.1 completions with compliance clauses injected automatically, while anomaly detection flags statistically abnormal pricing across submitted bids. A contract drafting and clause risk review module checks incoming contract text against a defined standard, flagging missing clauses and non-standard terms by severity. A seven-persona AI assistant — CPO, Procurement Manager, Finance, Legal, Supply Chain, ESG, Factory Operations — is briefed with live data from all five stages and accessible from any screen.',
    result: 'End-to-end sourcing cycle time fell from two to three weeks to a single working session. RFI and RFQ generation dropped from one to two days of drafting to under five minutes, with zero missed compliance clauses. The clause review module caught auto-renewal traps and non-standard governing law clauses on first live use. TCO modelling shifted sourcing decisions away from unit-price-only awards — in the first cycle, the platform identified a geographically closer supplier whose three-year total cost was 14% lower than the apparently cheaper alternative.',
    quote: 'What used to take two weeks of sourcing, scoring, and contract prep now takes a single working session. The clause review alone has already caught two auto-renewal traps we would have missed.',
    youtubeId: 'RJL4lvctH6o',
    posterImage: '/images/hv-01-poster.png',
    prevProject: { id: 'HV-06', name: 'Coming soon' },
    nextProject: { id: 'HV-02', name: 'Sales coaching platform' },
  },
  'HV-02': {
    name: 'Sales coaching platform',
    descriptor: 'Voice AI that lets reps rehearse high-stakes calls before they happen',
    builtIn: '2025',
    stack: 'Whisper · LLMs · FastAPI · React',
    domain: 'Sales',
    status: 'Production',
    brief: 'Sales executives routinely walk into high-stakes client calls underprepared. Coaching is expensive, role-play partners are hard to schedule, and there is no way to practice a specific difficult scenario before it actually happens. Most reps learn by failing on real calls — which costs real deals.',
    build: 'We built a voice-first practice platform where a rep sets up the scenario before the call: who they are calling, what they are selling, how difficult the client is, and what the client personality looks like — aggressive, price-sensitive, skeptical, time-constrained. The AI generates personalised coaching reminders, then plays the client in real-time voice, raising objections at the right moments and adapting its resistance based on how the conversation is going. After the simulation, the platform produces a full debrief scored across nine dimensions of sales craft — opening quality, discovery depth, objection handling, closing — highlighting the exact moments where the rep fumbled and what they should have said instead. Voice delivery is analysed separately: speaking pace, filler words, hesitations.',
    result: 'Reps can now rehearse a specific difficult client scenario in minutes, with no coach or partner needed. Scoring is objective and consistent across every session. Managers gain a structured view of exactly what each rep needs to work on, and reps track their improvement over time across different clients and difficulty levels. Executives report walking into real calls measurably more confident and better prepared.',
    quote: 'Reps no longer learn by failing on real calls. The simulator takes the hit instead.',
    youtubeId: 'OrXHjW9QNt8',
    posterImage: '/images/hv-02-poster.png',
    prevProject: { id: 'HV-01', name: 'Procura' },
    nextProject: { id: 'HV-03', name: 'Financial competitive assistant' },
  },
  'HV-03': {
    name: 'Financial competitive assistant',
    descriptor: 'Upload any annual report and interrogate your competitors\' numbers in seconds — cited, multilingual, no embeddings',
    builtIn: '2026',
    stack: 'GPT-4o Vision · FastAPI · Next.js · SQLite · Recharts',
    domain: 'Finance',
    status: 'Production',
    brief: 'Financial analysts and strategy teams spend days manually reading annual reports, extracting numbers into spreadsheets, and building comparison tables — only to repeat the process next quarter. When a competitor releases earnings or a new market player enters the space, the firms that move fastest on that intelligence win. The problem is not access to information. The problem is that reading, extracting, and comparing financial documents at scale is still a manual, error-prone, deeply human task.',
    build: 'We built a document intelligence platform around a novel retrieval architecture called PageIndex RAG — no vector embeddings, no chunking, no retrieval drift. GPT-4o vision processes every page of every uploaded PDF as an image, extracting raw content, tables, charts, footnotes, and key figures with forensic precision, regardless of language or layout. At query time, GPT-4o navigates the index like a human analyst — reading summaries first, selecting only the relevant pages, then answering from the full extracted content. Every factual claim carries a mandatory citation: company, document type, and page number. Thirty standardised KPIs are pre-extracted at ingestion — Revenue, EBITDA, Net Debt, Free Cash Flow, EPS — enabling instant cross-company comparison without re-querying the LLM. Multi-company queries automatically produce markdown tables and inline Recharts visualisations. The interface is trilingual — English, German, and Japanese.',
    result: 'Analysts can now upload a 300-page annual report and ask specific financial questions in under two minutes — with exact cited figures, no hallucinations, and no manual extraction. Competitive comparisons that previously took half a day now take a single conversation. The citation layer means every answer is auditable: strategists can trace every number back to the source page before presenting to leadership. Teams operating across European and Japanese markets can work in their native language without any translation overhead.',
    quote: 'The numbers don\'t lie — but finding them used to take days. Now it takes a question.',
    youtubeId: 'jR8eIKLOHXY',
    posterImage: '/images/hv-03-poster.png',
    prevProject: { id: 'HV-02', name: 'Sales coaching platform' },
    nextProject: { id: 'HV-04', name: 'Inventory intelligence platform' },
  },
  'HV-04': {
    name: 'Inventory intelligence platform',
    descriptor: 'Seven modules that answer the most important question in manufacturing — can we take this order, and by when?',
    builtIn: '2025',
    stack: 'Python · FastAPI · React · PostgreSQL',
    domain: 'Manufacturing · Supply Chain',
    status: 'Production',
    brief: 'A mid-sized manufacturer managing inventory across hundreds of SKUs was running everything on spreadsheets and gut feel. Sales teams were making delivery promises without real visibility into stock levels, supplier lead times, or production capacity — resulting in two recurring failures: turning down orders when stock was actually available, and committing to dates they couldn\'t meet. Capital was tied up in the wrong items while the right ones ran out at critical moments.',
    build: 'We built an AI-powered inventory intelligence platform with seven modules covering every layer of the problem. A Promise Advisor checks live stock and calculates the earliest deliverable date for any order, complete with a confidence score and risk flags — giving sales teams an answer in seconds instead of chasing planners. A Safety Stock Optimizer uses statistical modelling to recommend the right buffer for every SKU based on demand variability and supplier lead times. A Demand Forecasting engine projects six months ahead and surfaces seasonal peaks automatically. Dead stock and overstock are surfaced in a single view so capital can be redeployed before it becomes a write-off. An AI assistant answers operational questions with specific, data-backed recommendations. The platform connects to any ERP and scales to multiple warehouse locations.',
    result: 'Sales teams now get accurate promise dates in seconds rather than waiting hours for a planner to check manually. Critical stock alerts surface before stockouts happen, ending the pattern of reactive firefighting. Dead stock and overstock are visible in one place for the first time, freeing capital that was previously invisible. The central question — can we take this order, and by when — now has a reliable, real-time answer across the entire organisation.',
    quote: 'The most important question in the business — can we take this order, and by when — now has an answer in seconds.',
    youtubeId: 'S1cFN4N8kPs',
    posterImage: '/images/hv-04-poster.png',
    prevProject: { id: 'HV-03', name: 'Financial competitive assistant' },
    nextProject: { id: 'HV-05', name: 'CAD parts intelligence platform' },
  },
  'HV-05': {
    name: 'CAD parts intelligence platform',
    descriptor: 'AI similarity detection that finds the reusable part before the engineer creates a duplicate',
    builtIn: '2025',
    stack: 'Python · FastAPI · React · Vector Search',
    domain: 'Manufacturing · Engineering',
    status: 'Production',
    brief: 'A manufacturing organisation managing multiple products and engineering programmes was drowning in a growing CAD parts database with no intelligent way to search it. Engineers creating new 3D CAD parts had no reliable way to know whether a suitable component already existed — so they created new ones. The result was a compounding problem: duplicate parts proliferating across the database, rising design effort, increasing BOM complexity, and a parts inventory growing faster than the products it served.',
    build: 'We built an AI-driven CAD parts intelligence platform that centralises 2D drawings, 3D CAD models, BOMs, and all associated metadata in a single searchable repository, organised by product and module. The core is an AI similarity detection engine that takes a new design requirement and searches the full historical parts library for matching or reusable components — surfacing candidates ranked by geometric and metadata similarity, complete with full part details and BOM context. Engineers receive intelligent recommendations before they begin creating a new part, shifting the workflow from creation-first to search-first. The platform continuously monitors and categorises parts as they are added, keeping the library structured and the similarity model current.',
    result: 'Engineering search time fell significantly as engineers moved from manual catalogue browsing to AI-guided lookup. Duplicate part creation dropped as reuse recommendations became part of the standard design workflow. Part inventory was rationalised — fewer unique parts, better standardisation across programmes. Design cycles accelerated because engineers spent less time on parts they had already built.',
    quote: 'Engineers were building parts that already existed. Now they find them first.',
    youtubeId: 'N5iovqs3BXk',
    posterImage: '/images/hv-05-poster.png',
    prevProject: { id: 'HV-04', name: 'Inventory intelligence platform' },
    nextProject: { id: 'HV-06', name: 'Coming soon' },
  },
  'HV-06': {
    name: 'Document intelligence',
    descriptor: 'Contract analysis and compliance extraction',
    builtIn: '2026',
    stack: 'LayoutLM · spaCy · FastAPI',
    domain: 'Legal',
    status: 'Pilot',
    brief: 'A corporate legal team was drowning in vendor contracts during M&A due diligence. They needed to extract key clauses—termination terms, liability caps, renewal conditions—from hundreds of PDFs, each structured differently.',
    build: 'We fine-tuned LayoutLM to understand document structure and trained a spaCy NER model for clause identification. FastAPI serves the extraction pipeline. The system outputs structured JSON summaries that feed into their diligence tracker.',
    result: 'Review time per contract dropped from 45 minutes to 8 minutes. Extraction accuracy for critical clauses is 94%. The team processed 800 contracts in their first diligence project using the system.',
    quote: '800 contracts reviewed in one diligence project. What used to take weeks took days.',
    prevProject: { id: 'HV-05', name: 'Conversational commerce' },
    nextProject: { id: 'HV-07', name: 'Predictive maintenance' },
  },
  'HV-07': {
    name: 'Predictive maintenance',
    descriptor: 'IoT sensor analysis for industrial equipment',
    builtIn: '2025',
    stack: 'LSTM · InfluxDB · Grafana',
    domain: 'Manufacturing',
    status: 'Production',
    brief: 'A steel manufacturer faced frequent unplanned downtime on critical furnaces. Reactive maintenance cost ₹15 lakh per incident in lost production, but preventive schedules wasted resources replacing healthy components.',
    build: 'We deployed vibration and temperature sensors on 40 furnaces, streaming data to InfluxDB. LSTM models trained on historical failure patterns predict component degradation 7–14 days in advance. Grafana dashboards alert maintenance teams when intervention is needed.',
    result: 'Unplanned downtime fell 68%. Maintenance costs dropped 22% by targeting only at-risk components. The system correctly predicted 23 of 25 failures in the first six months, with 2 false positives.',
    quote: '23 of 25 failures predicted before they happened. Maintenance became a scheduled event, not a crisis.',
    prevProject: { id: 'HV-06', name: 'Document intelligence' },
    nextProject: { id: 'HV-08', name: 'Personalization engine' },
  },
  'HV-08': {
    name: 'Personalization engine',
    descriptor: 'Content recommendation with reinforcement learning',
    builtIn: '2025',
    stack: 'TF-Agents · BigQuery · GCS',
    domain: 'Media',
    status: 'Production',
    brief: 'A news publisher struggled with stale homepage recommendations. Their collaborative filtering approach ignored real-time signals like breaking news and trending topics, leading to poor engagement.',
    build: 'We built a contextual bandit system using TF-Agents that balances exploration and exploitation. The model ingests user behavior, article metadata, and external signals from Google Trends. BigQuery stores interaction logs, and GCS hosts article embeddings.',
    result: 'Click-through rates improved 34%. Time-on-site increased 18%. The system successfully promoted breaking news within 10 minutes of publication. It now serves 12 million recommendations daily.',
    quote: '12 million recommendations served daily — and breaking news reaches readers within 10 minutes.',
    prevProject: { id: 'HV-07', name: 'Predictive maintenance' },
    nextProject: { id: 'HV-09', name: 'Energy optimization' },
  },
  'HV-09': {
    name: 'Energy optimization',
    descriptor: 'Smart grid load balancing and demand response',
    builtIn: '2026',
    stack: 'PyTorch · MQTT · TimescaleDB',
    domain: 'Energy',
    status: 'Pilot',
    brief: 'A regional utility faced peak demand charges that added 20% to their monthly energy costs. They needed to shift non-critical loads to off-peak hours without disrupting service to industrial customers.',
    build: 'We developed a reinforcement learning agent that schedules controllable loads based on predicted demand curves and real-time pricing signals. MQTT handles IoT device communication, and TimescaleDB stores time-series data for training and inference.',
    result: 'Peak demand charges dropped 16% in the first quarter. The system successfully managed 400+ controllable assets across the grid. Customer complaints remained flat despite active load shifting.',
    quote: 'Load shifted, costs down 16%, complaints flat. The grid got smarter without customers noticing.',
    prevProject: { id: 'HV-08', name: 'Personalization engine' },
    nextProject: { id: 'HV-10', name: 'Fraud detection system' },
  },
  'HV-10': {
    name: 'Fraud detection system',
    descriptor: 'Transaction monitoring with graph neural networks',
    builtIn: '2025',
    stack: 'PyG · Kafka · Cassandra',
    domain: 'Finance',
    status: 'Production',
    brief: 'A payment processor was losing ₹2 crore monthly to synthetic identity fraud. Rule-based systems caught obvious patterns but missed sophisticated fraud rings that rotated identities and merchants.',
    build: 'We modeled the transaction network as a graph, with users, merchants, and devices as nodes. PyTorch Geometric detects anomalous subgraphs in real-time. Kafka streams transactions, and Cassandra stores graph snapshots for model retraining.',
    result: 'Fraud detection precision improved from 54% to 82%, reducing false positives by half. Monthly fraud losses dropped 63%. The system now monitors 8 million transactions daily across 40,000 merchants.',
    quote: 'Monthly fraud losses dropped 63%. The network graph sees what rules never could.',
    prevProject: { id: 'HV-09', name: 'Energy optimization' },
    nextProject: { id: 'HV-11', name: 'Vision quality control' },
  },
  'HV-11': {
    name: 'Vision quality control',
    descriptor: 'Defect detection using computer vision pipelines',
    builtIn: '2025',
    stack: 'YOLO · OpenCV · RabbitMQ',
    domain: 'Manufacturing',
    status: 'Production',
    brief: 'A textile manufacturer needed to identify fabric defects—holes, stains, weaving errors—on fast-moving production lines. Manual inspection caught only 70% of defects, leading to costly rework downstream.',
    build: 'We deployed YOLO models at each inspection station, processing 30 frames per second. OpenCV handles image preprocessing and defect localization. RabbitMQ queues flagged frames for human review, reducing inspector workload by 85%.',
    result: 'Defect detection recall increased to 96%. Throughput improved 40% as inspectors focused only on flagged sections. The client reports zero customer returns for defects in the six months since deployment.',
    quote: 'Zero customer returns for defects in six months. Inspectors now only see what matters.',
    prevProject: { id: 'HV-10', name: 'Fraud detection system' },
    nextProject: { id: 'HV-12', name: 'Customer churn predictor' },
  },
  'HV-12': {
    name: 'Customer churn predictor',
    descriptor: 'Behavioral analysis and retention modeling',
    builtIn: '2025',
    stack: 'LightGBM · Airflow · Redshift',
    domain: 'Telecom',
    status: 'Production',
    brief: 'A telecom operator was losing 5% of subscribers monthly. Their retention team operated reactively, offering discounts only after cancellation requests, which was too late to save most accounts.',
    build: 'We built a churn prediction model using LightGBM, trained on usage patterns, support interactions, and payment history. Airflow schedules daily scoring runs, and Redshift stores predictions. High-risk users receive proactive outreach 14 days before predicted churn.',
    result: 'Retention improved 28% among targeted users. The model achieves 0.87 AUC, identifying 76% of churners in the top decile. Marketing spend efficiency improved 3x by focusing on high-risk accounts.',
    quote: 'Retention outreach 14 days before churn. By the time a customer considers leaving, we have already called.',
    prevProject: { id: 'HV-11', name: 'Vision quality control' },
    nextProject: { id: 'HV-01', name: 'Supplier intelligence platform' },
  },
};

const metaCells = [
  { label: 'Built in', key: 'builtIn' },
  { label: 'Stack',    key: 'stack'   },
  { label: 'Domain',   key: 'domain'  },
  { label: 'Status',   key: 'status'  },
] as const;

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('brief');

  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
            Project not found
          </h2>
          <Link to="/" className="text-sm hover:text-[#B84A28]" style={{ fontFamily: 'var(--font-mono)' }}>
            ← Back to index
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-12">
      {/* Breadcrumb */}
      <motion.div
        className="mb-8"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.05em', color: '#5C544A', textTransform: 'uppercase' }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: ease.out }}
      >
        {id} / 12 · {project.domain}
      </motion.div>

      {/* Hero — YouTube embed if available, else image */}
      <motion.div
        className="relative mb-12 overflow-hidden rounded-lg bg-[#1C1A17]"
        style={{ aspectRatio: '16/9' }}
        variants={curtainReveal}
        initial="hidden"
        animate="visible"
      >
        {project.youtubeId && isPlaying ? (
          /* YouTube iframe — loads when play is clicked */
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1&color=white`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          /* Poster image */
          <>
            <img
              src={project.posterImage || projectImages[id]}
              alt={project.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,26,23,0.2)] via-transparent to-[rgba(28,26,23,0.5)]" />

            {/* Play button — only if YouTube ID is set */}
            {project.youtubeId && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group/btn flex h-20 w-20 items-center justify-center rounded-full border-2 border-[rgba(244,239,229,0.6)] bg-[rgba(28,26,23,0.4)] backdrop-blur-sm transition-all duration-300 hover:border-[#F4EFE5] hover:bg-[rgba(28,26,23,0.6)] hover:scale-105"
                >
                  <Play className="h-8 w-8 fill-[#F4EFE5] text-[#F4EFE5]" style={{ marginLeft: '4px' }} />
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* Title */}
      <AnimatedHeadline
        as="h1"
        delay={0.15}
        style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(56px, 8vw, 140px)', lineHeight: '1.05', letterSpacing: '-0.025em', color: '#1C1A17' }}
        className="mb-4"
      >
        {project.name}
      </AnimatedHeadline>

      {/* Descriptor */}
      <motion.p
        className="mb-12 max-w-3xl"
        style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '24px', lineHeight: '1.4', color: '#5C544A' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: ease.out }}
      >
        {project.descriptor}
      </motion.p>

      {/* Metadata strip */}
      <motion.div
        className="mb-16 grid grid-cols-4 gap-px border-y border-[rgba(28,26,23,0.1)] bg-[rgba(28,26,23,0.1)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55, ease: ease.out }}
      >
        {metaCells.map(({ label, key }, i) => (
          <motion.div
            key={key}
            className="bg-[#F4EFE5] px-4 py-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: ease.out }}
          >
            <div className="mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.05em', color: '#5C544A', textTransform: 'uppercase' }}>
              {label}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#1C1A17' }}>
              {project[key]}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-12 gap-12">
        {/* Article content */}
        <div className="col-span-8 space-y-12">
          <motion.section
            id="brief"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.75, ease: ease.out }}
          >
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
              The brief
            </h2>
            <div className="space-y-4" style={{ fontSize: '18px', lineHeight: '1.7', color: '#1C1A17' }}>
              <p
                className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:font-normal first-letter:leading-[0.85] first-letter:text-[#B84A28]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {project.brief}
              </p>
            </div>
          </motion.section>

          <motion.section
            id="build"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.85, ease: ease.out }}
          >
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
              The build
            </h2>
            <div className="space-y-4" style={{ fontSize: '18px', lineHeight: '1.7', color: '#1C1A17' }}>
              <p>{project.build}</p>
            </div>
          </motion.section>

          {/* Pull quote */}
          <motion.blockquote
            className="my-8 border-l-2 border-[#B84A28] py-2 pl-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: ease.out }}
          >
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '22px', lineHeight: '1.5', color: '#1C1A17' }}>
              {project.quote}
            </p>
          </motion.blockquote>

          <motion.section
            id="result"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.0, ease: ease.out }}
          >
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em', color: '#5C544A', textTransform: 'uppercase' }}>
              The result
            </h2>
            <div className="space-y-4" style={{ fontSize: '18px', lineHeight: '1.7', color: '#1C1A17' }}>
              <p>{project.result}</p>
            </div>
          </motion.section>

        </div>

        {/* Sticky sidebar */}
        <motion.div
          className="col-span-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.8, ease: ease.out }}
        >
          <div className="sticky top-24 space-y-8">
            <nav>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.05em', color: '#5C544A', textTransform: 'uppercase' }}>
                Contents
              </h3>
              <ul className="space-y-2">
                {['brief', 'build', 'result'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={() => setActiveSection(section)}
                      className={`block border-l-2 py-1 pl-3 transition-colors ${
                        activeSection === section
                          ? 'border-[#B84A28] text-[#B84A28]'
                          : 'border-transparent text-[#5C544A] hover:text-[#1C1A17]'
                      }`}
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}
                    >
                      The {section}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="mailto:info@headventor.in"
              className="btn-blend block rounded-lg bg-[#1C1A17] px-6 py-4 text-center"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.02em', color: '#F4EFE5' }}
            >
              Talk to us →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Prev / Next */}
      <motion.div
        className="mt-24 grid grid-cols-2 gap-8 border-t border-[rgba(28,26,23,0.1)] pt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: ease.out }}
      >
        <Link
          to={`/project/${project.prevProject.id}`}
          className="group flex items-center gap-4 transition-colors hover:text-[#B84A28]"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
          <div>
            <div className="mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.05em', color: '#5C544A', textTransform: 'uppercase' }}>
              Previous
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: '#1C1A17' }}>
              {project.prevProject.name}
            </div>
          </div>
        </Link>

        <Link
          to={`/project/${project.nextProject.id}`}
          className="group flex items-center justify-end gap-4 text-right transition-colors hover:text-[#B84A28]"
        >
          <div>
            <div className="mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.05em', color: '#5C544A', textTransform: 'uppercase' }}>
              Next
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: '#1C1A17' }}>
              {project.nextProject.name}
            </div>
          </div>
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}
