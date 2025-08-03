import '../Css/ourProject.css';
import { useState, useEffect } from 'react';

const OurProjects = () => {

    const [projects, setProjects] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/our-projects'); 
                if (!response.ok) throw new Error('Failed to fetch projects');
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProjects();
    }, []); 

    return ( 
        <div>
            <h2 className="contact-header">Take your Project to Another Level With Us!</h2>
            {error ? (
                <p>{error}</p>
            ) : (
                projects.map(project => (    
                    <div className="project-list" key={project.id}>
                        <h1 className="app-title">{project.project_name}</h1>
                        <div className="content">
                            <div className="project-content">
                                <img className="project-image" src={project.project_image} alt="" />
                                <p className="description-projects">{project.project_description}</p>
                            </div>
                        </div>
                        <h2 className="app-title">Used Technologies</h2>
                        <div className="tech">
                            {project.figma && <div className="tech-container"><img className="tech-image" src={project.figma} alt="ui-ux"></img></div>}
                            {project.react && <div className="tech-container"><img className="tech-image" src={project.react} alt="front-end"></img></div>}
                            {project.node && <div className="tech-container"><img className="tech-image" src={project.node} alt="back-end"></img></div>}
                            {project.phpmyadmin && <div className="tech-container"><img className="tech-image" src={project.phpmyadmin} alt="database"></img></div>}
                            {project.flutter && <div className="tech-container"><img className="tech-image" src={project.flutter} alt="flutter"></img></div>}
                            {project.bootstrap && <div className="tech-container"><img className="tech-image" src={project.bootstrap} alt="bootstrap"></img></div>}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default OurProjects;
