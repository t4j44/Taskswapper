
import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pointPackages = [
    { points: 500, price: 5, popular: false },
    { points: 1200, price: 10, popular: true, bonus: '200 bonus points!' },
    { points: 2500, price: 20, popular: false, bonus: '500 bonus points!' },
    { points: 7000, price: 50, popular: false, bonus: '2000 bonus points!' },
];

const PurchasePointsPage: React.FC = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-slate-900">Purchase Points</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                    Need more points to get your task done? Choose a package below to top up your wallet.
                </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pointPackages.map((pkg, index) => (
                    <Card key={index} className={`relative flex flex-col text-center ${pkg.popular ? 'border-2 border-primary' : ''}`}>
                        {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Most Popular
                            </div>
                        )}
                        <div className="flex-grow">
                            <h2 className="text-2xl font-bold text-primary">{pkg.points.toLocaleString()}</h2>
                            <p className="text-slate-600">Points</p>
                             {pkg.bonus && (
                                <p className="text-secondary font-semibold mt-2">{pkg.bonus}</p>
                            )}
                        </div>
                        <div className="mt-6">
                            <p className="text-4xl font-bold text-slate-900">${pkg.price}</p>
                            <Button variant={pkg.popular ? 'primary' : 'secondary'} className="w-full mt-6">
                                Purchase
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
             <div className="mt-12 text-center text-sm text-slate-500">
                <p>Payments are securely processed. This is a demonstration and no actual payment will be taken.</p>
            </div>
        </div>
    );
};

export default PurchasePointsPage;
