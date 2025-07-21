export const projects = [
  {
    id: "1",
    title: "FoodGroceryo-Food Expiry Tracker System",
    description: "A full-stack app to track food expiry, get alerts, and reduce food waste.",
    images: [
      "https://i.ibb.co/hRF5WDMG/Screenshot-2025-06-29-104024.png",
      "https://i.ibb.co/35Q3hC0B/Screenshot-2025-06-29-104134.png",
      "https://i.ibb.co/KBTdPJc/Screenshot-2025-06-29-104050.png"
    ],
    techStack: ["React", "Tailwind CSS", "Firebase", "Express", "MongoDB", "Node.js"],
    liveLink: "https://warm-dieffenbachia-f5c379.netlify.app/",
    clientRepo: "https://github.com/jannatulnila/food-groceryo-client",
    serverRepo: "https://github.com/jannatulnila/food-groceryo-server",
    errors: [
      "JWT cookie not sent due to CORS misconfiguration.",
      "Date comparison issue when filtering expired foods.",
      "Firebase auth state delay during route protection."
    ]
  },
  {
    id: "2",
    title: "GardenHub - Gardening Community",
    description: "A social platform for gardeners to share, explore, and filter tips by difficulty.",
    images: [
      "https://i.ibb.co/0RC2XvfH/Screenshot-2025-07-20-123147.png",
      "https://i.ibb.co/DgzjCBbY/Screenshot-2025-07-20-123344.png",
      "https://i.ibb.co/TDTWZQsz/Screenshot-2025-06-29-093616.png",
     
    ],
    techStack: ["React", "Tailwind", "Firebase", "MongoDB", "DaisyUI", "Framer Motion"],
    liveLink: "https://teal-puffpuff-b95004.netlify.app/",
    clientRepo: "https://github.com/jannatulnila/garden-hub-client",
    serverRepo:"https://github.com/jannatulnila/gardenHub-server",
    errors: [
      "MongoDB aggregate performance issue with large user dataset.",
      "Like button state inconsistency after reload.",
      "Animation breaking layout in mobile view."
    ]
  },
  {
    id: "3",
    title: "JobPortal-Your Job Discovery Hub",
    description: "A responsive job portal for job seekers to browse, apply, and manage profiles.",
    images: [
      "https://i.ibb.co/0jgCFpgx/Screenshot-2025-06-29-113951.png",
      "https://i.ibb.co/KxBzrGcL/Screenshot-2025-06-29-114037.png",
      "https://i.ibb.co/BHsXtJR3/Screenshot-2025-06-29-114114.png"
    ],
    techStack: ["React", "Tailwind", "Stripe", "Firebase", "Express", "MongoDB"],
    liveLink: "https://resonant-crisp-3c6777.netlify.app/",
    clientRepo: "https://github.com/jannatulnila/job-portal-website",
    errors: [
      "Stripe payment redirect not returning user to success page.",
      "Protected routes not working after Firebase logout.",
      "Parcel coverage API not updating in real time."
    ]
  },
  {
    id: "4",
    title: "Primefit-Sports Club Managment System",
     description: "A sports club management platform that enables users to register, book courts, make payments, and access personalized dashboards.",
    images: [
      "https://i.ibb.co/HpRLy78C/Screenshot-2025-07-19-222008.png",
      "https://i.ibb.co/BKQnrsBr/Screenshot-2025-07-19-222322.png",
      "https://i.ibb.co/tMpz7Rpd/Screenshot-2025-07-19-222048.png"
    ],
    techStack: ["React", "Tailwind", "Stripe", "Firebase", "Express", "MongoDB"],
    liveLink: "https://primefit-sports-club-99b528.netlify.app/",
    clientRepo: "https://github.com/jannatulnila/sports-club-client",
    serverRepo: "https://github.com/jannatulnila/sports-club-server",
    errors: [
      "Stripe payment redirect not returning user to success page.",
      "Protected routes not working after Firebase logout.",
      "Parcel coverage API not updating in real time."
    ]
  }
];
