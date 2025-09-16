import car from'./assets/whyCar.svg'

function Why(){


    return(

<>

<div className="pl-14 bg-[#0F0F0F] pb-20 text-[#FFFFFF] font-mono">
    <p className="text-4xl font-bold mb-5">
        Why Choose Us?
    </p>
    <p className="text-gray-400 mb-8">
        Crafting Excellence, Defining Luxury 
    </p>

  <div className='lg:row xl:row mr-8'>
    <div>

  <img className='xl:w-180  ' src={car} alt="" />
    </div>
    <div>
        <ul className='ml-10'>
            <li>
                 <p className='mb-4 md:mt-10 text-2xl font-bold'>
                    Global Presence
                </p>
                <p className='text-gray-400 mb-5  lg:text-sm'>
                    Our showrooms in New York,London and Dubai cater to <br className='hidden lg:block'/>an elite  <br className='hidden xl:block'/>network 
                    of visionaries,CEO's and conniossours <br className='hidden lg:block'/> of a fine <br className='hidden xl:block'/>
                     automobiles
                </p>
            </li>
               <li>
                 <p className='mb-4 text-2xl font-bold'>
            Exclusive Partnership 
                </p>
                <p className='text-gray-400 mb-5 lg:text-sm '>
                   We collaborate with the worlds most prestigious<br/> brands including Rolls Royes,Lexus and Bently
                </p>
            </li>
               <li>
                 <p className='mb-4 text-2xl font-bold'>
                  Confidentiality & Trust
                </p>
                <p className='text-gray-400 lg:text-sm'>
                  We understand the importance of discrition and exclusivity.Our <br className='hidden xl:block'/>
                 team ensure that every transaction remains private,personal<br className='hidden xl:block'/>
                  and tailored to your  <br className='hidden lg:block'/>
                  expectations
                </p>
            </li>
               <p className="text-white text-lg hovring font-semibold mt-7 py-5 px-5 border xl:mr-80 lg:mr-40 md:mr-98 cursor-target"> Explore Collections  </p>
     
        </ul>
    </div>
  </div>

</div>
</>

    )
 }
 export default Why