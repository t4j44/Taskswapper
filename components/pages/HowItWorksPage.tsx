
import React from 'react';
import Card from '../ui/Card';

const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900">How Task Swapper Works</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        A simple, cash-free way to get things done and share your talents.
                    </p>
                </div>

                <div className="mt-20 space-y-16">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <Card className="bg-primary-50">
                                <h2 className="text-3xl font-bold text-primary mb-4">Step 1: Post, Browse, or Offer</h2>
                                <p className="text-lg text-slate-700">
                                    <strong>Need something done?</strong> Post a task with a clear description. You can offer points or suggest a skill you're willing to trade in return.
                                    <br/><br/>
                                    <strong>Want to help?</strong> Browse the marketplace for tasks that match your skills. Filter by category, difficulty, or location to find your next project.
                                </p>
                            </Card>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://picsum.photos/id/10/600/400" alt="Person browsing tasks on a laptop" className="rounded-lg shadow-xl"/>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                         <div className="md:w-1/2">
                            <Card className="bg-secondary-50">
                                <h2 className="text-3xl font-bold text-secondary mb-4">Step 2: Connect and Agree</h2>
                                <p className="text-lg text-slate-700">
                                    Once you find a task or someone accepts your offer, use our secure messaging system to chat. Discuss the details, agree on the terms (points or skill swap), and set a timeline. Communication is key!
                                </p>
                            </Card>
                        </div>
                        <div className="md:w-1/2">
                           <img src="https://picsum.photos/id/23/600/400" alt="Two people shaking hands" className="rounded-lg shadow-xl"/>
                        </div>
                    </div>

                    {/* Step 3 */}
                     <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <Card className="bg-slate-100">
                                <h2 className="text-3xl font-bold text-slate-800 mb-4">Step 3: Complete, Review, and Earn</h2>
                                <p className="text-lg text-slate-700">
                                    After the task is completed, both parties mark it as done. Leave a review and a rating to build trust and accountability within the community.
                                    <br/><br/>
                                    If the task was for points, they'll be automatically transferred to your wallet. You can then use these points to get your own tasks done!
                                </p>
                            </Card>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://picsum.photos/id/42/600/400" alt="Person giving a thumbs up" className="rounded-lg shadow-xl"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowItWorksPage;
