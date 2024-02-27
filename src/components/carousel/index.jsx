import React, { useState } from 'react';
import '../../styles/global.css';
import "../../../src/output.css";
import videogame from '../../assets/videogame.png';
import plant from '../../assets/plant.png';
import technobooks from '../../assets/Technobooks.png';
import surfing from '../../assets/logoSurfing.png';
import calculator from '../../assets/calculator.png';

const projects = [
  {
    title: 'Technobooks',
    text: 'Crud utilizando java, javascript, PHP, mysql com api de construção BI.',
    logo: technobooks,
    link: '#projeto1',
  },
  {
    title: 'Site de "jogos" REACT',
    text: 'Site experimental estático utilizando javascript, html, css e react',
    logo: videogame,
    link: 'https://github.com/Leanderson-Machado-Moraes/site-de-jogos',
  },  
  {
    title: 'Crud + CSS 3D',
    text: 'Crud com mysql, html, javascript e CSS avançado para criação de carrossel 3d.',
    logo: plant,
    link: 'https://github.com/Leanderson-Machado-Moraes/projeto-plantas',
  },
  {
    title: 'Surfing',
    text: 'Projeto em parceria com a tecnosinos. EM CONSTRUÇÃO: Node.js, React, MangoDB, Python, JavaScript e Tailwindcss',
    logo: surfing,
    link: '#projeto4',
  },
  {
    title: 'Calculadora',
    text: 'Mapeamento de atalhos do usuário utilizando html, css e JavaScript',
    logo: calculator,
    link: 'https://github.com/Leanderson-Machado-Moraes/calculadoraJS',
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {projects.map((project, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {project.logo && (
                <div className="mb-4 text-center">
                  <img src={project.logo} alt={project.title} className="mx-auto" style={{ maxWidth: project.title === 'Technobooks' ? '220px' : '150px', maxHeight: '100px' }} />
                </div>
              )}
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.text}</p>
              <a href={project.link} className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-center py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                {project.title === 'Technobooks' ? 'Visualização indisponível' : project.title === 'Surfing' ? 'Detalhes comigo' : 'Visualizar Projeto'}
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-0 text-white bg-pink-500 rounded-full p-2 transform -translate-y-1/2 hover:bg-pink-600 transition duration-300 z-10" style={{marginLeft: '10px'}} onClick={prevSlide}>
        &lt;
      </button>
      <button className="absolute top-1/2 right-0 text-white bg-pink-500 rounded-full p-2 transform -translate-y-1/2 hover:bg-pink-600 transition duration-300 z-10" style={{marginRight: '10px'}} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
