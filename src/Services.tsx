
import Card from "./card"; 
import cardOne from "./assets/carCardOne.svg";
import cardTwo from "./assets/carCardTwo.svg";
import cardThree from "./assets/carCardThree.svg";
import LogoLoop from './components/LogoLoop';

import bentley from "./assets/bentley.svg";
import rollsRoyce from "./assets/rollsRoyce.svg";
import lamborghini from "./assets/audi.svg";
import maserati from "./assets/aston-martin.svg";
import astonMartin from "./assets/bmw.svg";
import porsche from "./assets/ferrari.svg";
import mclaren from "./assets/lexus.svg";
import bugatti from "./assets/rollsRoyce.svg";
import pagani from "./assets/tesla.svg";


export const carLogos = [
  { src: bentley, title: "Bentley", href: "https://www.bentleymotors.com/" },
  { src: rollsRoyce, title: "Rolls Royce", href: "https://www.rolls-roycemotorcars.com/" },
  { src: lamborghini, title: "Lamborghini", href: "https://www.lamborghini.com/" },
  { src: maserati, title: "Maserati", href: "https://www.maserati.com/" },
  { src: astonMartin, title: "Aston Martin", href: "https://www.astonmartin.com/" },
  { src: porsche, title: "Porsche", href: "https://www.porsche.com/" },
  { src: mclaren, title: "McLaren", href: "https://cars.mclaren.com/" },
  { src: bugatti, title: "Bugatti", href: "https://www.bugatti.com/" },
  { src: pagani, title: "Pagani", href: "https://www.pagani.com/" },

];




function Services() {
  return (
  <>
    <div className="pt-10 pl-12   bg-[#0F0F0F] text-[#FFFFFF] font-mono">
      {/* Heading (left-aligned) */}
      <div>
        <p className="text-4xl font-bold">Our Services</p>
        <p className="text-gray-400 font-medium mt-6">
          Owning a luxury car is just the beginning.
          <br />
         <span className="hidden md:block"> We curated an experience beyond imagination.</span>
        </p>
      </div>

      {/* Cards (centered) */}
      <div className="flex xl:flex-row lg:flex-row flex-col xl:gap-8 mt-12 ">
        <Card
          image={cardOne}
          title="Bespoke Customization"
          description="From tailored leather interior to personalized performance settings"
          buttonText="Learn More"
        />
        <Card
          image={cardTwo}
          title="Personal Concierge"
          description="From trip planning to custom detailing, enjoy a seamless lifestyle."
          buttonText="Discover"
        />
        <Card
          image={cardThree}
          title="Luxury Upgrades"
          description="Enhance your ride with bespoke upgrades and premium finishes."
          buttonText="Explore"
        />
      </div>
    </div>
       <div className=" bg-[#0F0F0F] cursor-target pb-10 pt-10"> 
        <p className=" ml-8 mr-8  text-white rounded-full pl-10 pt-10  bg-[#1A1A1A]">

 <div style={{ height: '90px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={carLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
            
            </p>
       </div>
  </>
    
  );
}

export default Services;
