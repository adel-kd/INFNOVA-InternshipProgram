import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  ArrowLeft, 
  Globe, 
  Award, 
  Smartphone, 
  Download, 
  BookOpen 
} from 'lucide-react';
import useFetch from '../hooks/useFetch';

export default function CourseDetails() {
  const { id } = useParams();
  const { data: course, loading, error } = useFetch(`https://infnova-course-api.vercel.app/api/courses/${id}`);

  const handleImageError = (e) => {
    e.target.src = "https://placehold.co/800x600/F95A2C/white?text=Infnova+Academy";
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F95A2C]"></div>
    </div>
  );

  if (error || !course) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <h2 className="text-xl font-bold text-red-500 mb-4">Course not found or API error</h2>
      <Link to="/" className="text-[#F95A2C] font-bold hover:underline">Return to Course List</Link>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-white border-b border-gray-100">
        <div className="w-full px-[50px] py-4">
          <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-[#F95A2C] transition-colors text-sm font-semibold">
            <ArrowLeft size={16} />
            <span>Back to Courses</span>
          </Link>
        </div>
      </div>

      <section className="bg-[#F95A2C] text-white py-14 w-full px-[50px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <p className="text-white/80 uppercase tracking-widest text-[10px] font-black mb-4">
              {course.category}
            </p>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-3xl leading-relaxed">
              {course.description}
            </p>
            
            <div className="flex flex-wrap gap-y-4 gap-x-8 text-sm font-bold mb-8">
              <div className="flex items-center gap-2">
                <Smartphone size={18} className="text-white/70" />
                <span>Instructor: <span className="font-black underline decoration-white/30">{course.instructor}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-white/70" />
                <span>{course.duration} weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-white/70" />
                <span>{course.enrolled?.toLocaleString()} enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400" fill="currentColor" />
                <span className="text-white/80">{course.rating} rating</span>
              </div>
            </div>

            <span className="inline-block bg-[#E0F2FE] text-[#0369A1] px-5 py-2 rounded-full text-xs font-black shadow-lg">
              {course.level} Level
            </span>
          </div>
          
          <div className="hidden lg:block relative group">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              onError={handleImageError}
              className="rounded-2xl shadow-2xl w-full object-cover h-72 border-4 border-white/10 transform transition duration-500 hover:scale-[1.02]" 
            />
          </div>
        </div>
      </section>

      
      <div className="w-full px-[50px] mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-gray-900 uppercase tracking-tight">
              <BookOpen className="text-[#F95A2C]" size={28} />
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Industry Standards", "Project-based learning", "System Architecture", "Best Practices", "Career Preparation"].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-gray-600 font-medium">
                  <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-black mb-6 text-gray-900 uppercase tracking-tight">Course Description</h2>
            <div className="text-gray-600 text-lg leading-loose space-y-4 font-medium">
              <p>{course.description}</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-black mb-8 text-gray-900 uppercase tracking-tight">Your Instructor</h2>
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-[#F95A2C] rounded-full flex items-center justify-center text-white font-black text-2xl shrink-0 shadow-lg shadow-orange-100">
                {course.instructor?.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">{course.instructor}</h4>
                <p className="text-gray-500 text-base leading-relaxed font-medium max-w-xl">
                  Senior {course.category} Lead with over 10 years of experience. Dedicated to empowering the next generation of developers through high-impact learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-2xl sticky top-28">
            <h3 className="text-3xl font-black text-gray-900 mb-2">Enroll Today</h3>
            <p className="text-gray-500 text-sm font-medium mb-10 italic">Join {course.enrolled?.toLocaleString()} students already learning</p>
            
            <div className="space-y-4 mb-10">
              <button className="w-full bg-[#F95A2C] text-white py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 active:scale-95">
                Enroll Now
              </button>
              <button className="w-full bg-white text-[#F95A2C] border-2 border-[#F95A2C]/20 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition-all">
                Add to Wishlist
              </button>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-gray-900 text-xs uppercase tracking-[0.2em]">This course includes:</h4>
              <ul className="space-y-5 text-base font-bold text-gray-600">
                <li className="flex items-center gap-4"><Clock size={20} className="text-green-500" /> {course.duration} weeks of content</li>
                <li className="flex items-center gap-4"><Globe size={20} className="text-green-500" /> Full lifetime access</li>
                <li className="flex items-center gap-4"><Award size={20} className="text-green-500" /> Certificate of completion</li>
                <li className="flex items-center gap-4"><Smartphone size={20} className="text-green-500" /> Access on all devices</li>
                <li className="flex items-center gap-4"><Download size={20} className="text-green-500" /> 15+ Resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}