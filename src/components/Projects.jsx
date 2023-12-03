import './css/Projects.css';

function Projects() {

    const projects = [
        {
            title: "Realary",
            description: "Founder of educational YouTube channel \'RealaryVR\' that produces VR development content. I create tutorials that are mostly about Unity and VR development for the Oculus/Meta platform.",
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
    ];

    return (
        <div id="projects">
            {projects.map((project, index) => (
                <div className='project' onClick={() => window.open(project.link, '_blank')}>
                    <div className='project-left'>
                        <div className='project-img-container'>
                            <img src={project.imgUrl} />
                        </div>
                    </div>
                    <div className='project-right'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;