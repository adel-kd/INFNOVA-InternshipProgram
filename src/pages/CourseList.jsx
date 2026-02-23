import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import CourseCard from '../components/CourseCard';
import SkeletonCard from '../components/SkeletonCard';
import { Search, ChevronDown } from 'lucide-react';

export default function CourseList() {
  const { data: courses, loading, error } = useFetch('https://infnova-course-api.vercel.app/api/courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Filtering logic for the search bar
  const filteredCourses = courses?.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  // derive unique categories and levels for dropdowns
  const categories = ['All', ...(new Set((courses || []).map(c => c.category)))];
  const levels = ['All', ...(new Set((courses || []).map(c => c.level)))];

  if (error) return (
    <div className="text-center py-20">
      <p className="text-red-500 font-bold text-xl">Error: {error}</p>
      <button onClick={() => window.location.reload()} className="mt-4 text-brand-orange underline">
        Try again
      </button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-orange text-white py-20 px-0 w-full">
        <div className="w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-7 tracking-tight px-6">
            Explore Our Courses
          </h1>
          <p className="text-3xl opacity-90 max-w-5xl leading-relaxed px-6">
            Master new skills with expert-led courses designed for the modern learner. 
            Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </section>

      <div className="w-full mt-6 px-[50px]">
        <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-wrap gap-4 items-center border border-gray-100">
          <div className="flex-grow relative min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses, instructors ..." 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
            />
          </div>
          
          {/* Category Select */}
          <div className="flex items-center gap-3">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 font-medium focus:outline-none">
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Level Select */}
          <div className="flex items-center gap-3">
            <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 font-medium focus:outline-none">
              {levels.map(lvl => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </div>
        </div>
       
        <div className="mt-6 mb-6 flex justify-between items-center px-[50px] w-full">
           <p className="text-gray-600 font-medium text-lg">
             Showing <span className="text-black font-bold">{loading ? '...' : filteredCourses?.length}</span> of {courses?.length || 0} courses
           </p>
           <div className="h-[2px] flex-grow mx-6 bg-gray-200 hidden md:block"></div>
         </div>
       </div>

       {/* Grid Section */}
      <section className="w-full pb-24 px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
           {loading ? (
            
             Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
           ) : (
             filteredCourses?.map(course => (
               <CourseCard key={course.id} course={course} />
             ))
           )}
         </div>

         {/* Empty State */}
         {!loading && filteredCourses?.length === 0 && (
           <div className="text-center py-20">
             <h3 className="text-2xl font-bold text-gray-400">No courses found matching "{searchTerm}"</h3>
             <button 
               onClick={() => setSearchTerm('')}
               className="mt-4 text-brand-orange font-bold hover:underline"
             >
               Clear all filters
             </button>
           </div>
         )}
       </section>
     </div>
   );
 }