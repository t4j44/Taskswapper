
import React from 'react';
import Card from '../ui/Card';
import { DUMMY_USERS } from '../../constants';

const MessagesPage: React.FC = () => {
    const conversations = DUMMY_USERS.slice(1, 4); // Mock conversations
    const selectedUser = conversations[0];

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Messages</h1>
            <Card className="!p-0">
                <div className="flex h-[600px]">
                    {/* Conversations List */}
                    <div className="w-1/3 border-r border-slate-200">
                        <div className="p-4 border-b border-slate-200">
                            <h2 className="text-xl font-semibold">Chats</h2>
                        </div>
                        <ul className="divide-y divide-slate-200 overflow-y-auto h-[calc(600px-61px)]">
                            {conversations.map(user => (
                                <li key={user.id} className={`p-4 flex items-center cursor-pointer hover:bg-slate-100 ${user.id === selectedUser.id ? 'bg-primary-50' : ''}`}>
                                    <img src={user.avatarUrl} alt={user.name} className="h-12 w-12 rounded-full object-cover"/>
                                    <div className="ml-4">
                                        <p className="font-bold">{user.name}</p>
                                        <p className="text-sm text-slate-500 truncate">Okay, sounds good! I'll see you then.</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Chat Window */}
                    <div className="w-2/3 flex flex-col">
                        <div className="p-4 border-b border-slate-200 flex items-center">
                            <img src={selectedUser.avatarUrl} alt={selectedUser.name} className="h-10 w-10 rounded-full object-cover"/>
                            <h3 className="text-lg font-bold ml-3">{selectedUser.name}</h3>
                        </div>
                        <div className="flex-grow p-6 overflow-y-auto bg-slate-50 space-y-4">
                             {/* Mock messages */}
                             <div className="flex justify-end">
                                <div className="bg-primary text-white p-3 rounded-lg max-w-md">Hey! I'm interested in the IKEA furniture task. Is it still available?</div>
                             </div>
                             <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-lg max-w-md border border-slate-200">Yes, it is! Are you free this weekend?</div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-primary text-white p-3 rounded-lg max-w-md">Saturday works for me. I can be there around 1 PM.</div>
                             </div>
                              <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-lg max-w-md border border-slate-200">Okay, sounds good! I'll see you then.</div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-200">
                            <input type="text" placeholder="Type a message..." className="w-full rounded-full border-slate-300 focus:ring-primary focus:border-primary" />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MessagesPage;
