import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
     
      <div className="w-full px-4 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo Section - Responsive scaling */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="INFNOVA" 
            className="w-32 h-auto md:w-48 transition-all" 
          />
        </Link>
        
        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-brand-orange transition-colors">Courses</Link>
          <Link to="#" className="hover:text-brand-orange transition-colors">About</Link>
          <Link to="#" className="hover:text-brand-orange transition-colors">Contact</Link>
        </div>

        {/* Buttons Section - Optimized for mobile */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-brand-orange font-semibold text-sm md:text-base px-2">
            Sign In
          </button>
          <button className="bg-brand-orange text-white px-3 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-xs md:text-sm hover:bg-orange-600 transition-all active:scale-95 whitespace-nowrap">
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}