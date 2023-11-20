import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import portrait from './assets/portrait.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="app-content">
        <div id="content-left">
          <Projects />
        </div>
        <div id="content-right">
          <div id="img-container">
            <img id="portrait" src={portrait} />
            <h1>Samer Madieh</h1>
            <h2>Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
