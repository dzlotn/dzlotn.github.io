// ring order, clockwise from top
const SKILLS = [
  { id: 'sec',      label: 'Security & Crypto',         group: 'tech' },
  { id: 'first',    label: 'First-Principles Thinking', group: 'transferable' },
  { id: 'fp',       label: 'Functional Programming',    group: 'tech' },
  { id: 'finance',  label: 'Finance',                   group: 'interest' },
  { id: 'learn',    label: 'Self-Directed Learning',    group: 'transferable' },
  { id: 'physics',  label: 'Physics & Simulation',      group: 'interest' },
  { id: 'gpu',      label: 'GPU & Systems',             group: 'tech' },
  { id: 'robotics', label: 'Robotics',                  group: 'interest' },
  { id: 'pressure', label: 'Debugging Under Pressure',  group: 'transferable' },
  { id: 'ml',       label: 'Machine Learning',          group: 'tech' },
  { id: 'problem',  label: 'Problem Finding',           group: 'transferable' },
  { id: 'data',     label: 'Data & Forecasting',        group: 'tech' },
  { id: 'lead',     label: 'Leadership',                group: 'transferable' },
  { id: 'client',   label: 'Client Communication',      group: 'transferable' },
  { id: 'team',     label: 'Teamwork',                  group: 'transferable' },
  { id: 'web',      label: 'Full-Stack Web',            group: 'tech' },
  { id: 'hw',       label: 'Hardware & Signals',        group: 'tech' },
  { id: 'health',   label: 'Health Tech',               group: 'interest' },
];

// headings for the popup, in display order
const GROUPS = [
  { id: 'tech',         label: 'Technical skills' },
  { id: 'transferable', label: 'Transferable skills' },
  { id: 'interest',     label: 'Interests' },
];

// inner ring order, clockwise from top (each near its skills)
const PROJECTS = [
  {
    id: 'fortress',
    title: 'Fortress',
    image: 'images/projects/Fortress.png',
    blurb: 'I built a tool that generates, analyzes, encrypts, and stores passwords. I implemented AES-256 encryption from scratch and designed my own password-strength scoring.',
    skills: ['sec', 'web', 'first'],
  },
  {
    id: 'optifolio',
    title: 'OptiFolio',
    image: 'images/projects/optiblack.png',
    blurb: 'I built a portfolio optimizer from scratch in OCaml. It turns a risk questionnaire into a quantitative investor profile, then scores real stocks against that profile.',
    skills: ['fp', 'finance', 'data', 'first', 'learn'],
  },
  {
    id: 'meander',
    title: 'Meander',
    image: 'images/projects/meander.jpg',
    blurb: 'I built a real-time fluid simulator that solves the Navier-Stokes equations on the GPU every frame. Users paint obstacles and terrain with the mouse and watch water carve channels through sand.',
    skills: ['gpu', 'physics', 'learn'],
  },
  {
    id: 'causticguard',
    title: 'CausticGuard',
    image: 'images/projects/caustic.png',
    blurb: 'I built CUDA-accelerated caustics suppression for CUAUV\'s underwater vision pipeline after our team\'s YOLO model failed outdoors at competition.',
    skills: ['gpu', 'ml', 'robotics', 'pressure', 'team'],
  },
  {
    id: 'cato',
    title: 'Cato',
    image: 'images/projects/catowhite.png',
    blurb: 'I built a two-stage semantic search engine over 2+ years of support tickets and 1,000+ wiki pages. It resolves about half of developers\' weekly questions.',
    skills: ['ml', 'data', 'problem'],
  },
  {
    id: 'tariff',
    title: 'TariffInsight',
    image: 'images/projects/tariffpic2.png',
    blurb: 'For the client Finger Lakes Goods, I built an ML model that forecasts how far a tariff will pull sales down and how quickly they recover. I also built a dashboard for simulating future tariffs.',
    skills: ['data', 'web', 'client', 'lead', 'finance', 'team'],
  },
  {
    id: 'nexus',
    title: 'NexusRTS',
    image: 'images/projects/ProjectNexus.png',
    blurb: 'For a freight client, I built truck-aware route optimization that scores routes on live weather, forecasted traffic, and fuel access, then estimates each route\'s real cost.',
    skills: ['web', 'data', 'client', 'team'],
  },
  {
    id: 'tremortrackr',
    title: 'TremorTrackr',
    image: 'images/projects/tremortrackr.png',
    blurb: 'I built a wrist-worn motion and muscle sensor that continuously measures Parkinson\'s tremor. I handled every layer, from the raw hardware to the signal processing to the web app.',
    skills: ['hw', 'data', 'web', 'health', 'team'],
  },
];
