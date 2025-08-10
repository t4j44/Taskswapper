
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { DUMMY_TASKS } from '../../constants';
import TaskCard from '../ui/TaskCard';
import Card from '../ui/Card';

const HomePage: React.FC = () => {
    const featuredTasks = DUMMY_TASKS.slice(0, 3);

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <div className="bg-white">
                <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        <span className="block">Swap Skills. Trade Tasks.</span>
                        <span className="block text-primary">No Cash Needed.</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-xl text-slate-600 sm:max-w-3xl">
                        Join a community where your skills are your currency. Get help, offer your talents, and earn points on the Task Swapper Marketplace.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                        <Link to="/post">
                            <Button variant="primary" className="w-full sm:w-auto">Post a Task</Button>
                        </Link>
                        <Link to="/browse">
                            <Button variant="secondary" className="w-full sm:w-auto mt-4 sm:mt-0">Browse Tasks</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Featured Tasks Section */}
            <div className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Tasks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredTasks.map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <Card>
                            <h3 className="text-xl font-semibold mb-2">1. Post a Task</h3>
                            <p className="text-slate-600">Need help? Describe the task, and offer to swap a skill or pay with points.</p>
                        </Card>
                         <Card>
                            <h3 className="text-xl font-semibold mb-2">2. Find a Match</h3>
                            <p className="text-slate-600">Browse tasks you can do, or get matched with someone who needs your skills.</p>
                        </Card>
                         <Card>
                            <h3 className="text-xl font-semibold mb-2">3. Get It Done</h3>
                            <p className="text-slate-600">Complete the task, get reviewed, and earn points to spend on other services.</p>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Premium Subscription Section */}
            <div className="py-16 sm:py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Card className="bg-slate-800 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Unlock Your Full Potential</h2>
                        <p className="text-slate-300 mb-6">Go premium to unlock advanced filters, highlight your profile, and get priority access to new task listings.</p>
                        <Button variant="secondary">Learn More About Premium</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
