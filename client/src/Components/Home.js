import '../Css/home.css';
import TeamAndAbout from '../Components/abouteTeam';
import Projects from '../Components/ourProjects';
import '../Css/ourProject.css';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [statistics, setStatistics] = useState([]);
  
      useEffect(() => {
        const fetchStatistics = async () => {
          try {
              const response = await fetch('/api/statistics');
              
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
      
              const data = await response.json();
              setStatistics(data);
          } catch (error) {
              console.error('Error fetching statistics:', error);
          }
      };

        fetchStatistics();
    }, []);

  return (
    <div className="home-container">
      <p className="hero-title">Transforming Ideas into Digital Reality</p>
      <p className="hero-contact-description">
        Get in touch with us to discuss your project or learn more about our services.
      </p>
      <a href="/contact-us">
        <button className="contact-btn">Contact Us</button>
      </a>
      
      {statistics.map(stat => (
      <div className="info-section" key={stat.id}>
        <div className="info-box">
          <h2>Experience</h2>
          
          <p className="years">{stat.experience}+ years</p>

          <p className="description">Related to Websites, Apps, and Different Computer Fields</p>
        </div>
        <div className="info-box">
          <h2>All Projects</h2>

          <p className="count">{stat.all_projects}</p>

          <p className="description">Websites, Apps, and UI/UX's</p>
        </div>
        <div className="info-box">
          <h2>In Process Projects</h2>

          <p className="count">{stat.in_process_projects}</p>

          <p className="description">Websites, Apps, and UI/UX's</p>
        </div>
      </div>
      ))}
      <Projects />

      <TeamAndAbout />
    </div>
  );
};

export default HomePage;
