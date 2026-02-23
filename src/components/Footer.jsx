export default function Footer() {
  return (
    <footer className="bg-[#101828] text-gray-400 py-16 px-6 sm:px-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white font-bold text-xl mb-4 text-brand-orange">INFNOVA Academy</h3>
          <p className=" leading-relaxed">
            Empowering learners worldwide with cutting-edge technology courses. 
            <br /> Start your journey to success with expert-led training.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>

          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-16 pt-8 border-t border-gray-800 text-center text-sm">
        © 2026 INFNOVA Technologies. All rights reserved.
      </div>
    </footer>
  );
}