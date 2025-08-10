
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ICONS } from '../constants';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const activeLinkClasses = "bg-primary text-white";
    const inactiveLinkClasses = "text-slate-300 hover:bg-slate-700 hover:text-white";

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
        `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;

    const navLinks = (
        <>
            <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
            <NavLink to="/browse" className={getNavLinkClass}>Browse Tasks</NavLink>
            <NavLink to="/post" className={getNavLinkClass}>Post Task</NavLink>
            <NavLink to="/leaderboard" className={getNavLinkClass}>Leaderboard</NavLink>
            <NavLink to="/profile" className={getNavLinkClass}>My Profile</NavLink>
            <NavLink to="/messages" className={getNavLinkClass}>Messages</NavLink>
        </>
    );

    return (
        <header className="bg-slate-800 shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 text-white text-xl font-bold">
                           <ICONS.briefcase className="h-8 w-8 text-primary-400" />
                           <span>TaskSwapper</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-slate-700 p-2 text-slate-400 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <ICONS.close className="block h-6 w-6" /> : <ICONS.menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 flex flex-col">
                        {navLinks}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
