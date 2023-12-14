import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* <span>Jenish Maru</span> */}
        <span style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.2em',
          fontWeight: 'bold',
          color: '#9C27B0', /* Lavender color */
          textShadow: '1px 1px 2px #333'
        }}>Jenish Maru</span>
        <p className="text-slate-600 ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
