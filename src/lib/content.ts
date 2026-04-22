// Central content store — edit here to update copy, projects, services, etc.
// All copy deliberately avoids AI filler ("elevate", "seamless", "unleash").

export const BRAND = {
  name: "Arova",
  tagline: "Interior architecture for spaces that remember you",
  city: "Hyderabad, Telangana",
  email: "studio@arova.design",
  phone: "+91 98495 31207",
  address: "Plot 14 · Banjara Hills Road No. 12 · Hyderabad 500034",
  social: {
    instagram: "arova.studio",
    pinterest: "arovastudio",
    linkedin: "arova-interior",
  },
} as const;

export const PROJECTS = [
  {
    slug: "meridian-residence",
    title: "Meridian Residence",
    typology: "Penthouse",
    city: "Jubilee Hills · Hyderabad",
    area: "6,480 sq ft",
    year: "2024",
    lead: "Charcoal oak, hammered brass, and a single shaft of northern light.",
    seed: "arova-01",
    orient: "landscape",
  },
  {
    slug: "house-of-seven-courtyards",
    title: "House of Seven Courtyards",
    typology: "Private Villa",
    city: "Shamirpet · Telangana",
    area: "14,200 sq ft",
    year: "2024",
    lead: "A Deccan villa that orbits around light, water, and silence.",
    seed: "arova-02",
    orient: "portrait",
  },
  {
    slug: "palladio-bistro",
    title: "Palladio · Café & Atelier",
    typology: "Hospitality",
    city: "Film Nagar · Hyderabad",
    area: "3,100 sq ft",
    year: "2023",
    lead: "Venetian plaster, bouclé banquettes, and espresso at magic hour.",
    seed: "arova-03",
    orient: "landscape",
  },
  {
    slug: "axis-headquarters",
    title: "Axis Global Headquarters",
    typology: "Corporate",
    city: "HITEC City · Hyderabad",
    area: "42,000 sq ft",
    year: "2023",
    lead: "Twenty-two floors choreographed around an interior courtyard.",
    seed: "arova-04",
    orient: "landscape",
  },
  {
    slug: "ivory-tower-penthouse",
    title: "The Ivory Tower Penthouse",
    typology: "Penthouse",
    city: "Banjara Hills · Hyderabad",
    area: "5,200 sq ft",
    year: "2023",
    lead: "A sky-high apartment dressed in travertine and whispered violet.",
    seed: "arova-05",
    orient: "portrait",
  },
  {
    slug: "nilaya-farmhouse",
    title: "Nilaya Farmhouse",
    typology: "Private Villa",
    city: "Moinabad · Telangana",
    area: "9,700 sq ft",
    year: "2022",
    lead: "Rammed earth, reclaimed teak, and a courtyard of monsoon lilies.",
    seed: "arova-06",
    orient: "landscape",
  },
  {
    slug: "theatre-of-glass",
    title: "Theatre of Glass",
    typology: "Corporate",
    city: "Gachibowli · Hyderabad",
    area: "18,400 sq ft",
    year: "2022",
    lead: "A glass-walled boardroom floor with acoustic felt cathedrals.",
    seed: "arova-07",
    orient: "landscape",
  },
  {
    slug: "saffron-and-bone",
    title: "Saffron & Bone",
    typology: "Hospitality",
    city: "Jubilee Hills · Hyderabad",
    area: "4,200 sq ft",
    year: "2022",
    lead: "A kitchen-forward dining room carved in raw stone and candlelight.",
    seed: "arova-08",
    orient: "portrait",
  },
] as const;

export const SERVICES = [
  {
    index: "01",
    title: "Interior Architecture",
    short: "Spatial planning and structural restraint.",
    body:
      "We begin before the walls — redrawing circulation, sightlines, and volumes. Ceiling choreography, joinery logic, and material depth resolved at architectural scale.",
    bullets: [
      "Spatial planning & flow design",
      "Structural detailing & fenestration",
      "Custom joinery & millwork direction",
      "Lighting architecture",
    ],
  },
  {
    index: "02",
    title: "Turnkey Residences",
    short: "End-to-end delivery for penthouses and villas.",
    body:
      "One studio, one timeline, one accountability. From the first sketch to the final linen, we deliver complete homes without the seams of multiple vendors.",
    bullets: [
      "Full FF&E curation",
      "Procurement across 22 countries",
      "On-site project management",
      "Defect liability & six-month aftercare",
    ],
  },
  {
    index: "03",
    title: "Hospitality & F&B",
    short: "Restaurants, cafés, boutique hotels.",
    body:
      "Restaurants are choreographed machines. We design rooms that sound right, move diners without friction, and still hold a guest for three hours without effort.",
    bullets: [
      "Guest journey & flow modelling",
      "Acoustic & thermal design",
      "Brand environment & menu typography",
      "BOH / FOH operational design",
    ],
  },
  {
    index: "04",
    title: "Corporate Interiors",
    short: "Headquarters and experience floors.",
    body:
      "A workplace is a recruiting tool. We build floors that hold executive presence and also an afternoon of heads-down focus, at 42,000 sq ft or 4,200.",
    bullets: [
      "Workplace strategy workshops",
      "Executive & experience floors",
      "Acoustic planning & AV integration",
      "Landlord & MEP coordination",
    ],
  },
  {
    index: "05",
    title: "Furniture Commissions",
    short: "Bespoke pieces, made once.",
    body:
      "When the piece you want doesn't exist, we draw it. Each commission is produced by our karigars in Jaipur, Jodhpur, and Hyderabad in editions of one.",
    bullets: [
      "Custom case goods & seating",
      "Stone, brass and lacquer work",
      "Signed & numbered editions",
      "White-glove delivery",
    ],
  },
  {
    index: "06",
    title: "Art & Object Curation",
    short: "Sourcing what a room deserves.",
    body:
      "We curate art, objects, and photography from galleries across Mumbai, Delhi, Paris, and New York. Every acquisition is considered against the architecture.",
    bullets: [
      "Private collection advisory",
      "Gallery & auction representation",
      "Commissioning new works",
      "Installation & conservation",
    ],
  },
] as const;

export const PROCESS = [
  {
    step: "I",
    name: "Immersion",
    weeks: "Weeks 01 — 03",
    body:
      "We live with your brief. Site visits at three times of day, interviews with everyone who will use the space, a taxonomy of the objects you already love.",
  },
  {
    step: "II",
    name: "Concept",
    weeks: "Weeks 04 — 08",
    body:
      "A single governing idea, drawn once and tested against every wall. Two directions, one vote, and an agreed material language before a single rupee is quoted.",
  },
  {
    step: "III",
    name: "Design Development",
    weeks: "Weeks 09 — 18",
    body:
      "Every joint, switch, and shadow line resolved to production-ready drawings. Mockups built to 1:1 in our atelier before procurement is released.",
  },
  {
    step: "IV",
    name: "Execution",
    weeks: "Weeks 19 — 42",
    body:
      "On-site project managers, weekly reports, and a single WhatsApp thread you never lose. We handle the chaos so the house stays quiet.",
  },
  {
    step: "V",
    name: "Settling",
    weeks: "Week 43 onward",
    body:
      "Handover is the midpoint, not the end. Six months of supervised living, one snag-list review per month, and a portrait of the finished home for our archive.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We interviewed eleven studios. Arova was the only one who asked about the light before they asked about the budget.",
    author: "Rohini Achanta",
    role: "Founder · Achanta Polymers",
    project: "Meridian Residence",
  },
  {
    quote:
      "They delivered a forty-thousand-square-foot floor on the day they promised it, eighteen months after we signed. I still cannot believe it.",
    author: "Dr. Vikram Reddy",
    role: "Group CEO · Axis Global",
    project: "Axis Headquarters",
  },
  {
    quote:
      "A house that sounds right. I didn't know a house could sound right until we moved in.",
    author: "Aarti Kothapalli",
    role: "Novelist",
    project: "House of Seven Courtyards",
  },
  {
    quote:
      "Our covers went up thirty-one percent the month we re-opened. The food didn't change. The room did.",
    author: "Faraz Ibrahim",
    role: "Restaurateur · Palladio",
    project: "Palladio Bistro",
  },
  {
    quote:
      "Most designers sell you a mood board. Arova sells you a decision log.",
    author: "Shreyas Narasimhan",
    role: "Principal · Narasimhan Family Office",
    project: "The Ivory Tower",
  },
] as const;

export const JOURNAL = [
  {
    slug: "the-weight-of-a-doorknob",
    title: "The Weight of a Doorknob",
    dek: "A field note on why the first thing you touch should weigh more than you expect.",
    category: "Essays",
    readTime: "6 min",
    date: "April 04, 2026",
    seed: "journal-01",
  },
  {
    slug: "deccan-modernism",
    title: "Deccan Modernism, Revisited",
    dek: "What Hyderabad's mid-century architects knew about monsoons that we keep forgetting.",
    category: "Architecture",
    readTime: "11 min",
    date: "March 22, 2026",
    seed: "journal-02",
  },
  {
    slug: "living-with-stone",
    title: "Living With Stone",
    dek: "Eighteen months with a travertine floor, and what it taught us about patience.",
    category: "Materials",
    readTime: "8 min",
    date: "March 08, 2026",
    seed: "journal-03",
  },
  {
    slug: "the-boardroom-is-a-stage",
    title: "The Boardroom Is a Stage",
    dek: "On theatre, acoustics, and why the best meeting rooms borrow from opera houses.",
    category: "Corporate",
    readTime: "9 min",
    date: "February 19, 2026",
    seed: "journal-04",
  },
  {
    slug: "what-a-karigar-knows",
    title: "What a Karigar Knows",
    dek: "Three days in a Jodhpur stoneyard with a master who has carved for four decades.",
    category: "Craft",
    readTime: "13 min",
    date: "February 02, 2026",
    seed: "journal-05",
  },
  {
    slug: "lighting-is-a-verb",
    title: "Lighting is a Verb",
    dek: "Six rules for a room that knows when to whisper and when to sing.",
    category: "Essays",
    readTime: "7 min",
    date: "January 17, 2026",
    seed: "journal-06",
  },
] as const;

export const RECOGNITIONS = [
  { name: "AD100", label: "Architectural Digest", year: "2024" },
  { name: "Elle Decor", label: "Studio of the Year — South", year: "2024" },
  { name: "IIID", label: "Residential · Gold", year: "2023" },
  { name: "Design Pataki", label: "50 Most Influential", year: "2023" },
  { name: "Vogue Living", label: "India List", year: "2022" },
] as const;

export const INSTAGRAM = [
  { id: "i-01", caption: "Mockup day · the travertine arrives on Tuesday.", seed: "ig-01" },
  { id: "i-02", caption: "A corner of House of Seven Courtyards, 6:14 PM.", seed: "ig-02" },
  { id: "i-03", caption: "Brass samples from Moradabad, November batch.", seed: "ig-03" },
  { id: "i-04", caption: "Mumbai gallery run · three pieces on hold.", seed: "ig-04" },
  { id: "i-05", caption: "Studio library, rearranged for winter.", seed: "ig-05" },
  { id: "i-06", caption: "Off to Jodhpur, 04:40 flight.", seed: "ig-06" },
  { id: "i-07", caption: "Palladio, before the chairs arrived.", seed: "ig-07" },
  { id: "i-08", caption: "A doorhandle worth the detour.", seed: "ig-08" },
] as const;

export function img(seed: string, w = 1200, h = 1500) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
