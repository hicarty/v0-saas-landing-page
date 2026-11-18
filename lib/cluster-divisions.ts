export type DivisionService = {
  tag: string
  title: string
  body: string
}

export type ClusterDivision = {
  slug: string
  name: string
  shortName: string
  description: string
  externalUrl?: string
  color: string
  central?: boolean
  servicesHeading?: string
  services?: DivisionService[]
  process?: { heading: string; steps: { title: string; body: string }[] }
  prices?: { amount: string; unit: string; label: string }[]
}

export const clusterDivisions: ClusterDivision[] = [
  {
    slug: "community",
    name: "Community",
    shortName: "Community",
    description: "The central influence: community connects and coordinates the other six divisions through kingdom Cluster.",
    externalUrl: "https://cluster.church",
    color: "community",
    central: true,
  },
  {
    slug: "learning-development",
    name: "Learning & Development",
    shortName: "Learning & Development",
    description: "Four practical pathways built around learning by doing, with short lessons and hands-on workplace exercises.",
    externalUrl: "https://vle.havencarty.workers.dev",
    color: "learning",
    servicesHeading: "Four learning pathways",
    services: [
      { tag: "Pathway", title: "Outbound Sales", body: "Build a list worth contacting, then write the message that earns a reply." },
      { tag: "Pathway", title: "Celtic Tiger Trading", body: "Study a boom that ended badly, then build rules that survive the next one." },
      { tag: "Pathway", title: "Social Media Affiliate Marketing", body: "Learn how affiliate marketing works on social platforms by running the steps yourself." },
      { tag: "Pathway", title: "Design for Manufacturing", body: "Take a design from idea to something that can be made, one decision at a time." },
    ],
  },
  {
    slug: "experiences-pr",
    name: "Experiences & PR",
    shortName: "Experiences & PR",
    description: "Event coordination for brand experience and innovation in UX and PR: bringing work to its audience and turning events into leads.",
    externalUrl: "https://claude.ai/artifact/4n83Qy4GhM9B2BMfHqKqwk",
    color: "experiences",
    servicesHeading: "What we coordinate",
    services: [
      { tag: "Signature", title: "Brand Experience Events", body: "Immersive events that connect a brand with the right audience, designed to generate leads and new business." },
      { tag: "PR", title: "PR & Innovation", body: "Public relations strategy that puts a brand at the front of its industry and gets it noticed." },
      { tag: "Facilitated", title: "UX Workshops", body: "Hands-on workshops that align teams, sharpen product vision, and put users at the centre." },
      { tag: "Consultancy", title: "CPO Product & People Consultancy", body: "Chief Product Officer-level consultancy for product strategy and the people who deliver it." },
      { tag: "Production", title: "Media Production Teams", body: "Media crews, event managers, and content creators coordinated across every channel." },
      { tag: "Sponsorship", title: "Sponsorship Packages", body: "Event sponsorship packages that connect sponsors, creators, and audiences." },
    ],
  },
  {
    slug: "research-development",
    name: "Research & Development",
    shortName: "Research & Development",
    description: "Assembly and QA of engineering samples for hardware founders and R&D teams, with a focus on water sustainability and transparent £280/day pricing.",
    color: "research",
    servicesHeading: "What we build, assemble, and verify",
    services: [
      { tag: "Assembly", title: "PCB & Electronics Assembly", body: "Through-hole and SMT assembly of prototype PCBs, from single units to small batches, with BOM management." },
      { tag: "QA", title: "Quality Assurance & Testing", body: "Functional testing, visual inspection, documented QA reports, defect logging, and failure analysis." },
      { tag: "DFM", title: "DFM & Enclosure Consulting", body: "Design-for-manufacture review of housings and enclosures: tolerances, sealing, and assembly sequence." },
      { tag: "Water", title: "Water & Environmental Sensors", body: "Assembly and testing of water quality, flow, and environmental monitoring prototypes." },
      { tag: "Firmware", title: "Firmware Flashing & Bring-up", body: "First firmware flash, hardware bring-up, and first-boot validation for embedded boards." },
      { tag: "Docs", title: "Sample Reports & Documentation", body: "Build records, test reports, and handover packs for every sample batch." },
    ],
    process: {
      heading: "From brief to signed-off sample",
      steps: [
        { title: "Brief & scope", body: "Walk through the build, BOM, and definition of done; agree the days before starting." },
        { title: "Assembly", body: "Assemble to specification and flag component or design issues as they arise." },
        { title: "Test & QA", body: "Run functional testing and inspection; document failures and root causes." },
        { title: "Report & sign-off", body: "Deliver a build record and test report, ready for the next stage." },
      ],
    },
    prices: [{ amount: "£280", unit: "per day", label: "Engineering sample work, scoped up front." }],
  },
  {
    slug: "consultancy",
    name: "Consultancy · AgilePM",
    shortName: "Consultancy",
    description: "Agile project management, Scrum facilitation, and product delivery for startups and SMEs, from MVP to market-ready product.",
    externalUrl: "https://havencarty.wordpress.com",
    color: "consultancy",
    servicesHeading: "Services tailored for startup success",
    services: [
      { tag: "Accounts", title: "Account Management & New Business", body: "Pipeline development and account management that builds lasting client relationships." },
      { tag: "PM", title: "Product Management", body: "Manage the product lifecycle from ideation to launch, so it meets what the market needs." },
      { tag: "Scrum", title: "Scrum Master Services", body: "Facilitate agile ceremonies, remove blockers, and build a collaborative team culture." },
      { tag: "Technical", title: "Troubleshooting & Bug Fixing", body: "Find root causes in the codebase and make robust fixes rather than workarounds." },
      { tag: "Startup", title: "MVP & PoC Delivery", body: "Rapid prototypes and minimum viable products that help ideas reach the market faster." },
      { tag: "Growth", title: "Business Development", body: "Growth opportunities, strategic partnerships, and market expansion." },
    ],
    process: {
      heading: "From idea to market",
      steps: [
        { title: "Discovery", body: "Align the vision, market, and goals with stakeholders before anything is built." },
        { title: "Strategy", body: "Set a clear roadmap from concept to launch, with sprints planned and resources allocated." },
        { title: "Execution", body: "Deliver continuously in sprints, removing blockers as work progresses." },
        { title: "Launch", body: "Bring the product to market and use feedback loops to keep improving it." },
      ],
    },
  },
  {
    slug: "new-business-mvp",
    name: "New Business & MVP",
    shortName: "New Business & MVP",
    description: "A clear budget and brief connect founders to the right people, then move ideas into focused prototypes, production-ready opportunities, and go-to-market plans.",
    externalUrl: "https://hicarty.github.io/havencarty",
    color: "business",
    servicesHeading: "Connect, validate, and build",
    services: [
      { tag: "NBD", title: "New Business Development", body: "Qualify introductions and opportunities before handing them to the right division." },
      { tag: "ACC", title: "Account Management", body: "Stay close after an introduction and bring in the right division as the account changes." },
      { tag: "HUB", title: "Incubator Hubs", body: "Technology incubator hubs where startups in each cohort work together." },
      { tag: "ACL", title: "Accelerator Programmes", body: "Structured programmes that take a founder from first idea to first customers." },
      { tag: "EVT", title: "Networking Events", body: "Build Together socials, Pin Nights, and Integr8 Breakfasts." },
      { tag: "REG", title: "Regional Growth", body: "Connect businesses, investment, and opportunity between cities." },
      { tag: "Web", title: "Landing Pages", body: "A single-page site for a company, built quickly and priced up front." },
      { tag: "Pitch", title: "Pitch Deck Packages", body: "A pitch deck built from the business plan, with a matching landing page." },
      { tag: "Code", title: "Vibe Code & Prototyping", body: "Working prototypes fast, so ideas can be tested with real people." },
      { tag: "Ops", title: "DevOps & Version Control", body: "Set up pipelines and version control so teams can ship safely." },
      { tag: "Fix", title: "Troubleshooting & Bug Fixing", body: "Find what is breaking an MVP and fix it properly." },
      { tag: "GTM", title: "Go-to-Market Consultancy", body: "Take a proof of concept toward launch with practical go-to-market advice." },
    ],
    process: {
      heading: "How a business moves through the cluster",
      steps: [
        { title: "Meet", body: "A founder meets the cluster through its events and hubs." },
        { title: "Qualify", body: "Clarify the opportunity before handing it to the division that can help." },
        { title: "Train and organise", body: "Learning & Development builds capability while AgilePM establishes a delivery rhythm." },
        { title: "Build and show", body: "MVP and R&D build the product; Experiences & PR shares the work with its audience." },
      ],
    },
    prices: [
      { amount: "£50", unit: "fixed", label: "Single-page site" },
      { amount: "£400", unit: "fixed", label: "Landing page and pitch deck from your business plan" },
    ],
  },
  {
    slug: "product-delivery",
    name: "Product Delivery",
    shortName: "Product Delivery",
    description: "From bedroom founder to coordinated industry rollout, connecting the work across the cluster as products move from early proof to real-world delivery.",
    externalUrl: "https://havencarty.havencarty.workers.dev",
    color: "product",
  },
]
