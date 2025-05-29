import footerLogo from '../assets/footerLogo.png'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="bg-[#1A1423] px-4 py-10 lg:py-[70px]">
      {/* Top Footer Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 max-w-[1200px] mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
        <img src={footerLogo} className="w-[200px] lg:w-[257px]" alt="Footer Logo" />
        </Link>

        {/* Features */}
        <ul className="flex flex-col text-left">
          <h5 className="text-[18px] font-bold font-manRope text-white mb-2">Features</h5>
          <a href="#" className="text-[14px] font-[400] font-manRope text-[#F5F5F5] mb-1">Home</a>
          <a href="#" className="text-[14px] font-[400] font-manRope text-[#F5F5F5] mb-1">About Us</a>
          <a href="#" className="text-[14px] font-[400] font-manRope text-[#F5F5F5] mb-1">Project</a>
        </ul>

        {/* Services */}
        <ul className="flex flex-col text-left">
          <h5 className="text-[18px] font-bold font-manRope text-white mb-2">Services</h5>
          <a href="#" className="text-[14px] font-[400] font-manRope text-[#F5F5F5] mb-1">Survey & Geomatic Service</a>
          <a href="#" className="text-[14px] font-[400] font-manRope text-[#F5F5F5] mb-1">Procurement & Equipment Leasing</a>
          <a href="#" className="text-[14px] font-[400] font-manRope text-[#F5F5F5] mb-1">Hydrographic & Hydrometric Survey</a>
          <a href="#" className="text-[14px] font-[400] font-manRope text-[#F5F5F5] mb-1">GIS Mapping, Analysis & Modeling</a>
        </ul>

        {/* Contact */}
        <ul className="flex flex-col text-left">
          <h5 className="text-[18px] font-bold font-manRope text-white mb-2">Contact</h5>
          <li className="flex items-center gap-3 text-white font-manRope text-[14px] font-[400] mb-2">
            <FaEnvelope className="text-[18px]" /> info@pgslng.com
          </li>
          <li className="flex items-center gap-3 text-white font-manRope text-[14px] font-[400] mb-2">
            <FaPhoneAlt className="text-[18px]" /> +234 806 023 6392 || +234 816 433 1909
          </li>
          <li className="flex items-start gap-3 text-white font-manRope text-[14px] font-[400]">
            <MdLocationOn className="text-[18px] mt-1" /> 23 Harok Road, Rumigbo, Port Harcourt
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full max-w-[1200px] mx-auto bg-[#828282] my-6"></div>

      {/* Bottom Footer */}
      <p className="text-center text-[14px] md:text-[16px] font-[400] text-footerColor font-manRope leading-[28px]">
        © 2025. Protech Geosolution All rights reserved
      </p>
    </div>
  );
}
