export const pricingPlans = [
  { icon: "Leaf", name: "Naeem Lite", price: "Free", description: "For low-stakes updates and the occasional check-in.", features: ["Basic replies", "Standard listening", "Meme-compatible", "No setup required"], highlighted: false },
  { icon: "MessageCircleMore", name: "Naeem Plus", price: "৳0", description: "For conversations that refuse to stay short.", features: ["Unlimited talking", "Faster replies, maybe", "Long-form rants", "Joke engine access"], highlighted: false },
  { icon: "Crown", name: "Naeem Premium", price: "৳0", description: "Priority access when the group chat is not enough.", features: ["Priority queue", "Advanced listening", "Custom joke tuning", "Snack escalation"], highlighted: true },
  { icon: "Building2", name: "Enterprise", price: "Classified", description: "The complete human infrastructure package.", features: ["Dedicated Naeem", "On-call deployment", "Full emotional API", "Theoretical 24/7 access"], highlighted: false },
] as const;

export const girlPlanPerks = ["Unlimited talking", "Priority replies", "Emergency moral support", "Snack-sharing protocol", "Full Naeem access", "No credit card, ever"] as const;

export const features = [
  { icon: "Ear", title: "Listens past the headline", description: "Rants, voice notes, and the context behind the context are all supported." },
  { icon: "Laugh", title: "Humor on demand", description: "Original jokes produced in real time. Quality remains delightfully unregulated." },
  { icon: "Utensils", title: "Snack-aware support", description: "When everything feels impossible, the food protocol starts automatically." },
  { icon: "Radio", title: "Mostly available", description: "Online often enough to be useful, human enough to occasionally be asleep." },
  { icon: "HeartHandshake", title: "Actually human", description: "No bot loops, no hold music, and no ticket number between you and support." },
] as const;

export const serverStats = [
  { label: "Listening", value: 96, color: "bg-violet" },
  { label: "Humor", value: 91, color: "bg-signal" },
  { label: "Patience", value: 78, color: "bg-mint" },
  { label: "Social battery", value: 63, color: "bg-amber" },
] as const;

export const personalityBars = [
  { label: "Mood", value: 82, color: "bg-violet" },
  { label: "Social battery", value: 61, color: "bg-mint" },
  { label: "Need for food", value: 94, color: "bg-signal" },
  { label: "Willingness to go outside", value: 29, color: "bg-amber" },
  { label: "Ability to say no to snacks", value: 3, color: "bg-violet" },
  { label: "Overthinking", value: 100, color: "bg-signal" },
] as const;

export const testimonials = [
  { stars: 5, quote: "I requested Naeem and he actually showed up.", author: "Sarah", badge: "Verified user", response: null },
  { stars: 5, quote: "Much better than calling customer support.", author: "Anonymous", badge: null, response: null },
  { stars: 5, quote: "The API docs are terrible, but the product is cute.", author: "A concerned developer", badge: null, response: null },
  { stars: 4, quote: "He took three hours to reply.", author: "Maria", badge: null, response: "I was busy." },
] as const;

export const changelog = {
  version: "v2.7.4",
  added: ["Improved joke generation", "Better listening capabilities", "New snack detection algorithm"],
  fixed: ["Random disappearing", "Excessive overthinking", 'The "I will do it later" bug'],
  knownIssues: ["Sometimes hungry", "Sometimes sleepy", 'Occasionally says "bro"', "Still cannot find things directly in front of him"],
} as const;

export const quizQuestions = [
  { question: 'Someone says "I am fine." What do you do?', options: ["Believe them immediately", "Ask again, gently", "Send them a meme", "Launch a full emotional investigation"] },
  { question: "Pick a snack.", options: ["Fries", "Pizza", "Noodles", "Cake"] },
  { question: "How often do you overthink?", options: ["Never", "Sometimes", "Frequently", "I already overthought this question"] },
] as const;

export const statusServices = [
  { service: "Listening", status: "operational" as const, icon: "Ear" },
  { service: "Talking", status: "operational" as const, icon: "MessageCircle" },
  { service: "Humor", status: "operational" as const, icon: "Laugh" },
  { service: "Emotional support", status: "operational" as const, icon: "HeartHandshake" },
  { service: "Food acquisition", status: "degraded" as const, icon: "UtensilsCrossed" },
  { service: "Reply speed", status: "investigating" as const, icon: "Clock3" },
  { service: "Common sense", status: "outage" as const, icon: "BrainCircuit" },
] as const;

export const deployRequirements = ["Someone to listen", "Someone to make me laugh", "Someone to accompany me", "Someone to explain something", 'Someone to say "you are overthinking"', "Emergency moral support", "I do not know. I just want Naeem."] as const;

export const urgencyLevels = [
  { label: "Just chilling", icon: "Coffee" },
  { label: "Kind of important", icon: "MessageCircleQuestion" },
  { label: "Important", icon: "BellRing" },
  { label: "Naeem, I need you", icon: "Siren" },
] as const;

export const deploymentSteps = ["Deployment initiated", "Locating Naeem", "Checking battery level", "Checking food level", "Verifying emotional availability", "Naeem has been successfully deployed"] as const;

export const techStack = [
  { key: "Frontend", value: "React, CSS, and questionable decisions" },
  { key: "Backend", value: "Naeem" },
  { key: "Database", value: "Naeem's memory" },
  { key: "Authentication", value: 'The "are you a girl?" protocol' },
  { key: "Hosting", value: "Probably somebody's laptop" },
  { key: "AI", value: "Naeem pretending to understand" },
  { key: "Infrastructure", value: "Vibes, snacks, and one phone charger" },
] as const;

export const downtimeCauses = ["Sleeping", "Eating", "Being outside", 'Saying "I will reply later"', "Existential crisis", "Phone at three percent"] as const;

export const traditionalSaas = [
  { icon: "Cloud", label: "Cloud account" },
  { icon: "KeyRound", label: "Another password" },
  { icon: "CreditCard", label: "Monthly subscription" },
  { icon: "ChartNoAxesCombined", label: "Analytics dashboard" },
  { icon: "Bot", label: "Automated support" },
] as const;

export const naasFeatures = [
  { icon: "UserRound", label: "One Naeem" },
  { icon: "MessageCircle", label: "Real conversation" },
  { icon: "Laugh", label: "Dubious jokes" },
  { icon: "Ear", label: "Patient listening" },
  { icon: "Sandwich", label: "Snack strategy" },
  { icon: "Shuffle", label: "Questionable decisions" },
] as const;

export const naeemProfile = [
  { label: "Role", value: "Chief Naeem Officer", icon: "BriefcaseBusiness" },
  { label: "Department", value: "Everything", icon: "Layers3" },
  { label: "Experience", value: "Several years of being Naeem", icon: "BadgeCheck" },
  { label: "Location", value: "Somewhere on Earth", icon: "MapPin" },
  { label: "Availability", value: "Ask nicely", icon: "Clock3" },
  { label: "Status", value: "Probably hungry", icon: "Activity" },
] as const;

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "API", href: "#api" },
  { label: "Plans", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Status", href: "#status" },
] as const;

export const termsOfService = [
  "Naeem reserves the right to respond at his own pace. Seen does not constitute a legally binding response.",
  "Snack offerings are mandatory for premium deployments.",
  "Reply times are measured in Naeem Standard Time.",
  "No refunds. The service is free.",
  "Please stop treating him like AWS. He is a person. Mostly.",
] as const;
