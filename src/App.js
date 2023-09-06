import './App.css';
import Header from './components/Header';
import portrait from './assets/portrait.jpg';

function App() {
  return (
    <div className="App">
        <Header/>
        <div id="app-content">
          <div id="content-left">
            <h1>Samer Madieh</h1>
            <h2>Software Engineer</h2>
          </div>
          <div id="content-right">
            <img id="portrait" src={portrait} />
          </div>
        </div>
    </div>
  );
}

export default App;
