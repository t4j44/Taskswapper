
import React from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_USERS, DUMMY_REVIEWS, ICONS } from '../../constants';
import { User } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ReviewCard from '../ui/ReviewCard';
import Button from '../ui/Button';

const ProfilePage: React.FC = () => {
    // For demonstration, we'll just show the first user's profile.
    const user: User | undefined = DUMMY_USERS[0];
    const reviews = DUMMY_REVIEWS.filter(r => r.revieweeId === user?.id);

    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: User Info */}
                <div className="md:col-span-1 space-y-8">
                    <Card className="text-center">
                        <img className="h-32 w-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary" src={user.avatarUrl} alt={user.name} />
                        <h1 className="text-2xl font-bold flex items-center justify-center">
                            {user.name}
                            {user.isVerified && <ICONS.badgeCheck className="h-6 w-6 text-blue-500 ml-2" />}
                        </h1>
                        <p className="text-slate-500">Member since {new Date(user.memberSince).toLocaleDateString()}</p>
                    </Card>
                     <Card>
                        <h2 className="text-xl font-bold mb-4 flex items-center"><ICONS.wallet className="h-6 w-6 mr-2 text-primary"/> Wallet</h2>
                        <div className="text-3xl font-bold text-center text-primary">{user.points.toLocaleString()}</div>
                        <p className="text-center text-slate-500 mb-4">Points</p>
                        <Link to="/purchase-points">
                            <Button variant="secondary" className="w-full">Purchase Points</Button>
                        </Link>
                    </Card>
                    <Card>
                        <h2 className="text-xl font-bold mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {user.skills.map(skill => (
                                <Badge key={skill} color="primary">{skill}</Badge>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right Column: Reviews & Activity */}
                <div className="md:col-span-2">
                     <Card>
                        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                        {reviews.length > 0 ? (
                            reviews.map(review => <ReviewCard key={review.id} review={review} />)
                        ) : (
                            <p className="text-slate-500">No reviews yet.</p>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
