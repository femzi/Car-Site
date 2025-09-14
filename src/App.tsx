import './index.css'
import TargetCursor from './components/TargetCursor';
function App() {


  return (
    <>
<div className="row pt-6 pl-10 pb-3 bg-[#0F0F0F] text-white font-mono"> 
<div>
    <h1 className="text-2xl  font-bold mr-45 ">
 LUXE MOTION
  </h1>
</div>
<div>

      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      
<ul className="row">
  <li className=" cursor-target hovering" ><a href="">Home</a></li>
    <li className="ml-15 cursor-target hovering" ><a href="">Our Services</a></li>
      <li className="ml-15 cursor-target hovering" ><a href="">About Us</a></li>
        <li className="ml-15 cursor-target hovering" ><a href="">Why Us?</a></li>
  <li className="ml-15 cursor-target hovering" ><a href="">Contact Us</a></li>
</ul>
</div>
  
</div>
    </>
  )
}

export default App
