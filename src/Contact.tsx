import car from './assets/ContactCard.svg';

function Contact() {
  return (
    <div className="pl-14 bg-[#0F0F0F] pb-20 pr-15 text-[#FFFFFF] font-mono">
      <div className="relative w-full">
        {/* Image as background */}
        <img src={car} alt="Contact" className="w-full rounded-2xl" />

        {/* Overlay content */}
        <div className="absolute inset-0 pt-20   pl-15">
          <p className="text-5xl font-bold mb-5">Contact Us</p>
          <p className="text-gray-400 mb-40">
            Feel free to contact us at any time <br />
            We will get back to you as soon as possible
          </p>
        <div className='flex flex-col '>

            <input className='ml-10 pl-5 pt-3 pb-3 mr-100 mb-9 rounded-2xl bg-[#0F0F0F] text-white font-mono' type="text" placeholder='Your Name' />
          <input className='ml-10 pl-5 pt-3 pb-3 mr-100 mb-9 rounded-2xl bg-[#0F0F0F] text-white font-mono' type="text" placeholder='E-mail  Address' />
          <input className='ml-10 pl-5 pt-3 pb-3 mr-100 rounded-2xl bg-[#0F0F0F] text-white font-mono' type="text" placeholder='Phone Number' />
        <p className="text-white text-lg hovring font-semibold mt-7 ml-20 pl-14 py-5 px-5 border mr-250 cursor-target"> Submit  </p>
     
        </div>
       
        </div>
      </div>
    </div>
  );
}

export default Contact;
