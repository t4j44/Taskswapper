
import React, { useState, useMemo } from 'react';
import { DUMMY_TASKS, TASK_CATEGORIES } from '../../constants';
import { TaskDifficulty } from '../../types';
import TaskCard from '../ui/TaskCard';

const BrowseTasksPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [difficulty, setDifficulty] = useState('All');
    const [location, setLocation] = useState('');

    const filteredTasks = useMemo(() => {
        return DUMMY_TASKS.filter(task => {
            const matchesSearchTerm = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase()) || task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = category === 'All' || task.category === category;
            const matchesDifficulty = difficulty === 'All' || task.difficulty === difficulty;
            const matchesLocation = location === '' || task.location.toLowerCase().includes(location.toLowerCase());

            return matchesSearchTerm && matchesCategory && matchesDifficulty && matchesLocation;
        });
    }, [searchTerm, category, difficulty, location]);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Browse Tasks</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="w-full">
                    <label htmlFor="search" className="block text-sm font-medium text-slate-700">Search by keyword/tag</label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 px-3"
                        placeholder="e.g., 'logo design'"
                    />
                </div>
                <div className="w-full">
                     <label htmlFor="category" className="block text-sm font-medium text-slate-700">Category</label>
                    <select id="category" value={category} onChange={e => setCategory(e.target.value)} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 px-3">
                        <option>All</option>
                        {TASK_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                </div>
                 <div className="w-full">
                    <label htmlFor="difficulty" className="block text-sm font-medium text-slate-700">Difficulty</label>
                    <select id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 px-3">
                        <option>All</option>
                        {Object.values(TaskDifficulty).map(diff => <option key={diff}>{diff}</option>)}
                    </select>
                </div>
                <div className="w-full">
                     <label htmlFor="location" className="block text-sm font-medium text-slate-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 px-3"
                        placeholder="e.g., 'Remote' or 'Springfield'"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map(task => <TaskCard key={task.id} task={task} />)
                ) : (
                    <p className="text-center text-slate-500 col-span-full">No tasks match your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default BrowseTasksPage;
