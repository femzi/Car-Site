import './index.css'
import TargetCursor from './components/TargetCursor';

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between pt-6 px-6 md:px-10 pb-3 bg-[#0F0F0F] text-white font-mono"> 
        {/* Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="lg:text-2xl xl:text-2xl font-bold">
            LUXE MOTION
          </h1>
        </div>

        {/* Cursor & Nav */}
        <div className="flex flex-col md:flex-row items-center">
          <TargetCursor 
            spinDuration={2}
            hideDefaultCursor={true}
          />
          
          <ul className="flex flex-col md:flex-row md:space-x-8 lg:text-lg xl:text-lg">
            <li className="cursor-target hovering"><a href="">Home</a></li>
            <li className="cursor-target hovering"><a href="">Our Services</a></li>
            <li className="cursor-target hovering"><a href="">About Us</a></li>
            <li className="cursor-target hovering"><a href="">Why Us?</a></li>
            <li className="cursor-target hovering"><a href="">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
