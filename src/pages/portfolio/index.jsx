import React from 'react';
import '../../styles/global.css';
import Background from "../../components/background";
import Profile from "../../components/profile";
import Carousel from "../../components/carousel";


function Portfolio() {
  return (
    <div>
      <Background />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <div className="w-1/2 mr-4">
            <Profile />
          </div>
          <div className="w-1/2 ml-4">
            <Carousel/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;