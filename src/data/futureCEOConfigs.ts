export interface FutureCEODay {
    day: number;
    title: string;
    activities: string[];
}

export interface FutureCEOInstructor {
    name: string;
    title: string;
    credentials: string;
    image: string;
    bio: string;
}

export interface FutureCEOConfig {
    id: number;
    university: string;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    capacity: number;
    duration: string;
    startDate: string;
    endDate: string;
    registrationDate: string;
    location: string;
    category: string;

    // Introduction
    introduction: {
        title: string;
        content: string[];
        image: string;
    };

    // Program Details
    highlights: {
        icon: string;
        title: string;
        description: string;
    }[];

    // Instructors
    instructors: FutureCEOInstructor[];

    // Why Join
    whyJoin: {
        title: string;
        reasons: {
            icon: string;
            title: string;
            description: string;
            image?: string;
        }[];
    };

    benefits: {
        icon: string;
        title: string;
        description: string;
    }[];

    itinerary: FutureCEODay[];

    // Media
    heroImage?: string;
    heroVideo?: string;

    // Additional Info
    ledBy: string;
    certificate: string;

    features: string[];
}

export const futureCEOConfigs: Record<string, FutureCEOConfig> = {
    harvard: {
        id: 100,
        university: "Ivy League",
        title: "Future CEO Training Program",
        subtitle: "An Exclusive Two-Week Training Program at Ivy League Institutions",
        description:
            "Join an elite 2-week intensive leadership program at Ivy League institutions. Limited to just 30 students worldwide, this exclusive training combines real-world CEO simulations, Ivy League case method instruction, and hands-on leadership challenges led by Ivy League professors.",
        price: 14999.99,
        capacity: 42,
        duration: "2 weeks",
        startDate: "July 12, 2026",
        endDate: "July 25, 2026",
        registrationDate: "October 31, 2025",
        location: "Ivy League, Cambridge, MA",
        category: "Executive Training",
        ledBy: "Ivy League Professors",
        certificate: "CPD-accredited certificate signed by the professors",

        heroImage: "/images/harvard2.png",

        introduction: {
            title: "What is the Future CEO Training Program?",
            content: [
                "The Future CEO Training Program is an elite two-week leadership experience held at Ivy League institutions, designed to prepare ambitious students for the future of global leadership.",
                "Limited to exclusive student groups, this transformative program blends Ivy League-style teaching, real-world leadership simulations, entrepreneurship challenges, and Ivy League university experiences.",
                "Over 13 unforgettable days, participants learn directly from Ivy League professors, build executive-level communication and decision-making skills, and explore the academic and cultural highlights of Boston and New York City.",
            ],
            image: "/images/graduates.webp",
        },

        instructors: [
            {
                name: "Nicholas Coburn-Palo",
                title: "Lead Instructor",
                credentials: "Ivy League Instructor & Leadership Expert",
                image: "/images/nicholas-coburn-palo.svg",
                bio: "Nicholas Coburn-Palo brings over 4 years of experience teaching leadership and negotiation at Ivy League institutions. His expertise in executive education has transformed thousands of emerging leaders worldwide.",
            },
            {
                name: "Ivy League Faculty Team",
                title: "Supporting Instructors",
                credentials: "Ivy League Professors",
                image: "/images/cambridge-teacher.webp",
                bio: "Our distinguished faculty includes Ivy League professors specializing in business strategy, organizational behavior, and executive leadership. Each brings decades of real-world experience and academic excellence.",
            },
        ],

        whyJoin: {
            title: "Why Join the Future CEO Program?",
            reasons: [
                {
                    icon: "TrendingUp",
                    title: "Transform Your Leadership Potential",
                    description: "Discover and develop your unique leadership identity through Ivy League's proven methodologies. Learn to think, decide, and act like a CEO.",
                    image: "/images/graduates.webp",
                },
                {
                    icon: "Award",
                    title: "Gain Ivy League Credentials",
                    description:
                        "Earn a CPD-accredited certificate signed by eminent scholars and educators. Add prestigious credentials that stand out on university applications and resumes.",
                    image: "/images/graduation-cap.webp",
                },
                {
                    icon: "Users",
                    title: "Build a Global Network",
                    description: "Connect with 29 other ambitious students from around the world. Build lifelong friendships and professional relationships that span continents.",
                    image: "/images/networking.jpg",
                },
                {
                    icon: "Globe",
                    title: "Experience Ivy League Universities",
                    description: "Tour Ivy League campuses, Yale, MIT, and Columbia. Experience campus life at the world's top universities and get insider tips for admissions.",
                    image: "/images/london.webp",
                },
                {
                    icon: "Brain",
                    title: "Master Real CEO Skills",
                    description: "Learn decision-making under pressure, strategic thinking, and effective communication through real-world simulations and case studies.",
                    image: "/images/mission.webp",
                },
                {
                    icon: "Rocket",
                    title: "Create Your CEO Roadmap",
                    description: "Leave with a personalized strategic plan for your leadership journey. Know exactly what steps to take to achieve your executive goals.",
                    image: "/images/vision.webp",
                },
            ],
        },

        highlights: [
            {
                icon: "User",
                title: "Discover Your Leadership Identity",
                description: "Uncover your unique leadership style and learn how to leverage it for maximum impact in executive settings.",
            },
            {
                icon: "Brain",
                title: "Learn How Ivy League Leaders Make Decisions",
                description: "Master the decision-making frameworks used by Ivy League-trained executives and business leaders worldwide.",
            },
            {
                icon: "Target",
                title: "Engage in Real-Time Case Simulations",
                description: "Apply leadership principles through interactive simulations based on real CEO challenges and scenarios.",
            },
            {
                icon: "TrendingUp",
                title: "Build Your Personal 'Future CEO' Roadmap",
                description: "Create a personalized strategic plan for your leadership journey and executive career development.",
            },
        ],

        benefits: [
            {
                icon: "Zap",
                title: "Develop Core Leadership Skills",
                description: "Build essential leadership capabilities through active challenges and real-world business scenarios.",
            },
            {
                icon: "Award",
                title: "Master Decision-Making Under Pressure",
                description: "Learn to make critical decisions quickly and confidently in high-stakes business environments.",
            },
            {
                icon: "BookOpen",
                title: "Think Like a CEO Using Ivy League Case Method",
                description: "Apply the renowned Ivy League case method to analyze complex business problems like top executives.",
            },
            {
                icon: "Users",
                title: "Boost Communication & Team-Building Skills",
                description: "Enhance your ability to communicate effectively and build high-performing teams across cultures.",
            },
            {
                icon: "GraduationCap",
                title: "Receive CPD-Accredited Certificate",
                description: "Earn a certificate of participation signed by Ivy League professors, recognized globally for professional development.",
            },
        ],

        itinerary: [
            {
                day: 1,
                title: "Sunday - Welcome to Boston",
                activities: ["Arrival at Boston Logan Airport", "Meet participants", "Hotel check-in and settling", "Evening Orientation & Welcome Dinner"],
            },
            {
                day: 2,
                title: "Monday - Building Your Leadership Profile",
                activities: ["Workshop: Building Your Leadership Identity", "Team Challenge: Create your CEO Vision Board", "Afternoon Visit: Museum of Science, Boston"],
            },
            {
                day: 3,
                title: "Tuesday - Decision-Making in Leadership",
                activities: [
                    "Ivy League-style Masterclass: Strategic Decision-Making Under Pressure",
                    "Simulation: Solve a real leadership crisis",
                    "Afternoon Visit: Boston Aquarium",
                ],
            },
            {
                day: 4,
                title: "Wednesday - Speak Like a Leader",
                activities: ["Workshop: Public Speaking & Executive Presence", "Confidence, body language, influence exercises", "MIT University Tour"],
            },
            {
                day: 5,
                title: "Thursday - The Ivy League Experience",
                activities: ["Advanced Communication: The Art of Influence", "Ivy League Campus Tour", "Official Ivy League University Admission Tour"],
            },
            {
                day: 6,
                title: "Ivy League Exploration Begins",
                activities: ["Morning: Yale University Admission Tour", "Afternoon: Princeton University Tour", "Evening: Explore Times Square, New York City"],
            },
            {
                day: 7,
                title: "Saturday - New York Adventure",
                activities: [
                    "Statue of Liberty",
                    "Wall Street Financial District",
                    "Brooklyn Bridge",
                    "Vanderbilt Summit",
                    "Brooklyn Bridge Walk",
                    "Times Square + NBA/Apple Store visits",
                ],
            },
            {
                day: 8,
                title: "Sunday - Shopping & Cultural Day",
                activities: ["Full-day outlet shopping experience", "Cultural exploration and social activities"],
            },
            {
                day: 9,
                title: "Monday - Entrepreneurship Bootcamp",
                activities: ["Class: Entrepreneurship – From Idea to Action", "Simulation: Shark Tank Challenge", "Guest Speaker: Entrepreneur or Ivy League innovator"],
            },
            {
                day: 10,
                title: "Tuesday - From Idea to Empire",
                activities: ["Workshop: Building & Pitching Your Start-Up", "Team pitch practice", "Afternoon: Tax-free mall shopping"],
            },
            {
                day: 11,
                title: "Wednesday - Technology, AI & the Future",
                activities: ["Class: Artificial Intelligence & the CEO of Tomorrow", "Group Work: Using innovation to drive impact", "Dinner & Reflection"],
            },
            {
                day: 12,
                title: "Thursday - Graduation Day",
                activities: ["Final Presentations: Future CEO Project", "Celebration Lunch", "Certificate Ceremony & Awards", "Farewell Dinner & Photos"],
            },
            {
                day: 13,
                title: "Friday - Departure",
                activities: ["Breakfast & Check-out", "Airport Transfer"],
            },
        ],

        features: ["Ivy League Professors", "CPD-Accredited Certificate", "Real CEO Simulations", "Ivy League Tours"],
    },

    // Template for future universities
    // stanford: { ... },
    // yale: { ... },
    // oxford: { ... },
};

export default futureCEOConfigs;
