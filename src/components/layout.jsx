/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from './navbar';
import Footer from './footer';

const layout = ({ children }) => {
  return (
    <div className="flex flex-col   
 min-h-screen"> {/* Add flex and min-h-screen */}
      <Navbar />
      <div className="container mt-5 mx-auto p-4 flex-grow"> {/* Add flex-grow */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
