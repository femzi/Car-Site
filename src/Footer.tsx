function Footer() {
  const linkClasses =
    "text-gray-400 hover:text-white transition-transform duration-300 transform hover:-translate-x-1 hover:rotate-y-12 origin-left";

  return (
 <>
   <footer className="hidden md:block  bg-[#0F0F0F] text-white px-20 py-16 font-mono">
      <div className="grid grid-cols-4 gap-10">
        {/* Brand + description */}
        <div>
          <h2 className="text-xl xl:text-2xl font-semibold">LuxeMotion</h2>
       
        </div>

        {/* Website links */}
        <div>
          <h3 className="font-semibold mb-4">Website</h3>
          <ul className="space-y-2">
            <li className={linkClasses}> Home</li>
            <li className={linkClasses}> Our services</li>
            <li className={linkClasses}> About us</li>
            <li className={linkClasses}> Why us?</li>
          </ul>
        </div>

        {/* Contact links */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className={linkClasses}> Get a quote</li>
            <li className={linkClasses}> Contact form</li>
            <li className={linkClasses}> Email us</li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li className={linkClasses}> Facebook</li>
            <li className={linkClasses}> Instagram</li>
            <li className={linkClasses}> Twitter</li>
            <li className={linkClasses}> YouTube</li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex justify-between items-center mt-12 text-sm text-gray-400">
        <p>LuxeMotion © 2025</p>
        <div className="flex space-x-6">
          <p className={linkClasses}> Cookie policy</p>
          <p className={linkClasses}> Terms of service</p>
          <p className={linkClasses}> Privacy policy</p>
        </div>
      </div>
    </footer>
 
 <footer className="block md:hidden lg:hidden xl:hidden bg-[#0F0F0F] text-white px-6 py-10 font-mono">
  <div className="space-y-6 text-center">
    <div>
      <h2 className="text-lg font-semibold">LuxeMotion</h2>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Links</h3>
      <ul className="space-y-1 flex flex-row text-sm text-gray-400">
        <li><a href="#" className="hover:text-white ml-5 pl-7">Home</a></li>
        <li><a href="#" className="hover:text-white pl-7">Services</a></li>
        <li><a href="#" className="hover:text-white pl-7">About</a></li>
        <li><a href="#" className="hover:text-white pl-7">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Follow Us</h3>
      <ul className="flex justify-center space-x-4 text-sm text-gray-400">
        <li><a href="#" className="hover:text-white">FB</a></li>
        <li><a href="#" className="hover:text-white">IG</a></li>
        <li><a href="#" className="hover:text-white">TW</a></li>
        <li><a href="#" className="hover:text-white">YT</a></li>
      </ul>
    </div>
  </div>
  <div className="mt-8 text-xs text-gray-500 text-center">
    <p>LuxeMotion © 2025</p>
  </div>
</footer>

 </>
    
  );
}

export default Footer;
 