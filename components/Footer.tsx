
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Task Swapper Marketplace</h3>
                        <p className="mt-2 text-sm">Swap Skills. Trade Tasks. No Cash Needed.</p>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-primary-400 transition-colors">How It Works</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-white">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Task Swapper Marketplace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
