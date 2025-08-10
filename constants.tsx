
import React from 'react';
import { Task, User, Review, TaskDifficulty } from './types';

export const DUMMY_USERS: User[] = [
    { id: 1, name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/id/1027/200/200', isVerified: true, skills: ['Graphic Design', 'Web Development', 'Illustration'], points: 1250, tasksCompleted: 15, memberSince: '2023-01-15' },
    { id: 2, name: 'Bob Williams', avatarUrl: 'https://picsum.photos/id/1005/200/200', isVerified: false, skills: ['Copywriting', 'SEO', 'Marketing'], points: 800, tasksCompleted: 10, memberSince: '2023-03-22' },
    { id: 3, name: 'Charlie Brown', avatarUrl: 'https://picsum.photos/id/1011/200/200', isVerified: true, skills: ['Gardening', 'Landscaping', 'DIY Repairs'], points: 1500, tasksCompleted: 20, memberSince: '2022-11-01' },
    { id: 4, name: 'Diana Prince', avatarUrl: 'https://picsum.photos/id/1012/200/200', isVerified: true, skills: ['Photography', 'Video Editing'], points: 950, tasksCompleted: 8, memberSince: '2023-05-10' },
];

export const DUMMY_TASKS: Task[] = [
    { id: 1, title: 'Design a logo for my new blog', description: 'I need a modern and minimalist logo for my tech blog. The name is "Code & Coffee".', userId: 2, category: 'Design', difficulty: TaskDifficulty.Medium, location: 'Remote', tags: ['logo', 'design', 'branding'], points: 200, swapSkill: null, createdAt: '2024-07-20' },
    { id: 2, title: 'Help me set up my vegetable garden', description: 'I have a small backyard and want to start a vegetable garden. Need advice on soil, seeds, and layout.', userId: 1, category: 'Home & Garden', difficulty: TaskDifficulty.Easy, location: 'Springfield', tags: ['gardening', 'outdoors'], points: null, swapSkill: 'A custom illustration', createdAt: '2024-07-19' },
    { id: 3, title: 'Write a short article about AI trends', description: 'Looking for a 500-word article on the latest trends in artificial intelligence for a non-technical audience.', userId: 3, category: 'Writing & Translation', difficulty: TaskDifficulty.Medium, location: 'Remote', tags: ['writing', 'ai', 'tech'], points: 150, swapSkill: null, createdAt: '2024-07-18' },
    { id: 4, title: 'Need professional photos of my handmade jewelry', description: 'I create handmade jewelry and need high-quality photos for my online shop.', userId: 4, category: 'Photography', difficulty: TaskDifficulty.Hard, location: 'Oakland', tags: ['photography', 'product', 'ecommerce'], points: 300, swapSkill: null, createdAt: '2024-07-17' },
    { id: 5, title: 'Assemble IKEA furniture', description: 'I have a new bookshelf and a desk from IKEA that need to be assembled. All tools are provided.', userId: 2, category: 'Home & Garden', difficulty: TaskDifficulty.Easy, location: 'Springfield', tags: ['diy', 'furniture', 'handyman'], points: 100, swapSkill: null, createdAt: '2024-07-16' },
    { id: 6, title: 'Proofread my college application essay', description: 'I need a fresh pair of eyes to check my 1000-word college application essay for grammar and clarity.', userId: 1, category: 'Writing & Translation', difficulty: TaskDifficulty.Medium, location: 'Remote', tags: ['proofreading', 'editing', 'writing'], points: null, swapSkill: 'A small website tweak (HTML/CSS)', createdAt: '2024-07-15' },
];

export const DUMMY_REVIEWS: Review[] = [
    { id: 1, reviewerId: 2, revieweeId: 1, rating: 5, comment: 'Alice did an amazing job on my website. Her design skills are top-notch!', date: '2024-06-10' },
    { id: 2, reviewerId: 3, revieweeId: 1, rating: 4, comment: 'Very helpful and professional. The logo was great, just took a little longer than expected.', date: '2024-05-21' },
    { id: 3, reviewerId: 1, revieweeId: 3, rating: 5, comment: 'Charlie is a gardening wizard! My backyard has never looked better. Highly recommend.', date: '2024-07-01' },
];

export const TASK_CATEGORIES = [
    'Design',
    'Writing & Translation',
    'Web Development',
    'Home & Garden',
    'Photography',
    'Marketing',
    'Tutoring',
    'Other'
];

export const ICONS = {
    menu: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    ),
    close: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    ),
    user: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    ),
    briefcase: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.92a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.95-.69l7.5-3.11a.75.75 0 01.6 0l7.5 3.11c.58.24.95.83.95 1.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75h.008zM12 4.5l.47.235a.75.75 0 00.56-.235l.25-.25a.75.75 0 011.06 0l.25.25a.75.75 0 00.56.236l.47-.236a.75.75 0 011.06 0l.25.25a.75.75 0 00.56.235l.47-.235a.75.75 0 011.06 0l.25.25a.75.75 0 00.56.236l.47-.236a.75.75 0 01.6.236l7.5 3.11M3.75 8.25l7.5-3.11a.75.75 0 01.6 0l7.5 3.11" />
        </svg>
    ),
    badgeCheck: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
    ),
     star: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
        </svg>
    ),
    wallet: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m12 3V9m-3 3V9" />
        </svg>
    ),
};
