import './css/LeftMenu.css';
import { useEffect, useState } from 'react';

function LeftMenu() {

    const [selectedSection, setSelectedSection] = useState();

    useEffect(() => {
        const updateSelectedSection = () => {
            const sections = document.querySelectorAll('#about, #experience, #projects, #recommendations');
            let largestIntersectionHeight = 0;
            let largestSectionId = '';
    
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const intersectionHeight = Math.min(
                    rect.bottom,
                    viewportHeight
                ) - Math.max(rect.top, 0);
    
                if (intersectionHeight > largestIntersectionHeight) {
                    largestIntersectionHeight = intersectionHeight;
                    largestSectionId = section.id;
                }
            });
    
            if (largestSectionId !== selectedSection) {
                const prevSelected = document.querySelector(`#${selectedSection}-toggle`);
                if (prevSelected) {
                    prevSelected.classList.remove('selected');
                }
                const newSelected = document.querySelector(`#${largestSectionId}-toggle`);
                if (newSelected) {
                    newSelected.classList.add('selected');
                }
                setSelectedSection(largestSectionId);
            }
        };
    
        // Add event listener for scroll and resize
        window.addEventListener('scroll', updateSelectedSection);
        window.addEventListener('resize', updateSelectedSection);
    
        // Initial call to set the correct section on mount
        updateSelectedSection();
    
        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', updateSelectedSection);
            window.removeEventListener('resize', updateSelectedSection);
        };
    }, [selectedSection]);

    function ScrollToSection(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="left-menu">
            <div id="about-toggle" className='left-menu-item' onClick={() => ScrollToSection('app-content')}>
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
            <div id="recommendations-toggle" className='left-menu-item' onClick={() => ScrollToSection('recommendations')}>
                <div className='left-menu-line'></div>
                <p>RECOMMENDATIONS</p>
            </div>
        </div>
    );
}

export default LeftMenu;