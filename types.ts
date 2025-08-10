
export enum TaskDifficulty {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard',
}

export interface User {
    id: number;
    name: string;
    avatarUrl: string;
    isVerified: boolean;
    skills: string[];
    points: number;
    tasksCompleted: number;
    memberSince: string;
}

export interface Review {
    id: number;
    reviewerId: number;
    revieweeId: number;
    rating: number; // 1 to 5
    comment: string;
    date: string;
}

export interface Task {
    id: number;
    title: string;
    description: string;
    userId: number;
    category: string;
    difficulty: TaskDifficulty;
    location: string;
    tags: string[];
    points: number | null;
    swapSkill: string | null;
    createdAt: string;
}
