import './css/Header.css'
import resume from '../assets/SamerMadiehResume - 2023.pdf'

function Header() {
    return (
        <div id="header">
            <a href="https://www.linkedin.com/in/samer-madieh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Samermadieh" target="_blank" rel="noopener noreferrer">Github</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    )
}

export default Header;