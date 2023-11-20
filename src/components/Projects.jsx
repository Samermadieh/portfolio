import './css/Projects.css';
import { useState } from 'react';

function Projects() {

    const [i, setI] = useState(0);

    const infos = [
        {
            title: "Realary",
            description: "Started a YouTube channel that teaches people how to become VR Developers. I create tutorials that are mostly about Unity and development for the Oculus/Meta platform.",
            imgUrl: "https://realary.com/wp-content/uploads/2022/01/cropped-TransparentNeon.png",
            link: "https://www.youtube.com/realaryvr"
        },
        {
            title: "VR UI Package",
            description: "The VR UI Package is a package for Unity designed to accelerate the development of VR applications and games. It offers a collection of prebuilt UI tools that can be easily integrated into your projects. By leveraging these tools, you can eliminate the need to build basic UI functionalities from scratch, allowing you to focus on more creative and specialized aspects specific to your project. We believe that this package will enhance your development experience and empower you to create compelling VR experiences.",
            imgUrl: "https://i0.wp.com/realary.com/wp-content/uploads/2023/05/Logo500px.png?w=500&ssl=1",
            link: "https://assetstore.unity.com/packages/3d/gui/vr-ui-package-249282"
        },
        {
            title: "Onboarding App",
            description: "Hebron is an onboarding application that makes onboarding new employees at software companies easier and faster. It is a full-stack application built with the MERN stack and includes functionality that utilizes PineCone and OpenAI APIs.",
            imgUrl: "https://hebron.onrender.com/assets/hLogo-11df2860.png",
            link: "https://hebron.onrender.com/"
        }
    ]

    function OnTabClick(i) {
        setI(i);
    }

    return (
        <div id="projects-main">
            <div id="projects-content">
                <h2 id="project-title">{infos[i].title}</h2>
                <div id="project-des">
                    <img src={infos[i].imgUrl}/>
                    <div id="desAndLink">
                        <p>{infos[i].description}</p>
                        <a id="project-link" href={infos[i].link} target='_blank'>Visit</a>
                    </div>
                </div>
            </div>
            <div id="projects-tabs">
                <div className={`projects-tab ${i == 0 ? 'selected' : ''}`} onClick={() => OnTabClick(0)}>Realary</div>
                <div className={`projects-tab ${i == 1 ? 'selected' : ''}`} onClick={() => OnTabClick(1)}>VR UI Package</div>
                <div className={`projects-tab ${i == 2 ? 'selected' : ''}`} onClick={() => OnTabClick(2)}>Onboarding App</div>
            </div>
        </div>
    )
}

export default Projects;