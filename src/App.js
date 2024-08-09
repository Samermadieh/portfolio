import './App.css';
import Projects from './components/Projects';
import LeftMenu from './components/LeftMenu';
import SocialList from './components/SocialList';
import Experience from './components/Experience';
import portrait from './assets/portrait.jpg';
import { useEffect, useState } from 'react';


function App() {

  const [isScrolling, setIsScrolling] = useState(false);
  const shortInfo = "I build exceptional applications for desktop, web and XR.";
  const about = `Software engineer and leader with a versatile skillset. Strong programming skills in C#, Javascript, Java, Python, and more.
  Experienced Full-Stack engineer that has built multiple full platforms.
  Worked on Ilysia VR, one of the first VR MMOs, as a VR Software Engineer. 
  Creator of educational tech YouTube Channel “RealaryVR” with 3900+ subscribers and 500k+ views. 
  More than 4 years of experience in developing virtual reality applications and other projects in Unity.
  Quick to learn and grasp new concepts and effective in working within a team setting. `;

  useEffect(() => {

    const spotlight = document.getElementById('spotlight');

    document.addEventListener('mousemove', (e) => {
      spotlight.style.transform = `translate(${e.clientX - spotlight.offsetWidth / 2}px, ${e.clientY - spotlight.offsetHeight / 2}px)`;
    });

    document.addEventListener('scroll', (e) => {
      console.log('scroll');
      if (!isScrolling) {
        setIsScrolling(true);
        document.getElementById('spotlight').style.display = 'none';
      }
    });

    document.addEventListener('scrollend', (e) => {
      console.log('scrollend');
      setIsScrolling(false);
      document.getElementById('spotlight').style.removeProperty('display');
    });
  }, [isScrolling]);


  return (
    <div className="App">
      <div id="spotlight"></div>
      <div id="app-content">
        <div id="content-left">
          <div id="main-info">
            <img src={portrait} />
            <h1>Samer Madieh</h1>
            <h2>Senior Software Engineer</h2>
            <p>{shortInfo}</p>
          </div>
          <LeftMenu />
          <SocialList />
        </div>
        <div id="content-right">
          <h3 className='category-header'>ABOUT</h3>
          <div id="about">{about.split('\n').map((line, index) => <p key={index}>{line}</p>)}</div>
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
