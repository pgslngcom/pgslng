import Img1 from '../assets/hydro2.png';
import hydroBg from '../assets/surveyBg.png';
import { useEffect } from 'react';  

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos' 
export const Survey = () => {
   
   
        useEffect(() =>{
          AOS.init({
            duration: 1000, // Duration of animations
          })
         }, []);
  return (
    <> 
                {/* hero section  */}
                <section className="md:h-[440px] lg:h-[440px] relative flex justify-center items-center text-center h-[70vh]  "
                
                style={{
                    backgroundImage:  `url(${hydroBg})`,
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
        >
            <h2 className="md:text-[70px] text-[40px] font-[700] text-white font-manRope z-[999] relative"> Survey & Geomatic < br /> Service</h2>

            <div className="absolute" style={{inset: '0', width: '100%' , height: '100%', background: '#0201014D'}}>  </div>  
        </section>

                    {/* about section  */}
                    <section className="flex  items-center  flex-col md:h-auto overflow-hidden ">
  <div className="md:grid grid-cols-2 justify-center items-start md:h-auto overflow-hidden px-[10px] pt-[60px] mx-auto pb-5">
    <div className="md:ml-[50px]">
      <div className="px-2">
        <p className="text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]" data-aos="zoom-in">
        At Protech Geosolution Limited (PGSL), our Survey & Geomatics Services are designed to provide precise spatial data that drives the success of engineering, construction, environmental, and infrastructure projects.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" data-aos="zoom-out">
We combine traditional surveying methods with modern technologies such as GPS/GNSS, Total Stations, UAV (drone) mapping, and GIS to deliver reliable, high-accuracy geospatial information. Our team ensures that every dataset we generate meets industry standards and supports your project from planning through execution.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
        Whether you need land boundary surveys, construction staking, topographic mapping, or GIS data integration, PGSL is your trusted partner for accurate, efficient, and cost-effective surveying solutions.
        </p>

        <h2 className='text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk '>Our offerings include:</h2>
    <ul style={{listStyle: 'inside'}} data-aos="zoom-in" data-aos-delay="300">
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Boundary & cadastral surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Engineering and construction surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Topographic and terrain mapping</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">UAV and drone-based surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">GIS data acquisition and processing</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Route and alignment surveys</li>
    </ul>
      </div>
    </div>
    <div className="flex justify-center items-center mt-3"  >
      <img src={Img1} className="md:w-[80%] h-auto" alt="Geosolutions" />
    </div>
  </div>
</section>
 
    </>
  )
}

export default Survey