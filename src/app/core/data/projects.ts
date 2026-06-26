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

    heroImage:"..//public/otcmvs-db.png",

    gallery: [
        '..//public/otcmvs-db.png',
        '..//public/otcmvs-um.png',
        '..//public/otcmvs-sm.png',
        '..//public/otcmvs-subm.png',
        '..//public/otcmvs-pmnt.png'
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
        },

        {
            title:"User Management",

            description:
            "Secure role-based access for admins and staff...",

            icon:"credit-card"
        },

        {
            title:"Analytics Dashboard",

            description:
            " View booking trends and revenue statistics",

            icon:"credit-card"
        }

    ],

    architecture: {

    frontend: "Angular 18",

    backend: "ASP.NET Core 8",

    api: "RESTful API",

    database: "SQL Server",

    authentication: "JWT Authentication",

    patterns: [

        "Repository Pattern",

        "Dependency Injection",

        "Clean Architecture",

        "Entity Framework Core",

        "Role-Based Authorization"

    ]

},

    challenges: [

{

    title:"Booking Conflicts",

    problem:
    "Artists could accidentally book the same recording slot.",

    solution:
    "Implemented server-side validation together with real-time availability checking.",

    impact:
    "Prevented duplicate bookings."

},

{

    title:"Payment Tracking",

    problem:
    "Payments were difficult to reconcile manually.",

    solution:
    "Built transaction history with payment statuses and invoice generation.",

    impact:
    "Improved payment visibility."

},

{

    title:"Scalability",

    problem:
    "The application needed to support future modules.",

    solution:
    "Implemented Clean Architecture and dependency injection.",

    impact:
    "Made the system modular and easier to extend."

}

],

    lessons: {

    technical: [

        "Improved understanding of Angular standalone architecture",

        "Applied Clean Architecture principles",

        "Optimized SQL queries for better performance",

        "Implemented JWT authentication securely"

    ],

    process: [

        "Designed reusable Angular components",

        "Separated concerns between UI and business logic",

        "Created reusable DTOs and services",

        "Improved API documentation"

    ],

    future: [

        "Integrate SignalR for real-time updates",

        "Deploy on Azure App Service",

        "Add CI/CD pipelines",

        "Introduce automated testing"

    ]

}

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