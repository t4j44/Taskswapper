
import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Your message has been sent! (This is a demo)');
    };

    return (
        <div className="bg-slate-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900">Get in Touch</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        Have a question, feedback, or need support? We're here to help.
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto">
                    <Card>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                <input type="text" id="name" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" id="email" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                                <input type="text" id="subject" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                <textarea id="message" rows={4} required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
                            </div>
                            <div className="text-right">
                                <Button type="submit" variant="primary">Send Message</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
