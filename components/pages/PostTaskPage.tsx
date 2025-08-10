
import React, { useState } from 'react';
import { TASK_CATEGORIES } from '../../constants';
import { TaskDifficulty } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';

const PostTaskPage: React.FC = () => {
    const [rewardType, setRewardType] = useState<'points' | 'swap'>('points');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        alert('Task submitted successfully! (This is a demo)');
    };

    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
            <Card>
                <h1 className="text-3xl font-bold mb-2 text-center">Post a New Task</h1>
                <p className="text-slate-600 text-center mb-8">Describe what you need help with and how you'd like to reward the helper.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-slate-700">Task Title</label>
                        <input type="text" id="title" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="e.g., 'Help me build a shelf'" />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-slate-700">Category</label>
                        <select id="category" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm">
                            {TASK_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-slate-700">Description</label>
                        <textarea id="description" rows={4} required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Provide as much detail as possible..."></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">Difficulty Level</label>
                        <div className="mt-2 flex space-x-4">
                            {Object.values(TaskDifficulty).map(diff => (
                                <label key={diff} className="flex items-center">
                                    <input type="radio" name="difficulty" value={diff} className="focus:ring-primary h-4 w-4 text-primary border-slate-300" />
                                    <span className="ml-2 text-sm text-slate-700">{diff}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">Reward</label>
                        <div className="mt-2 flex space-x-4">
                             <label className="flex items-center">
                                <input type="radio" name="rewardType" value="points" checked={rewardType === 'points'} onChange={() => setRewardType('points')} className="focus:ring-primary h-4 w-4 text-primary border-slate-300" />
                                <span className="ml-2 text-sm text-slate-700">Offer Points</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="rewardType" value="swap" checked={rewardType === 'swap'} onChange={() => setRewardType('swap')} className="focus:ring-primary h-4 w-4 text-primary border-slate-300" />
                                <span className="ml-2 text-sm text-slate-700">Swap a Skill</span>
                            </label>
                        </div>
                        {rewardType === 'points' && (
                             <div className="mt-4">
                                <label htmlFor="points" className="block text-sm font-medium text-slate-700">Points</label>
                                <input type="number" id="points" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="e.g., 150" />
                            </div>
                        )}
                        {rewardType === 'swap' && (
                             <div className="mt-4">
                                <label htmlFor="swapSkill" className="block text-sm font-medium text-slate-700">Skill to Swap</label>
                                <input type="text" id="swapSkill" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="e.g., 'I can offer one hour of marketing consultation'" />
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-slate-700">Location</label>
                        <input type="text" id="location" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="e.g., 'Remote' or 'City Name'" />
                    </div>

                     <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-slate-700">Tags</label>
                        <input type="text" id="tags" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="e.g., design, logo, branding (comma-separated)" />
                         <p className="mt-1 text-xs text-slate-500">Comma-separated tags to help others find your task.</p>
                    </div>

                    <div className="text-right">
                        <Button type="submit" variant="primary">Submit Task</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default PostTaskPage;
