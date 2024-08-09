import './css/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRankingStar, faCode } from '@fortawesome/free-solid-svg-icons';

function Projects() {

    const projects = [
        {
            title: "Nahda",
            description: "Educational Technology platform Nahda. Building a platform that enables the 400+ million Arabic speakers to learn skills that are in demand in today's global economy. Our goal is to provide quality Arabic education and support Arab content creators.",
            imgUrl: "https://www.nahda.io/assets/logo-tp-rdKyLp9y.png",
            link: "https://www.nahda.io/",
            stats: {
                text: "Full-stack Application",
                icon: faCode
            }
        },
        {
            title: "Realary",
            description: "Founder of educational YouTube channel \'RealaryVR\' that produces VR development content. I create tutorials that are mostly about Unity and VR development for the Oculus/Meta platform.",
            imgUrl: "https://yt3.googleusercontent.com/LCDqCaTF9bt6fQhaRBMS64JagNJ1uHaE_u-UlEgINg02q60AVSaNP27MRWalgDtV0cqS0E6q=s160-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/realaryvr",
            stats: {
                text: "3.9k+ subscribers, 500k+ views",
                icon: faUser
            }
        },
        {
            title: "VR UI Package",
            description: "The VR UI Package is a package for Unity designed to accelerate the development of VR applications and games. It offers a collection of prebuilt UI tools that can be easily integrated into your projects. By leveraging these tools, you can eliminate the need to build basic UI functionalities from scratch, allowing you to focus on more creative and specialized aspects specific to your project. We believe that this package will enhance your development experience and empower you to create compelling VR experiences.",
            imgUrl: "https://assetstorev1-prd-cdn.unity3d.com/key-image/c24aaee7-5a33-468a-98e3-1bb151ade404.png",
            link: "https://assetstore.unity.com/packages/3d/gui/vr-ui-package-249282",
            stats: {
                text: "#4 out of 50k packages",
                icon: faRankingStar
            }
        },
        {
            title: "Onboarding App",
            description: "Hebron is an onboarding application that makes onboarding new employees at software companies easier and faster. It is a full-stack application built with the MERN stack and includes functionality that utilizes PineCone and OpenAI APIs.",
            imgUrl: "https://hebron.onrender.com/assets/hLogo-11df2860.png",
            link: "https://hebron.onrender.com/",
            stats: {
                text: "Full-stack Application",
                icon: faCode
            }
        }
    ];

    return (
        <div id="projects">
            <h3 className='category-header'>PROJECTS</h3>
            {projects.map((project, index) => (
                <div className='project' key={index} onClick={() => window.open(project.link, '_blank')}>
                    <div className='project-left'>
                        <div className='project-img-container'>
                            <img src={project.imgUrl} />
                        </div>
                    </div>
                    <div className='project-right'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className='project-stats'>
                            {project.stats.icon ? <FontAwesomeIcon icon={project.stats.icon} className='project-icon'/> : null}
                            <p>{project.stats.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;