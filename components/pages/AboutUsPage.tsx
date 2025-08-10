
import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base font-semibold tracking-wide text-primary uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        We believe in the power of community.
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Our mission is to create a world where everyone's skills are valued and can be exchanged freely, fostering a more collaborative and resourceful society.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="prose prose-lg text-gray-500 mx-auto">
                        <p>
                            Task Swapper Marketplace was born from a simple idea: what if we could help each other out without money changing hands? In a world of gig economies and side hustles, we saw an opportunity to build a platform based on mutual benefit and human connection, not just financial transactions.
                        </p>
                        <p>
                            We are a small, passionate team of developers, designers, and community builders who believe that everyone has something valuable to offer. Whether you're a student who can help with calculus in exchange for guitar lessons, a retiree who can offer gardening advice for help with tech, or a professional looking to trade services, this is the place for you.
                        </p>
                        <p>
                            Our platform is built on trust, transparency, and the spirit of collaboration. We are dedicated to creating a safe and reliable environment for our members to connect, share, and grow.
                        </p>
                        <h3 className="text-center font-bold text-2xl text-slate-800 mt-12">Join us in building a more connected community, one task at a time.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
