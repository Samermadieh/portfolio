import './css/SocialList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

function SocialList() {
    return (
        <div id="social-list">
            <div className='social-element'>
                <a href='https://www.linkedin.com/in/samer-madieh/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} className='social-icon'/>
                </a>
                
            </div>
            <div className='social-element'>
                <a href='https://github.com/Samermadieh/' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className='social-icon'/>
                </a>
            </div>
            <div className='social-element'>
                <a href='https://www.youtube.com/@RealaryVR' target='_blank'>
                    <FontAwesomeIcon icon={faYoutube} className='social-icon'/>
                </a>
            </div>
            
            
        </div>
    );
}

export default SocialList;