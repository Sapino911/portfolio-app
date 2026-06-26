import { Project } from "../models/project.model";


export const PROJECTS: Project[] = [
{
    id:1,

    title:"Off The Chain Multiverse Studio",

    subtitle:"Full Stack Music Studio Management Platform",

    description:
    "Comprehensive platform for managing artists, bookings, subscriptions and payments.",

    duration:"January 2025 - April 2025",

    status:"Completed",

    category:"Enterprise Web Application",

    teamSize:"1 Developer",

    users:"100+",

    thumbnail:"assets/projects/otcmvs/thumb.png",

    heroImage:"assets/projects/otcmvs/dashboard.png",

    gallery:[
        "assets/projects/otcmvs/dashboard.png",
        "assets/projects/otcmvs/bookings.png",
        "assets/projects/otcmvs/payments.png",
        "assets/projects/otcmvs/reports.png"
    ],

    github:"GitHub",
    liveDemo:"Live Demo",

    technologies:[

        {
            name:"Angular 18",
            color:"bg-red-500"
        },

        {
            name:".NET Core 8",
            color:"bg-violet-500"
        },

        {
            name:"SQL Server",
            color:"bg-orange-500"
        },

        {
            name:"JWT",
            color:"bg-blue-500"
        }

    ],

    overview:{

        problem:
        "Studios managed bookings, subscriptions and payments manually.",

        solution:
        "Developed a centralized web application using Angular and ASP.NET Core.",

        outcome:
        "Reduced manual administration while improving artist management."

    },

    features:[

        {
            title:"Booking Management",

            description:
            "Artists can book available sessions online.",

            icon:"calendar"
        },

        {
            title:"Subscription Management",

            description:
            "Manage monthly studio memberships.",

            icon:"credit-card"
        }

    ],

    architecture:{

        frontend:"Angular 18",

        backend:"ASP.NET Core 8",

        database:"SQL Server",

        authentication:"JWT"

    },

    challenges:[

        {

            title:"Preventing double bookings",

            solution:
            "Implemented server-side booking validation."

        },

        {

            title:"Payment tracking",

            solution:
            "Built transaction history with status updates."

        }

    ],

    lessons:[

        "Importance of clean architecture",

        "Optimizing SQL queries",

        "Angular standalone components",

        "Role-based authentication"

    ]

}

/* {
    id: 1,

    title: "Off The Chain Multiverse Studio",

    subtitle: "Full Stack Music Studio Management Platform",

    description: "A comprehensive platform for managing artists, studio sessions, bookings, payments and analytics.",

    duration: "Jan 2025 - Apr 2025",

    status: "In Progress",

    category: "Enterprise Web Application",

    image: "..//public/otcmvs-db.png",

    gallery: [
        '..//public/otcmvs-db.png',
        '..//public/otcmvs-um.png',
        '..//public/otcmvs-sm.png',
        '..//public/otcmvs-subm.png',
        '..//public/otcmvs-pmnt.png'
    ],

    technologies: [
        "Angular 18",
        ".NET Core 8",
        "SQL Server",
        "TailwindCSS",
        "JWT",
        "Stripe"
    ],

    github: "GitHub",
    liveDemo: "Live Demo",
    teamSize: "",
    features: [],
    challenges: [],
    lessons: [],
    architecture: {
        frontend: "",
        backend: "",
        database: ""
    }
},
{
    id: 2,

    title: "Inventory App",

    subtitle: "Full Stack Music Studio Management Platform",

    description: "A comprehensive platform for managing artists, studio sessions, bookings, payments and analytics.",

    duration: "Jan 2025 - Apr 2025",

    status: "In Progress",

    category: "Enterprise Web Application",

    image: "..//public/otcmvs-db.png",

    gallery: [
        '..//public/otcmvs-db.png',
        '..//public/otcmvs-um.png',

        '..//public/otcmvs-sm.png',
        '..//public/otcmvs-subm.png',
        '..//public/otcmvs-pmnt.png'
    ],

    technologies: [
        "Angular 18",
        ".NET Core 8",
        "SQL Server",
        "TailwindCSS",
        "JWT",
        "Stripe"
    ],

    github: "",
    liveDemo: "",
    teamSize: "",
    features: [],
    challenges: [],
    lessons: [],
    architecture: {
        frontend: "",
        backend: "",
        database: ""
    }
}, */

];