// ─── Pricing Plans ───────────────────────────────────────────────────────────
export const pricingPlans = [
  {
    emoji: "🌱",
    name: "Naeem Lite",
    price: "Free",
    description: "Occasional replies",
    features: [
      "Basic text responses",
      "Standard reply time (whenever)",
      "Limited emotional support",
      "May or may not read your message",
    ],
    highlighted: false,
  },
  {
    emoji: "💗",
    name: "Naeem Plus",
    price: "৳0",
    description: "Unlimited talking*",
    features: [
      "Unlimited conversations",
      "Faster reply time (maybe)",
      "Extended emotional bandwidth",
      "Joke generation v2.0",
    ],
    highlighted: false,
  },
  {
    emoji: "👑",
    name: "Naeem Premium",
    price: "৳0",
    description: "Priority attention",
    features: [
      "Priority message queue",
      "Advanced listening mode",
      "Custom joke calibration",
      "Emergency snack delivery",
    ],
    highlighted: true,
  },
  {
    emoji: "💀",
    name: "Naeem Enterprise",
    price: "Classified",
    description: "Full Naeem infrastructure",
    features: [
      "Dedicated Naeem instance",
      "24/7 availability (in theory)",
      "Full emotional API access",
      "On-call Naeem deployment",
    ],
    highlighted: false,
  },
] as const;

export const girlPlanPerks = [
  "Unlimited talking",
  "Priority replies",
  "Emergency emotional support",
  "Snack-sharing protocol",
  "Bad joke tolerance required",
  "Full Naeem access",
];

// ─── Features ────────────────────────────────────────────────────────────────
export const features = [
  {
    icon: "Brain" as const,
    title: "Advanced Listening Technology",
    description:
      "Naeem can listen for up to 3 hours straight. Results may vary after snacks.",
  },
  {
    icon: "Laugh" as const,
    title: "AI-Powered Humor",
    description:
      "Jokes generated in real-time. Quality not guaranteed. Refunds unavailable.",
  },
  {
    icon: "Soup" as const,
    title: "Emergency Food Protocol",
    description:
      "When all else fails, Naeem will suggest food. Works 94% of the time.",
  },
  {
    icon: "Wifi" as const,
    title: "99.9% Availability",
    description:
      "Naeem is almost always online. Downtime caused by sleep, food, or existential dread.",
  },
  {
    icon: "Heart" as const,
    title: "Human Support",
    description:
      "Unlike other services, NaaS is powered by an actual human. Terrifying, we know.",
  },
] as const;

// ─── Server Status Bars ──────────────────────────────────────────────────────
export const serverStats = [
  { label: "Brain", value: 87, color: "bg-baby-blue" },
  { label: "Humor", value: 94, color: "bg-lavender" },
  { label: "Patience", value: 73, color: "bg-pink-primary" },
  { label: "Availability", value: 61, color: "bg-baby-blue-dark" },
  { label: "Handsomeness", value: -1, color: "bg-pink-light" },
  { label: "Reply Speed", value: -2, color: "bg-lavender-dark" },
] as const;

// ─── Personality Dashboard ───────────────────────────────────────────────────
export const personalityBars = [
  { label: "Mood", value: 82, color: "from-pink-primary to-lavender" },
  { label: "Social Battery", value: 61, color: "from-baby-blue to-lavender" },
  { label: "Need for Food", value: 94, color: "from-pink-dark to-pink-primary" },
  {
    label: "Willingness to Go Outside",
    value: 29,
    color: "from-baby-blue-dark to-baby-blue",
  },
  {
    label: "Ability to Say No to Snacks",
    value: 3,
    color: "from-pink-light to-pink-primary",
  },
  { label: "Overthinking", value: 100, color: "from-lavender-dark to-lavender" },
] as const;

// ─── Testimonials ────────────────────────────────────────────────────────────
export const testimonials = [
  {
    stars: 5,
    quote: "I requested Naeem and he actually showed up.",
    author: "Sarah",
    badge: "Verified Girl™",
    response: null,
  },
  {
    stars: 5,
    quote: "Much better than calling customer support.",
    author: "Anonymous",
    badge: null,
    response: null,
  },
  {
    stars: 5,
    quote: "The API docs are terrible but the product is cute.",
    author: "A concerned developer",
    badge: null,
    response: null,
  },
  {
    stars: 4,
    quote: "He took 3 hours to reply.",
    author: "Maria",
    badge: null,
    response: "I WAS BUSY.",
  },
] as const;

// ─── Changelog ───────────────────────────────────────────────────────────────
export const changelog = {
  version: "v2.7.4",
  added: [
    "Improved joke generation",
    "Better listening capabilities",
    "New snack detection algorithm",
  ],
  fixed: [
    "Random disappearing",
    "Excessive overthinking",
    '"I\'ll do it later" bug',
  ],
  knownIssues: [
    "Sometimes hungry",
    "Sometimes sleepy",
    'Occasionally says "bro"',
    "Still cannot find things directly in front of him",
  ],
} as const;

// ─── Quiz ────────────────────────────────────────────────────────────────────
export const quizQuestions = [
  {
    question: 'Someone says "I\'m fine." What do you do?',
    options: [
      "Believe them immediately",
      "Ask again, gently",
      "Send them a meme",
      "Launch a full emotional investigation",
    ],
  },
  {
    question: "Pick a snack:",
    options: ["🍟 Fries", "🍕 Pizza", "🍜 Noodles", "🍰 Cake"],
  },
  {
    question: "How often do you overthink?",
    options: [
      "Never",
      "Sometimes",
      "Frequently",
      "I have already overthought this question",
    ],
  },
] as const;

// ─── Status Page ─────────────────────────────────────────────────────────────
export const statusServices = [
  { service: "Listening", status: "operational" as const, icon: "Ear" },
  { service: "Talking", status: "operational" as const, icon: "MessageCircle" },
  { service: "Humor", status: "operational" as const, icon: "Laugh" },
  { service: "Emotional Support", status: "operational" as const, icon: "Heart" },
  { service: "Food Acquisition", status: "degraded" as const, icon: "UtensilsCrossed" },
  { service: "Reply Speed", status: "investigating" as const, icon: "Clock" },
  { service: "Common Sense", status: "outage" as const, icon: "BrainCircuit" },
] as const;

// ─── Deploy Form ─────────────────────────────────────────────────────────────
export const deployRequirements = [
  "Someone to listen",
  "Someone to make me laugh",
  "Someone to accompany me",
  "Someone to explain something",
  'Someone to say "you\'re overthinking"',
  "Emergency moral support",
  "I don't know. I just want Naeem.",
] as const;

export const urgencyLevels = [
  { label: "Just chilling", emoji: "😌" },
  { label: "Kinda important", emoji: "🤔" },
  { label: "IMPORTANT", emoji: "😤" },
  { label: "NAEEM I NEED YOU", emoji: "😭" },
] as const;

export const deploymentSteps = [
  "Deployment initiated...",
  "Finding Naeem...",
  "Checking Naeem's battery...",
  "Checking Naeem's food levels...",
  "Verifying emotional availability...",
  "✅ Naeem has been successfully deployed.",
] as const;

// ─── Tech Stack ──────────────────────────────────────────────────────────────
export const techStack = [
  { key: "Frontend", value: "React + CSS + questionable decisions" },
  { key: "Backend", value: "Naeem" },
  { key: "Database", value: "Naeem's memory" },
  { key: "Authentication", value: '"Are you a girl?"' },
  { key: "Hosting", value: "Probably someone's laptop" },
  { key: "AI", value: "Naeem pretending to understand" },
  { key: "Infrastructure", value: "✨ vibes ✨" },
] as const;

// ─── Uptime ──────────────────────────────────────────────────────────────────
export const downtimeCauses = [
  "Sleeping",
  "Eating",
  "Being outside",
  '"I\'ll reply later"',
  "Existential crisis",
  "Phone at 3%",
] as const;

// ─── SaaS Comparison ─────────────────────────────────────────────────────────
export const traditionalSaas = [
  { emoji: "☁️", label: "Cloud" },
  { emoji: "🔑", label: "Password" },
  { emoji: "💳", label: "Subscription" },
  { emoji: "📊", label: "Analytics" },
  { emoji: "🤖", label: "Automation" },
] as const;

export const naasFeatures = [
  { emoji: "🧑", label: "Naeem" },
  { emoji: "💬", label: "Talking" },
  { emoji: "😂", label: "Jokes" },
  { emoji: "👂", label: "Listening" },
  { emoji: "🍟", label: "Snacks" },
  { emoji: "🤷", label: "Questionable decisions" },
] as const;

// ─── Meet the Infrastructure ─────────────────────────────────────────────────
export const naeemProfile = {
  name: "Naeem",
  title: "Chief Naeem Officer",
  department: "Everything",
  experience: "Several years of being Naeem",
  location: "Somewhere on Earth",
  availability: "Ask nicely",
  status: "Probably hungry",
} as const;

// ─── Nav Links ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Product", href: "#features" },
  { label: "API", href: "#api" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Status", href: "#status" },
  { label: "Support", href: "#deploy" },
] as const;

// ─── Terms of Service ────────────────────────────────────────────────────────
export const termsOfService = [
  "Naeem reserves the right to respond at his own pace. 'Seen' does not constitute a legally binding response.",
  "Snack offerings are mandatory for premium-tier deployments. Failure to provide snacks may result in degraded service quality.",
  "Reply times are measured in 'Naeem Standard Time' (NST), which bears no relation to any recognized time zone.",
  "No refunds. The service is free. You literally paid nothing. What would we even refund?",
  "Emotional support sessions may include unsolicited advice. NaaS accepts no liability for said advice.",
  "Please stop treating him like AWS. He is a person. Mostly.",
  "The 'Do Not Disturb' mode is not a feature — it's Naeem sleeping. Respect it.",
  "Any attempt to reverse-engineer Naeem will result in confusion for all parties involved.",
] as const;
