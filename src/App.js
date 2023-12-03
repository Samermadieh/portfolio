import './App.css';
import Projects from './components/Projects';
import LeftMenu from './components/LeftMenu';
import SocialList from './components/SocialList';
import Experience from './components/Experience';
import portrait from './assets/portrait.jpg';


function App() {

  const shortInfo = "I build exceptional applications for desktop, web and XR.";
  const about = `Software engineer with a versatile skillset. Strong programming skills in C#, Javascript, Java, Python, and more. 
  Quick to learn and grasp new concepts and effective in working within a team setting. 
  Worked on Ilysia VR, one of the first VR MMOs, as a VR Software Engineer. 
  Creator of educational tech YouTube Channel “RealaryVR” with 3500+ subscribers and 400k+ views. 
  More than 4 years of experience in developing virtual reality applications and other projects in Unity. 
  Experienced Full-Stack engineer.`;
  
  return (
    <div className="App">
      <div id="app-content">
        <div id="content-left">
          <div id="main-info">
            <img src={portrait} />
            <h1>Samer Madieh</h1>
            <h2>Experienced Software Engineer</h2>
            <p>{shortInfo}</p>
          </div>
          <LeftMenu />
          <SocialList />
        </div>
        <div id="content-right">
          <div id="about">{about.split('\n').map((line, index) => <p key={index}>{line}</p>)}</div>
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
