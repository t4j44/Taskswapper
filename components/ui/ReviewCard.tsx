
import React from 'react';
import { Review, User } from '../../types';
import { DUMMY_USERS, ICONS } from '../../constants';
import Card from './Card';

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    const reviewer = DUMMY_USERS.find(u => u.id === review.reviewerId);

    return (
        <Card className="mb-4">
            <div className="flex items-start">
                {reviewer && <img src={reviewer.avatarUrl} alt={reviewer.name} className="h-12 w-12 rounded-full object-cover mr-4" />}
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold">{reviewer?.name || 'Anonymous'}</p>
                            <p className="text-sm text-slate-500">{review.date}</p>
                        </div>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <ICONS.star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-slate-300'}`} />
                            ))}
                        </div>
                    </div>
                    <p className="mt-2 text-slate-700">{review.comment}</p>
                </div>
            </div>
        </Card>
    );
};

export default ReviewCard;
