import React from 'react';

interface UserProfileProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden md:block text-right">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
      <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-gray-200">
        <img 
          src={imageUrl} 
          alt={name} 
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};