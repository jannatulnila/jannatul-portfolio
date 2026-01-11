export const projects = [
  {
    "id": "1",
    "title": "FoodGroceryo - Food Expiry Tracker System",
    "description": "The Food Expiry Tracker System is a full-stack web application that enables users to track food items, monitor expiry dates, and receive alerts for nearly expired or expired products. By providing a clear overview of food inventory, it helps users reduce food waste, save money, and improve kitchen management. The platform offers secure authentication, intuitive navigation, real-time expiry countdowns, and recruiter-friendly UI/UX.",
    "images": [
      "https://i.ibb.co.com/TxDyw9vs/food-grocery-1.png",
      "https://i.ibb.co.com/93cKZ8ZN/food-grocery-2.png",
      "https://i.ibb.co.com/qYmLYfL4/food-grocery-3.png"
    ],
    "techStack": [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Express",
      "MongoDB",
      "Node.js"
    ],
    "liveLink": "https://warm-dieffenbachia-f5c379.netlify.app/",
    "clientRepo": "https://github.com/jannatulnila/food-groceryo-client",
    "serverRepo": "https://github.com/jannatulnila/food-groceryo-server",
    "challengesFaced": [
      "Ensuring JWT was securely stored in HTTP-only cookies to prevent XSS attacks, and configuring CORS properly so cookies worked in production.",
      "Implementing server-side date comparison queries in MongoDB to retrieve items expiring within the next 5 days or already expired.",
      "Solved the common Firebase + JWT reload redirection problem by checking authentication state before rendering private routes.",
      "Handling server-side pagination while maintaining category filters and search keywords without losing state."
    ],
    "futureImprovements": [
      "Push Notifications for upcoming expiry alerts directly to users’ devices.",
      "Multi-Language Support to make the app accessible to a global audience.",
      "Offline Mode with local storage syncing when internet is restored.",
      "Advanced Analytics Dashboard showing weekly/monthly food wastage trends.",
      "Barcode Scanning Feature to quickly add food items via product labels."
    ],
    "errors": [
      "JWT cookie not sent due to CORS misconfiguration.",
      "Date comparison issue when filtering expired foods.",
      "Firebase auth state delay during route protection."
    ]
  },
{
  "id": "2",
  "title": "Digital Wallet – A Secure and Smart Payment Solution",
  "description": "Digital Wallet is a smart and secure fintech web application that allows users to transfer money, pay bills, manage cards, and track expenses safely. It aims to digitize financial activities with a modern, seamless, and AI-assisted user experience, providing all-in-one digital banking for Bangladesh.",
  "images": [
    "https://i.ibb.co.com/0pDJ5RYL/Screenshot-2026-01-11-120536.png",
    "https://i.ibb.co.com/NdW1Gxfn/Screenshot-2026-01-11-120715.png",
    "https://i.ibb.co.com/zH058KC7/Screenshot-2026-01-11-120746.png"
  ],
  "techStack": ["Next.js", "React", "Tailwind CSS", "Express", "MongoDB", "Stripe", "AI Integration"],
  "liveLink": "https://digital-wallet-sage.vercel.app/",
  "clientRepo": "https://github.com/Fahad-smto/digital-wallet",
  "serverRepo": "https://github.com/Fahad-smto/digital-wallet-server",
  "challengesFaced": [
    "Secure Authentication-Ensuring safe user login, token management, and session persistence.",
    "Real-Time Transactions-Handling instant fund transfers, balance updates, and notifications.",
    "Multi-Card Management-Adding, deleting, and managing multiple bank cards without conflicts.",
    "Expense Tracking & Visualization-Categorizing expenses and providing meaningful AI-driven insights.",
    "QR & International Payments-Integrating QR code scanning and cross-border remittance securely.",
    "AI Chat Assistant Integration-Providing finance advice while ensuring sensitive data privacy."
  ],
  "futureImprovements": [
    "Biometric Authentication-Fingerprint/FaceID login for added security.",
    "Advanced AI Recommendations-Personalized spending advice and savings suggestions.",
    "Cryptocurrency Wallet Integration-Allow users to store and transact crypto assets.",
    "Voice Command Feature-Faster interactions via voice recognition for payments.",
    "Multi-Currency & Global Expansion-Support international users and multiple currencies."
  ],
  "errors": [
    "Payment gateway timeout for some transactions.",
    "Server-side race conditions during simultaneous fund transfers.",
    "AI assistant occasionally returns incomplete financial suggestions."
  ]
},
 {
  "id": "3",
  "title": "Primefit-Sports Club Management System",
  "description": "PrimeFit Sports Club is a full-stack, single-club management platform built for handling user registrations, court/session bookings, membership management, payments, and administrative operations. The system supports three roles (User, Member, Admin) with separate dashboards, enabling secure authentication, role-based access, and CRUD operations for courts, bookings, and announcements. It integrates Stripe payments, coupon management, dynamic booking approvals, and fully responsive dashboards to provide a seamless club experience across devices.",
  "images": [
    "https://i.ibb.co.com/Q3Qz4Pm6/Screenshot-2025-08-19-102238.png",
    "https://i.ibb.co.com/8DCDXyn3/Screenshot-2025-08-19-102452.png",
    "https://i.ibb.co.com/mV2sbnQF/Screenshot-2025-08-19-102401.png"
  ],
  "techStack": ["React", "Tailwind", "Stripe", "Firebase", "Express", "MongoDB"],
  "liveLink": "https://primefit-sports-club-99b528.netlify.app/",
  "clientRepo": "https://github.com/jannatulnila/sports-club-client",
  "serverRepo": "https://github.com/jannatulnila/sports-club-server",
  "challengesFaced": [
    "Private Route Reload Issue-Ensuring private dashboards persist authentication state after page refresh without redirecting to login.",
    "Booking Workflow Complexity-Handling multiple slot bookings, pending status, admin approval, and dynamic pricing.",
    "Responsive Dashboard Design-Maintaining usability across mobile, tablet, and desktop for multiple roles.",
    "Coupon Application in Payment-Validating discount codes and applying correct price adjustments in real time.",
    "Pagination & Table/Card Layout Toggle-Dynamically switching between card and table formats while paginating court and booking data.",
    "Stripe Payment Integration-Handling payment completion, storing transaction data, and updating booking status atomically."
  ],
  "futureImprovements": [
    "Push Notifications-Notify members about approved bookings, discounts, or club events.",
    "Advanced Analytics Dashboard-Show trends in bookings, payments, and court usage over time.",
    "Member Feedback System-Allow members to leave reviews for courts or club facilities.",
    "Multi-Club Support-Extend the system to manage multiple clubs within a single platform.",
    "Event Scheduling & Management-Enable creation, registration, and payment for special club events."
  ],
  "errors": [
    "Stripe payment redirect not returning user to success page.",
    "Protected routes not working after Firebase logout.",
    "Parcel coverage API not updating in real time."
  ],
},
  {
    "id": "3",
    "title": "GardenHub - Gardening Community",
    "description": "Garden Hub is a full-stack gardening community platform where enthusiasts can connect, share gardening tips, and explore curated advice from other members. Users can post tips with images, categories, and difficulty levels, explore featured gardeners, like trending tips, and filter advice for easier browsing. The platform also includes dark/light mode, animations, and an intuitive, fully responsive UI for an engaging experience on any device.",
    "images": [
      "https://i.ibb.co/0RC2XvfH/Screenshot-2025-07-20-123147.png",
      "https://i.ibb.co/DgzjCBbY/Screenshot-2025-07-20-123344.png",
      "https://i.ibb.co/TDTWZQsz/Screenshot-2025-06-29-093616.png"
    ],
    "techStack": [
      "React",
      "Tailwind",
      "Firebase",
      "MongoDB",
      "DaisyUI",
      "Framer Motion"
    ],
    "liveLink": "https://teal-puffpuff-b95004.netlify.app/",
    "clientRepo": "https://github.com/jannatulnila/garden-hub-client",
    "serverRepo": "https://github.com/jannatulnila/gardenHub-server",
    "challengesFaced": [
      "Like Button with DB Update-Updating totalLiked in MongoDB without causing duplicate likes from the same user.",
      "Filtering by Difficulty Level-Implementing a dynamic filter on the Browse Tips page that works smoothly with MongoDB queries.",
      "Dark/Light Mode Persistence-Keeping theme selection consistent after reload by using local storage.",
      "Firebase + Private Routes Reload Issue-Preventing redirects to login when refreshing private pages.",
      "Trending Tips Sorting-Ensuring the Top Trending Tips section shows items sorted by likes while limiting to 6 results."
    ],
    "futureImprovements": [
      "Push Notifications-Notify users of new tips, likes, or gardener updates.",
      "User Following System-Allow users to follow favorite gardeners.",
      "Event Management-Post and join gardening events directly through the platform.",
      "Comment Section for Tips-Enable discussions under each gardening tip.",
      "Advanced Search Filters-Add more filtering options like category, date, and plant type."
    ],
    "errors": [
      "MongoDB aggregate performance issue with large user dataset.",
      "Like button state inconsistency after reload.",
      "Animation breaking layout in mobile view."
    ]
  }
  ,
  {
  "id": "4",
  "title": "JobPortal - Your Job Discovery Hub",
  "description": "JobTrack is an innovative and fully responsive job discovery platform designed to connect job seekers with opportunities across multiple companies. It centralizes job listings, enabling users to explore company details, review job descriptions, check qualification requirements, and apply directly through company websites. The platform features Firebase authentication for secure login, a profile management system, and engaging animations, ensuring an intuitive and professional user experience across all devices.",
  "images": [
    "https://i.ibb.co/0jgCFpgx/Screenshot-2025-06-29-113951.png",
    "https://i.ibb.co/KxBzrGcL/Screenshot-2025-06-29-114037.png",
    "https://i.ibb.co/BHsXtJR3/Screenshot-2025-06-29-114114.png"
  ],
  "techStack": ["React", "Tailwind", "Firebase", "DaisyUI", "Framer Motion", "React Icons"],
  "liveLink": "https://resonant-crisp-3c6777.netlify.app/",
  "clientRepo": "https://github.com/jannatulnila/job-portal-website",
  "challengesFaced": [
    "Private Routes with Firebase-Ensuring authenticated users remain logged in after page refresh without redirect issues.",
    "Responsive Grid Layouts-Maintaining consistent design for job listings and company sections across mobile, tablet, and desktop views.",
    "Password Validation-Implementing and enforcing secure password rules without frustrating the user experience.",
    "Dynamic Title Updates-Making sure browser tab titles change dynamically for each route.",
    "Modal Job Details-Building a reusable, accessible modal for job details and external application redirection."
  ],
  "futureImprovements": [
    "Advanced Job Search Filters-Filter jobs by salary range, date posted, and work type.",
    "Saved Jobs Feature-Allow users to bookmark jobs for later.",
    "Push Notifications-Notify users when new jobs match their preferences.",
    "Company Reviews-Enable applicants to leave feedback about companies.",
    "Admin Dashboard-Let company representatives post and manage job listings directly."
  ],
  "errors": [
    "Stripe payment redirect not returning user to success page.",
    "Protected routes not working after Firebase logout.",
    "Parcel coverage API not updating in real time."
  ]
}
,
 
];
