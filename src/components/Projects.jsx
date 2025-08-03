import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'A brief description of Project One.',
            technologies: ['JavaScript', 'React', 'CSS']
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            technologies: ['Python', 'Pandas', 'Matplotlib']
        },
        {
            title: 'Project Three',
            description: 'A brief description of Project Three.',
            technologies: ['SQL', 'Tableau']
        }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;