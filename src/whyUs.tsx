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

  <div className='row'>
    <div>

  <img className='w-180 ' src={car} alt="" />
    </div>
    <div>
        <ul className='ml-10'>
            <li>
                 <p className='mb-4 text-2xl font-bold'>
                    Global Presence
                </p>
                <p className='text-gray-400 mb-5'>
                    Our showrooms in New York,London and Dubai cater to an elite  <br/>network 
                    of visionaries,CEO's and conniossours of fine<br/>
                     automobiles
                </p>
            </li>
               <li>
                 <p className='mb-4 text-2xl font-bold'>
            Exclusive Partnership 
                </p>
                <p className='text-gray-400 mb-5'>
                   We collaborate with the worlds most prestigious<br/> brands including Rolls Royes,Lexus and Bently
                </p>
            </li>
               <li>
                 <p className='mb-4 text-2xl font-bold'>
                  Confidentiality & Trust
                </p>
                <p className='text-gray-400'>
                  We understand the importance of discrition and exclusivity.Our <br/> 
                 team ensure that every transaction remains private,personal<br/>
                  and tailored to your expectations
                </p>
            </li>
               <p className="text-white text-lg hovring font-semibold mt-7  py-5 px-5 border mr-80 cursor-target"> Explore Collections  </p>
     
        </ul>
    </div>
  </div>

</div>
</>

    )
 }
 export default Why