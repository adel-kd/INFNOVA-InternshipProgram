import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import levelBadgeColors from '../utils/levelBadgeColors.js';

const CourseCard = ({ course }) => {
  if (!course) return null;

  const handleImageError = e => {
    e.target.src = 'https://placehold.co/600x400/F95A2C/white?text=Infnova+Course';
  };

  const badgeBg = levelBadgeColors[course.level] || '#F3F4F6';

  return (
    <Link
      to={`/courses/${course.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-lg text-[11px] font-bold shadow-sm"
          style={{ 
            backgroundColor: badgeBg, 
            color: 'black', 
            filter: 'brightness(0.4)', 
            backgroundColor: badgeBg 
          }}
        >
          <span style={{ filter: 'brightness(0.5)' }}>{course.level}</span>
        </div>
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-lg text-[11px] font-bold shadow-sm"
          style={{ backgroundColor: badgeBg, color: 'rgba(0,0,0,0.7)' }}
        >
          {course.level}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-brand-orange text-[11px] font-extrabold uppercase tracking-widest mb-2">
          {course.category}
        </p>
        <h3 className="text-gray-900 font-bold text-xl mb-3 line-clamp-2 leading-tight group-hover:text-brand-orange transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Instructor: <span className="text-gray-800 font-medium">{course.instructor}</span>
        </p>

        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center text-gray-500 text-sm font-medium">
          <div className="flex items-center gap-1.5 mr-6">
            <Clock size={16} className="text-gray-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={16} className="text-gray-400" />
            <span>{course.enrolled?.toLocaleString()}</span>
          </div>
          
          <div className="ml-auto flex items-center gap-1 text-gray-500 font-bold">
            <Star size={18} className="text-yellow-400" fill="currentColor" />
            <span>{course.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;