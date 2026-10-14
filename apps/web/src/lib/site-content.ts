export const PHONE_NUMBER = "650-219-3159" as const;
export const PHONE_TEL_HREF = "tel:+16502193159" as const;

export const ADDRESS_LINE_1 = "1524 Geneva Ave" as const;
export const ADDRESS_LINE_2 = "San Francisco, CA 94112" as const;
const ADDRESS_QUERY = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_QUERY}`;

export const INSTAGRAM_HANDLE = "@jbaqleh.training" as const;
export const INSTAGRAM_URL = "https://www.instagram.com/jbaqleh.training/" as const;
export const INSTAGRAM_FOLLOWERS_COUNT = 1800 as const;
export const INSTAGRAM_POSTS_COUNT = 450 as const;

export const testimonials = [
  {
    quote:
      "When I think of the pivotal figures in my athletic journey at San José State Men's Soccer, Jamal immediately comes to mind. As my strength and conditioning trainer, he brought a unique blend of technical knowledge, motivational prowess, and an instinctive understanding of an athlete's needs.",
    name: "#14 Angel Iniguez",
    affiliation: "San José State Men's Soccer",
    photo: "/images/testimonials/angel-iniguez.jpg",
  },
  {
    quote:
      "Jamal's influence on my strength, conditioning and basketball journey has been nothing short of transformative. His expertise goes beyond the gym; he understands the heart and soul of an athlete. Under his guidance, I've not only grown stronger but also more confident. His tailored workouts, coupled with genuine encouragement, have made me feel both empowered and prepared on the court. Thank you, Jamal, for helping me reach my true potential!",
    name: "Elle Ladine",
    affiliation: "Washington Huskies Basketball",
    photo: "/images/testimonials/elle-ladine.jpg",
  },
  {
    quote:
      "When I think of the pivotal figures in my athletic journey at San José State Men's Soccer, Jamal immediately comes to mind. As my strength and conditioning trainer, he brought a unique blend of technical knowledge, motivational prowess, and an instinctive understanding of an athlete's needs.",
    name: "Justin Gutang",
    affiliation: "Changwon LG Sakers",
    photo: "/images/testimonials/justin-gutang.jpg",
  },
  {
    quote:
      "I've been training with Coach Jamal for a while now, and I can't express how awesome he is. He makes basketball so much fun, and I've learned a ton. He is super patient and always encourages me to do my best. He's helped me improve my dribbling, shooting, and defense, and I've become a better player because of him. I look forward to our training sessions every week. If you want to get better at basketball and have a blast doing it, JB Training is the way to go!",
    name: "Raymond Whitley",
    affiliation: "St. Ignatius Basketball",
    photo: "/images/testimonials/raymond-whitley.jpg",
  },
] as const;

export const faqs = [
  {
    q: "What do I need to bring to my first session?",
    a: "Please bring comfortable clothing and shoes that you can move around in easily, as well as a water bottle and towel. You may also want to bring a change of clothes if you plan on showering after your workout.",
  },
  {
    q: "Is the first session really free?",
    a: "Yes. Your first session with Jamal is free, with no commitment. It's a chance to understand your needs and set clear goals for the sessions that follow. Space is limited, so call ahead to book.",
  },
  {
    q: "Do you offer personal training services?",
    a: "Yes. Jamal offers one-on-one personal training to help you reach your individual fitness goals. He'll create a customized workout plan for you, teach you how to use the equipment safely and effectively, and keep you motivated to stay on track.",
  },
] as const;

export const bio = [
  "Jamal Baqleh is a dedicated strength and conditioner trainer based in the San Francisco Bay Area, offering personalized fitness solutions for individuals of all ages and all levels of physical strength. With a strong commitment to enhancing wellness, he is equipped to bring necessary fitness equipment to create a conducive workout environment wherever needed.",
  "Jamal's expertise encompasses a wide range of fitness areas, including childhood obesity intervention, corporate wellness, advanced sports training, corrective exercise, and fitness facility design. He emphasizes innovative, customized High-Intensity Interval Training (HIIT) workout solutions that are scientifically based and tailored to individual needs.",
  "His services also extend to nutrition guidance and specialized programs for expecting mothers, senior citizens, and individuals requiring corrective exercise.",
  "For those interested in embarking on a fitness journey with Jamal, he offers a first lesson free to understand individual needs and set clear objectives for subsequent sessions.",
] as const;

export const howItWorks = [
  "Call or text Jamal at",
  "Pick a private 1-on-1 or group session at a time that works for you.",
  `Show up at ${ADDRESS_LINE_1} and train. Your first session is free.`,
] as const;
