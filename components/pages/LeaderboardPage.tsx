
import React, { useMemo } from 'react';
import { DUMMY_USERS, ICONS } from '../../constants';
import Card from '../ui/Card';

const LeaderboardPage: React.FC = () => {
    const sortedUsers = useMemo(() => {
        return [...DUMMY_USERS].sort((a, b) => b.points - a.points);
    }, []);

    const getTrophyColor = (rank: number) => {
        if (rank === 0) return 'text-yellow-400';
        if (rank === 1) return 'text-slate-400';
        if (rank === 2) return 'text-amber-600';
        return 'text-slate-300';
    };

    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Leaderboard</h1>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">See who the top contributors are in the Task Swapper community. Earn points by completing tasks to climb the ranks!</p>

            <Card>
                <ul className="divide-y divide-slate-200">
                    {sortedUsers.map((user, index) => (
                        <li key={user.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                            <div className="flex items-center">
                                <span className="text-lg font-bold w-10 text-slate-500">{index + 1}</span>
                                <img className="h-12 w-12 rounded-full object-cover" src={user.avatarUrl} alt={user.name} />
                                <div className="ml-4">
                                    <p className="text-base font-semibold text-slate-900 flex items-center">
                                        {user.name}
                                        {user.isVerified && <ICONS.badgeCheck className="h-5 w-5 text-blue-500 ml-2" />}
                                    </p>
                                    <p className="text-sm text-slate-500">{user.tasksCompleted} tasks completed</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="font-bold text-primary text-lg">{user.points.toLocaleString()} pts</span>
                                {index < 3 && (
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ml-4 ${getTrophyColor(index)}`}>
                                        <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3.375a.75.75 0 01.75 0v3.375h3.375a.75.75 0 010 1.5h-3.375V15a.75.75 0 01-1.5 0v-3.375H4.5a.75.75 0 010-1.5h3.375V7.125a.75.75 0 01.75-.75zM12.75 8.625a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default LeaderboardPage;
