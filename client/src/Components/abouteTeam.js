import '../Css/aboutTeam.css'; 

const TeamAndAbout = () => {
  return (
    <div className="team-about-container">
      <div className="team-section">
        <h2 className="team-title">Our Team</h2>
        
        <div className="team-member-section">
          <div className="team-member">
            <img src="./images/founder.jpeg" alt="Founder" className="team-member-image" />
            <div className="team-member-info">
              <h3>Founder and Business Manager</h3>
              <p>Software engineer who wants to make a difference in the tech world</p>
            </div>
          </div>
          
          <div className="team-member">
            <img src="./images/co-founder.jpeg" alt="Co-Founder" className="team-member-image" />
            <div className="team-member-info">
              <h3>Co-Founder and Software Manager</h3>
              <p>Software engineer with experience in different computer fields</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-title">About Us</h2>
        <div className="about-content">
          <img src="./images/Evolvm_Word_logo.png" alt="Evolvm Logo" className="about-logo" />
          <div className="about-text">
            <p>Evolvm is a development platform where we create custom websites and mobile apps tailored to meet client needs. in Evolvm, we deliver high-quality digital solutions using modern frameworks and technologies. Whether you're looking for a sleek website or a functional mobile app, Evolvm brings your ideas to life with professional craftsmanship and cutting-edge tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAndAbout;
