import { Project } from "../core/models/project";

export const PROJECTS: Project[] = [
  {
    id: 1,

    title: 'Off The Chain Multiverse Studio',

    subtitle:
      'Full Stack Music Studio Management Platform',

    description:
      'A comprehensive platform for artist bookings, sessions, subscriptions and payments.',

    duration:
      'Jan 2025 - Apr 2025',

    users:
      '100+ Registered Users',

    category:
      'Web Application',

    liveDemo:
      'https://demo.com',

    github:
      'https://github.com',

    technologies: [
      'Angular 18',
      '.NET Core 8',
      'SQL Server',
      'JWT',
      'Tailwind CSS'
    ],

    screenshots: [
      'assets/projects/otcmvs/dashboard.png',
      'assets/projects/otcmvs/bookings.png',
      'assets/projects/otcmvs/payments.png',
      'assets/projects/otcmvs/users.png'
    ],

    problem:
      'Studios struggled to manage bookings and payments manually.',

    solution:
      'Created a centralized system for bookings, subscriptions and analytics.',

    features: [
      'Artist Management',
      'Booking Management',
      'Payments',
      'Subscriptions',
      'Reports'
    ],

    challenges: [
      'JWT Authentication',
      'Role-Based Access Control',
      'Dashboard Analytics'
    ],

    lessonsLearned: [
      'Importance of modular architecture',
      'Performance optimization',
      'Reusable component design'
    ]
  }
];