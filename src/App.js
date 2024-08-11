import './App.css';
import Projects from './components/Projects';
import LeftMenu from './components/LeftMenu';
import SocialList from './components/SocialList';
import Experience from './components/Experience';
import Recommendations from './components/Recommendations';
import portrait from './assets/portrait.jpg';
import { useEffect, useState } from 'react';
import info from './data/info.json';
import Highlighter from 'react-highlight-words';


function App() {

    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {

        const spotlight = document.getElementById('spotlight');

        document.addEventListener('mousemove', (e) => {
            spotlight.style.transform = `translate(${e.clientX - spotlight.offsetWidth / 2}px, ${e.clientY - spotlight.offsetHeight / 2}px)`;
        });

        document.addEventListener('scroll', (e) => {
            if (!isScrolling) {
                setIsScrolling(true);
                document.getElementById('spotlight').style.display = 'none';
            }
        });

        document.addEventListener('scrollend', (e) => {
            setIsScrolling(false);
            document.getElementById('spotlight').style.removeProperty('display');
        });
    }, [isScrolling]);

    const CustomLink = ({ children, href }) => (
        <a href={href} target='_blank' className="custom-link">
            {children}
        </a>
    );


    return (
        <div className="App">
            <div id="spotlight"></div>
            <div id="app-content">
                <div id="content-left">
                    <div id="main-info">
                        <img src={portrait} />
                        <h1>Samer Madieh</h1>
                        <h2>Senior Software Engineer</h2>
                        <p>{info.shortInfo}</p>
                    </div>
                    <LeftMenu />
                    <SocialList />
                </div>
                <div id="content-right">
                    <h3 className='category-header'>About</h3>
                    <div id="about">
                        <Highlighter highlightClassName='about-highlight'
                            className='about-paragraph'
                            searchWords={['RealaryVR']}
                            highlightTag={(props) => <CustomLink {...props} href="https://youtube.com/realaryvr" />}
                            textToHighlight={info.about} />
                    </div>
                    <Experience />
                    <Projects />
                    <Recommendations />
                </div>
            </div>
        </div>
    );
}

export default App;
