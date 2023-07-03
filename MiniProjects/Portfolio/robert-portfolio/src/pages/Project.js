/*
import React from 'react';
import '../styles/Projects.css'; // Import the CSS file for styling

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Data Engineering Pipeline',
      description:
        'Built a data engineering pipeline to process and analyze large volumes of data using Apache Spark, Kafka, and Hadoop.',
      technologies: ['Apache Spark', 'Kafka', 'Hadoop'],
    },
    // Add more projects here
  ];

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      {projects.map((project) => (
        <div className="project" key={project.id}>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;
*/

import React from 'react'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'

function Project() {
  return (
    <div>
      <Header />
      <ProjectList />
    </div>
  )
}

export default Project;