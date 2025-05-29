
import { Navbar } from "../components/Navbar"
import AboutImg from '../assets/aboutTing.png'
import Client from '../molecules/Client';
import { Footer } from '../components/Footer';
import { Service } from '../components/Service';


export const About = () => {
   
  return (
    <>
        <Navbar />

        {/* hero section  */}
        <section className="md:h-[440px] lg:h-[440px] aboutBg  h-[70vh] flex justify-center items-center"  
        >
            <h2 className="md:hidden lg:hidden block text-[50px] font-[700] text-white md:mb-[40px] font-manRope">About Us</h2>
        </section>

            {/* about section  */}
            <section className="about md:grid grid-cols-2 justify-center items-start  md:h-auto    overflow-hidden lg:px-[120px] px-4 md:px-[120px]  pt-[60px] md:pb-[100px]" id='about'>
              <div className=" " data-aos="zoom-in" data-aos-delay="300">
                <img src={AboutImg} className='' alt="" />
              </div>
              <div className=" mt-4">
                <div className=''>
                  <p className=' text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]' data-aos="zoom-in">
                  At Protech Geosolution Limited (PGSL), we are committed to delivering precision-driven and innovative geospatial solutions that power industries and infrastructure development. Established in Nigeria and duly incorporated under the Companies and Allied Matters Act on January 9, 2020, we have consistently provided top-tier technical services across multiple sectors, including surveying, geospatial mapping, hydrography, mining, petroleum, and telecommunications
                  </p>
                  <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
                  Our expertise spans Survey & Geomatics Services, Hydrographic & Hydrometric Surveys, Geographic Information Systems (GIS), and Geodetic Resource Data tailored for the mining, petroleum, exploration, and telecommunication sectors. We also specialize in geotechnical investigations, environmental impact assessments, dredging support services, and civil construction projects—ensuring seamless integration of our solutions into real-world applications.
                  </p>
                  <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
                  As a company, we prioritize technical excellence and innovation by continuously training and retraining our team to uphold global best practices. We also facilitate the importation, exportation, sales, and leasing of hydrographic and geographic equipment, ensuring that our clients have access to the latest tools and technology for their projects.
                  </p>
                  <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
                  At PGSL, we don’t just provide services; we deliver solutions that empower businesses, enhance decision-making, and shape the future of infrastructure and environmental sustainability.                  </p>
                </div>
              </div>
            </section>
            {/* about section ending */}

            <Service />
            {/* client  */}
            <Client />
                <Footer />
    </>
  )
}

export default About