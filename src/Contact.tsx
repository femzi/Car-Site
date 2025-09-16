import car from './assets/ContactCard.svg';
function Contact() {
  return (
<>
  <div className="pl-14 hidden lg:block xl:block bg-[#0F0F0F] pb-20 pr-15 text-[#FFFFFF] font-mono">
      <div className="relative w-full">
        {/* Image as background */}
        <img src={car} alt="Contact" className="w-full rounded-2xl  " />

        {/* Overlay content */}
        <div className="absolute inset-0 pt-20   pl-15">
          <p className="text-5xl font-bold mb-5 ">Contact Us</p>
          <p className="text-gray-400 lg:mb-15 xl:mb-40">
            Feel free to contact us at any time <br />
            We will get back to you as soon as possible
          </p>
        <div className='flex flex-col '>

            <input className='ml-10 pl-5 pt-3 pb-3 mr-100 mb-9 rounded-2xl bg-[#0F0F0F] text-white font-mono' type="text" placeholder='Your Name' />
          <input className='ml-10 pl-5 pt-3 pb-3 mr-100 mb-9 rounded-2xl bg-[#0F0F0F] text-white font-mono' type="text" placeholder='E-mail  Address' />
          <input className='ml-10 pl-5 pt-3 pb-3 mr-100 rounded-2xl bg-[#0F0F0F] text-white font-mono' type="text" placeholder='Phone Number' />
        <p className="text-white text-lg hovring font-semibold mt-7 xl:ml-20 lg:ml-15 lg:pl-10 xl:pl-14 py-4 xl:px-5 lg:px-20 border xl:mr-250  lg:mr-160 cursor-target"> Submit  </p>
     
        </div>
       
        </div>
      </div>
    </div>
<div>
<div className="xl:pl-14  lg:hidden xl:hidden lg:pl-14  bg-[#0F0F0F] pb-20 pr-15 text-[#FFFFFF] font-mono rounded-2xl">
  <div className="relative w-full">

    <div className="pt-20 pl-15">
      <p className="text-5xl font-bold mb-5">Contact Us</p>
      <p className="text-gray-400 text-sm md:text-base mb-10  lg:mb-15 md:mb-15 xl:mb-40">
        Feel free to contact us at any time <br />
      <span className='hidden md:block '>  We will get back to you as soon as possible</span>
      </p>

      <div className="flex flex-col">
        <input
          className="ml-10 pl-5 pt-3 pb-3 xl:mr-100 lg:mr-100 mb-9 rounded-2xl border-2 border-gray-400 bg-[#0F0F0F] text-white font-mono"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="ml-10 pl-5 pt-3 pb-3 xl:mr-100 lg:mr-100 border-2 border-gray-400 mb-9 rounded-2xl bg-[#0F0F0F] text-white font-mono"
          type="text"
          placeholder="E-mail Address"
        />
        <input
          className="ml-10 pl-5 pt-3 pb-3  xl:mr-100 lg:mr-100 border-2 border-gray-400 rounded-2xl bg-[#0F0F0F] text-white font-mono"
          type="text"
          placeholder="Phone Number"
        />
        <p className="text-white mr-20 pl-10 ml-20 text-lg hovring font-semibold mt-7 xl:ml-20 md:ml-12 md:pl-13 md:mr-108 lg:ml-15 lg:pl-10 xl:pl-14 py-4 xl:px-5 lg:px-20 border xl:mr-250 lg:mr-160 cursor-target">
          Submit
        </p>
      </div>
    </div>
  </div>
</div>


</div>
</>

    
  );
}

export default Contact;
