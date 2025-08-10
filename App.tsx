
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import BrowseTasksPage from './components/pages/BrowseTasksPage';
import PostTaskPage from './components/pages/PostTaskPage';
import LeaderboardPage from './components/pages/LeaderboardPage';
import ProfilePage from './components/pages/ProfilePage';
import MessagesPage from './components/pages/MessagesPage';
import HowItWorksPage from './components/pages/HowItWorksPage';
import AboutUsPage from './components/pages/AboutUsPage';
import ContactPage from './components/pages/ContactPage';
import PurchasePointsPage from './components/pages/PurchasePointsPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen font-sans text-slate-800">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/browse" element={<BrowseTasksPage />} />
                        <Route path="/post" element={<PostTaskPage />} />
                        <Route path="/leaderboard" element={<LeaderboardPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/how-it-works" element={<HowItWorksPage />} />
                        <Route path="/about" element={<AboutUsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/purchase-points" element={<PurchasePointsPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
