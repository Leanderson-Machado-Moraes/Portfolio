import React from 'react';
import '../../styles/global.css';
import foto from '../../assets/fotoPortfolio.jpg';
import "../../../src/output.css";

function Profile() {
  return (
    <div className="flex justify-start items-center h-screen px-4">
      <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
        <div className="relative">
          <img className="w-full h-64 object-cover" src={foto} alt="Profile Image"/>
        </div>
        <div className="px-6 py-4">
          <div className="text-xl font-semibold text-gray-800">Leanderson Machado</div>
          <p className="text-gray-600">Front-end Developer</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block px-2 py-1 font-semibold text-white-900 bg-teal-200 rounded-full">Javascript</span>
          <span className="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">React</span>
          <span className="inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">Node.js</span>
        </div>
        <div className="px-6 py-4">
          <a href="https://api.whatsapp.com/send?phone=5551999469965&text=Ola" className="text-blue-500 hover:underline">Fale comigo!</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;