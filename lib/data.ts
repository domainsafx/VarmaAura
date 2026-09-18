export const site = {
  name: "VARMA AURA",
  tagline:
    "A 10-acre lifestyle resort community where nature, recreation and community come together.",
  email: "varmaauraa@gmail.com",
  website: "www.varmaaura.com",
  address:
    "Gorli Seetharampuram, Near Bobbili, Vizianagaram District, Andhra Pradesh",
  social: "@varma.aura",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/live-now", label: "Live Now" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
];

export type ExperienceItem = {
  num: string;
  title: string;
  desc: string;
  image: string;
};

export const experienceTeasers: ExperienceItem[] = [
  {
    num: "01",
    title: "Sport",
    desc: "Box cricket, football and indoor shuttle courts move, play, compete.",
    image: "/Cricket_1.png",
  },
  {
    num: "02",
    title: "Leisure",
    desc: "A landscaped pool and quiet corners to slow down.",
    image: "/Swimming_pool.png",
  },
  {
    num: "03",
    title: "Dining",
    desc: "Good food, better moments, shared at the food court.",
    image: "/Dining.png",
  },
  {
    num: "04",
    title: "Family",
    desc: "Open lawns and a children's park for every generation.",
    image: "/Family_park.png",
  },
  {
    num: "05",
    title: "Stay",
    desc: "Landscaped resort cottages set among the greens.",
    image: "/Nest_Houses.png",
  },
  {
    num: "06",
    title: "Events",
    desc: "A function hall built for celebrations that matter.",
    image: "/Function_Hall.png",
  },
];

export type ExperienceDetail = {
  num: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  status?: "comingSoon";
  cta?: { label: string; href: string };
  reverse?: boolean;
};

export const experienceDetails: ExperienceDetail[] = [
  {
    num: "01",
    eyebrow: "01 — Sport",
    title: "Move. Play. Compete.",
    body: "A box cricket arena, box football arena and indoor shuttle courts all open today, and bookable in a few taps. Sport at Aura isn't an afterthought; it's the reason mornings and evenings fill up fast.",
    image: "/Cricket_play.png",
    imageAlt: "Box Cricket Arena at Varma Aura",
    cta: { label: "Book a Game", href: "/live-now" },
  },
  {
    num: "02",
    eyebrow: "02 — Leisure",
    title: "Slow down. Breathe. Reconnect.",
    body: "A landscaped swimming pool, framed by palms and soft evening light a space built for unhurried afternoons, arriving soon as part of the next phase of Aura.",
    image: "/Swimming_pool.png",
    imageAlt: "Swimming pool at Varma Aura",
    status: "comingSoon",
    reverse: true,
  },
  {
    num: "03",
    eyebrow: "03 — Dining",
    title: "Good food. Better moments.",
    body: "An open, warmly lit food court where a match ends and a meal begins built for long evenings shared with neighbours and family.",
    image: "/Dining.png",
    imageAlt: "Food court at Varma Aura",
  },
  {
    num: "04",
    eyebrow: "04 — Family",
    title: "Every generation, one lawn.",
    body: "The Open Party Lawn and a dedicated Children's Park bring three generations onto the same green picnics, celebrations and everyday play, all within Aura's grounds.",
    image: "/Family_park.png",
    imageAlt: "Family on the open party lawn at Varma Aura",
    reverse: true,
  },
  {
    num: "05",
    eyebrow: "05 — Stay",
    title: "Cottages, set among the greens.",
    body: "Landscaped resort cottages, tucked into the tree line a quiet place to stay over, arriving as Aura's next chapter.",
    image: "/Nest_Houses.png",
    imageAlt: "Landscaped resort cottages at Varma Aura",
    status: "comingSoon",
  },
  {
    num: "06",
    eyebrow: "06 — Events",
    title: "Celebrations that matter.",
    body: "A function hall designed for gatherings both grand and intimate from festival evenings to family milestones.",
    image: "/Function_Hall.png",
    imageAlt: "Function hall at Varma Aura",
    reverse: true,
  },
];

export const lifestyleHighlights = [
  "Resort Living Environment",
  "Landscaped Green Spaces",
  "Sports & Recreation Zones",
  "Community Gathering Spaces",
  "Peaceful Natural Surroundings",
];

export type LiveActivity = {
  name: string;
  image: string;
  imageAlt: string;
  desc: string;
};

export const liveActivities: LiveActivity[] = [
  {
    name: "Box Cricket Arena",
    image: "/Cricket_1.png",
    imageAlt: "Box Cricket Arena",
    desc: "A netted, all-weather cricket arena bring your own team or join a pickup game most evenings.",
  },
  {
    name: "Box Football Arena",
    image: "/Football_play.png",
    imageAlt: "Box Football Arena",
    desc: "A full-size turf pitch built for five-a-side football, floodlit for evening matches.",
  },
  {
    name: "Indoor Shuttle Courts",
    image: "/Badminton_Play.png",
    imageAlt: "Indoor Shuttle Courts",
    desc: "Wooden-floor indoor courts for badminton, out of the heat and open through the day.",
  },
];

export const bookingSteps = [
  {
    num: "01",
    title: "Choose a slot",
    desc: "Pick your activity, date and time.",
  },
  {
    num: "02",
    title: "Add your details",
    desc: "Number of players, name and phone.",
  },
  {
    num: "03",
    title: "We confirm",
    desc: "Our team confirms your booking by phone.",
  },
];

export const timeSlots = ["6:00 AM", "7:00 AM", "5:00 PM", "6:00 PM", "7:00 PM"];

export type AmenityCard = {
  name: string;
  image: string;
  desc: string;
  status: "open" | "soon";
};

export const openAmenities: AmenityCard[] = [
  {
    name: "Box Cricket Arena",
    image: "/Cricket_play.png",
    desc: "Netted, all-weather, ready most evenings.",
    status: "open",
  },
  {
    name: "Box Football Arena",
    image: "/Football_play.png",
    desc: "Floodlit turf, built for five-a-side.",
    status: "open",
  },
  {
    name: "Indoor Shuttle Courts",
    image: "/Badminton_Play.png",
    desc: "Wooden-floor badminton courts, all day.",
    status: "open",
  },
];

export const comingSoonAmenities: AmenityCard[] = [
  {
    name: "Swimming Pool",
    image: "/Swimming_pool.png",
    desc: "A landscaped pool framed by palms.",
    status: "soon",
  },
  {
    name: "Pickleball",
    image: "/Pickle_Ball.png",
    desc: "Dedicated courts for the fastest-growing sport.",
    status: "soon",
  },
  {
    name: "Resort Cottages",
    image: "/Nest_Houses.png",
    desc: "Landscaped stays, set among the greens.",
    status: "soon",
  },
  {
    name: "Function Hall",
    image: "/Function_Hall.png",
    desc: "A venue built for celebrations, big and small.",
    status: "soon",
  },
  {
    name: "Kids Play Area",
    image: "/Kids_play_area.png",
    desc: "A safe, imaginative space for young explorers.",
    status: "soon",
  },
  {
    name: "Open Party Lawn",
    image: "/Event_Open.png",
    desc: "Already hosting picnics and gatherings today.",
    status: "open",
  },
];

export const allAmenityTags = [
  "Indoor Shuttle Courts",
  "Box Cricket Arena",
  "Box Football Arena",
  "Open Party Lawn",
  "Children's Park",
  "Swimming Pool",
  "Pickleball",
  "Function Hall",
  "Food Court",
  "Resort Cottages",
];

export const locationAdvantages = [
  "Located near Bobbili — a major regional center",
  "400 m to the upcoming Chilakapalem–Rayagada Road",
  "20 min drive to the Bharatmala Economic Corridor (Vizag–Raipur)",
  "Connected to Parvathipuram, Salur, Rajam & surrounding towns",
];

export const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Experience", href: "/experience" },
      { label: "Live Now", href: "/live-now" },
      { label: "Amenities", href: "/amenities" },
    ],
  },
  {
    heading: "Aura",
    links: [
      { label: "Location", href: "/location" },
      { label: "Visit", href: "/visit" },
      { label: "Private Enquiry", href: "/visit#enquiry" },
    ],
  },
];
