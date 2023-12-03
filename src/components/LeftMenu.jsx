import './css/LeftMenu.css';
import { useEffect } from 'react';

function LeftMenu() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const menuLine = document.querySelector(`#${id}-toggle`);

        if (entry.isIntersecting) {
          menuLine.classList.add('selected');
        } else {
          menuLine.classList.remove('selected');
        }
      });
    }, { threshold: 0.5 });

    // Select the sections to observe
    const sectionsToObserve = document.querySelectorAll('#about, #experience, #projects');

    // Observe each section
    sectionsToObserve.forEach(section => {
      observer.observe(section);
    });

    // Clean up the observer when component unmounts
    return () => {
      sectionsToObserve.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  function ScrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="left-menu">
      <div id="about-toggle"className='left-menu-item' onClick={() => ScrollToSection('app-content')}>
        <div className='left-menu-line'></div>
        <p>ABOUT</p>
      </div>
      <div id="experience-toggle" className='left-menu-item' onClick={() => ScrollToSection('experience')}>
        <div className='left-menu-line'></div>
        <p>EXPERIENCE</p>
      </div>
      <div id="projects-toggle" className='left-menu-item' onClick={() => ScrollToSection('projects')}>
        <div className='left-menu-line'></div>
        <p>PROJECTS</p>
      </div>
    </div>
  );
}

export default LeftMenu;