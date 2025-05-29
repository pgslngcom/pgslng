import Img1 from '../assets/gisImg.png'
import gisMappingBg from '../assets/herobg3.png' 
// import { Navbar } from "../components/Navbar";
// import { Footer } from '../components/Footer';
// import { Service } from '../components/Service'; 
// import Client from '../molecules/Client';


export const GisServices = () => { 
  return (
    <> 
                {/* hero section  */}
                <section className="md:h-[447px] lg:h-[447px] relative flex justify-center items-center text-center h-[60vh]"
                
                style={{
                    backgroundImage:  `url(${gisMappingBg})`,
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
        >
            <h2 className="md:text-[70px] font-[700] text-white font-manRope z-[999] text-[40px]  relative"> GIS Mapping, <br />
            Analysis & Modeling </h2>


                <div className='bg-[#0201014D] absolute inset-0 '></div>
        </section>

                    {/* about section  */}
                    <section className="flex  items-center  flex-col md:h-auto overflow-hidden pt-[60px] pb-[40px]">
  <div className="md:grid grid-cols-2 justify-center items-start md:h-auto overflow-hidden px-[10px] md:px-[40px] pt-[60px] mx-auto pb-5">
    <div className="md:ml-[50px]">
      <div className="pl-4">
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]">
        At Protech Geosolution Limited (PGSL), we harness the power of Geographic Information Systems (GIS) to transform spatial data into actionable insights. Our GIS Mapping, Analysis & Modeling services support smarter planning, resource management, infrastructure development, and environmental monitoring. 
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" >
        We offer end-to-end GIS solutions—from data collection and geospatial mapping to spatial analysis and predictive modeling. Using advanced GIS tools and technologies, we help our clients visualize trends, identify patterns, and make data-driven decisions for both urban and remote environments.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" >
        Whether you’re working in engineering, oil & gas, utilities, telecom, or environmental sectors, PGSL delivers accurate, high-quality geospatial products tailored to your needs.
        </p>

        <h2 className='text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk '>Our offerings include:</h2>
    <ul style={{listStyle: 'outside'}} >
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">GIS mapping and spatial data visualization.</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Spatial analysis and decision support</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Land use and infrastructure modeling</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Remote sensing and data integration</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Geodatabase design and management</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">3D terrain and environmental modeling</li>
    </ul>
    
      </div>
    </div>
    <div className="flex justify-center items-center mt-2"  >
      <img src={Img1} className="md:w-[80%] h-auto rounded-[24px]" alt="GIS Mapping " />
    </div>
  </div>
</section>
   {/* about section ending */}       
 
    </>
  )
}

export default GisServices