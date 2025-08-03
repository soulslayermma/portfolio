import React from 'react';

const Resume = () => {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <section className="education">
                <h3>Education</h3>
                <ul>
                    <li>
                        <strong>Bachelor of Science in Data Analytics</strong> - University Name, Year
                    </li>
                    <li>
                        <strong>Certification in Data Science</strong> - Institution Name, Year
                    </li>
                </ul>
            </section>
            <section className="experience">
                <h3>Experience</h3>
                <ul>
                    <li>
                        <strong>Data Analyst</strong> - Company Name, Year - Present
                        <p>Responsibilities and achievements...</p>
                    </li>
                    <li>
                        <strong>Intern Data Analyst</strong> - Company Name, Year - Year
                        <p>Responsibilities and achievements...</p>
                    </li>
                </ul>
            </section>
            <section className="skills">
                <h3>Technical Skills</h3>
                <ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Tableau</li>
                    <li>Excel</li>
                    <li>R</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;