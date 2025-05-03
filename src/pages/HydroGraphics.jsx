import Img1 from '../assets/hydro2.png'
import hydroBg from '../assets/hydroBg.png'
import { useEffect } from 'react';  

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos' 
export const HydroGraphics = () => {
 
        useEffect(() =>{
          AOS.init({
            duration: 1000, // Duration of animations
          })
         }, []);
  return (
    <> 

                {/* hero section  */}
                <section className="md:h-[440px] lg:h-[440px] h-[60vh] flex justify-center items-center text-center"
                
                style={{
                    backgroundImage: `url(${hydroBg})`
                }}
        >
             <h2 className="md:hidden lg:hidden block text-[40px] font-[700] text-white md:mb-[40px] font-manRope">
              Hydrographics & Hydrometric Survey</h2>
        </section>

                    {/* about section  */}
                    <section className="flex  items-center  flex-col md:h-auto overflow-hidden pt-[60px] pb-[100px]">
  <div className="md:grid grid-cols-2 justify-center items-start md:h-auto overflow-hidden px-[10px] pt-[60px] mx-auto pb-5">
    <div className="md:ml-[50px]">
      <div className="px-2">
        <p className="text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]" data-aos="zoom-in">
        At Protech Geosolution Limited (PGSL), we provide advanced Hydrographic and Hydrometric Survey services to support water-related projects across sectors such as construction, oil and gas, dredging, coastal engineering, and environmental management.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" data-aos="zoom-out">
        Our team uses state-of-the-art sonar, echo sounders, and GPS positioning systems to collect accurate data on water depths, seabed profiles, flow rates, sediment transport, and tidal patterns. These insights are critical for safe navigation, infrastructure planning, flood control, and resource exploration.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
        Whether it’s rivers, lakes, coastal zones, or offshore environments, we deliver high-quality data that supports informed decision-making and long-term project success.
        </p>
        <h2 className='text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk '>Our offerings include:</h2>
    <ul style={{listStyle: 'inside'}} data-aos="zoom-in" data-aos-delay="300">
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Bathymetric mapping</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">River and coastal surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Current and tide measurements</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Hydrological data collection</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Dredging and reclamation support</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Environmental and flood risk assessments</li>
    </ul>
      </div>
    </div>
    <div className="flex justify-center items-center"  >
      <img src={Img1} className="md:w-[80%] h-auto" alt="Geosolutions" />
    </div>
  </div>
</section>
 
                     
    </>
  )
}

export default HydroGraphics