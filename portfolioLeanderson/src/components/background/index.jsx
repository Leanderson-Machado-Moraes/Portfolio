import React, { useRef, useEffect } from 'react';
import "../../styles/global.css"
import "../../../src/output.css"

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let requestId;
    let lastRenderTime = 0;
    let lastUpdateTime = performance.now(); 
    const animationSpeed = 40; 
    const numStars = 200; 
    let stars = createStars(numStars);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      const stars = [];
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        const opacity = Math.random();
        const speed = Math.random() * 2 + 1; 
        stars.push({ x, y, radius, opacity, speed });
      }
      return stars;
    }

    function drawGalaxy() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(255, 255, 255, ' + star.opacity + ')';
        context.fill();

       
        star.x += star.speed; 
        if (star.x > canvas.width) {
          star.x = 0; 
        }
      }
    }

    function animate(currentTime) {
      const deltaTime = currentTime - lastRenderTime;
      const updateTime = performance.now() - lastUpdateTime;

      if (updateTime > animationSpeed) {
        lastRenderTime = currentTime;
        lastUpdateTime = performance.now();

        drawGalaxy();
      }
      requestId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    function handleResize() {
      resizeCanvas();
      stars = createStars(); 
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}

export default Background;