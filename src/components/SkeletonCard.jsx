export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 bg-gray-200"></div>
      
      <div className="p-5 space-y-4">
        {/* Category placeholder */}
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        
        {/* Title placeholder */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        
        {/* Instructor placeholder */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        
        {/* Footer stats placeholder */}
        <div className="pt-4 border-t border-gray-50 flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}