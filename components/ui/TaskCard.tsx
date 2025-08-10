
import React from 'react';
import { Task, User, TaskDifficulty } from '../../types';
import { DUMMY_USERS } from '../../constants';
import Card from './Card';
import Badge from './Badge';

interface TaskCardProps {
    task: Task;
}

const difficultyColors: { [key in TaskDifficulty]: 'primary' | 'secondary' | 'gray' } = {
    [TaskDifficulty.Easy]: 'primary',
    [TaskDifficulty.Medium]: 'secondary',
    [TaskDifficulty.Hard]: 'gray',
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const user = DUMMY_USERS.find(u => u.id === task.userId);

    return (
        <Card className="flex flex-col h-full">
            <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-slate-500">{task.category}</span>
                    <Badge color={difficultyColors[task.difficulty]}>{task.difficulty}</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{task.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3">{task.description}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex justify-between items-center mb-3">
                     {task.points ? (
                        <div className="text-lg font-bold text-primary">
                            {task.points} Points
                        </div>
                    ) : (
                        <div className="text-md font-semibold text-secondary truncate" title={task.swapSkill || ''}>
                            Swap: {task.swapSkill}
                        </div>
                    )}
                </div>
                {user && (
                    <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full object-cover" src={user.avatarUrl} alt={user.name} />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-slate-900">{user.name}</p>
                            <p className="text-xs text-slate-500">View Profile</p>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default TaskCard;
