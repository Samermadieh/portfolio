import './css/Experience.css';

function Experience() {
    const experience = [
        {
            title: "CTO",
            company: "Nahda",
            date: "2023 - PRESENT",
            description: "CTO at Educational Technology startup Nahda. We are building a platform that enables the 400+ million Arabic speakers to learn skills that are in demand in today's global economy. Our goal is to provide quality Arabic education and support Arab content creators.",
            link: "https://www.nahda.io/",
            skills: [
                "Full-stack", "UI/UX", "Azure", "Video"
            ]
        },
        {
            title: "Software Engineer III",
            company: "Clothing Tech",
            date: "2022 - PRESENT",
            description: "Working as Lead UI developer on a team developing a 3D software solution that allows users to design and style garments. This solution is the first 3D CAD created specifically for fashion design. Won “Player of the Month” award at the company. Led company wide training on UI, Unity, and C#. Part of the Social Committee responsible for organizing events and activities for the company.",
            link: "https://www.clothingtech.com/",
            skills: [
                "C#", "Unity", ".NET", "UI", "Azure", "MERN"
            ]
        },
        {
            title: "VR Software Engineer",
            company: "Team 21 Studio",
            date: "2021 - 2022",
            description: "Worked with a team on developing the first major fully cross platform VR MMORPG: Ilysia. Worked on all aspects of the game including UI/Login scenes, combat mechanics, game items and consumables, special effects, and state systems.",
            link: "https://www.clothingtech.com/",
            skills: [
                "C#", "Unity", ".NET", "UI", "SVN"
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Independent",
            date: "2019 - PRESENT",
            description: "Developing multiple full-stack websites and apps for myself and customers using both MERN & LAMP stacks. Additionally, I am proficient at using WordPress and have used it to create numerous professional websites.",
            link: "",
            skills: [
                "Full-Stack", "MERN", "LAMP", "WordPress"
            ]
        }
    ];

    return (
        <div id="experience">
            {
                experience.map((job, index) => (
                    <div className='experience-item' key={index} onClick={ job.link != "" ? () => window.open(job.link, '_blank') : null}>
                        <div className='experience-left'>
                            <p>{job.date}</p>
                        </div>
                        <div className='experience-right'>
                            <h3>{job.title} · {job.company}</h3>
                            <p>{job.description}</p>
                            <div className='experience-skills'>
                                {job.skills.map((skill, index) => (
                                    <div className='experience-skill' key={index}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Experience;