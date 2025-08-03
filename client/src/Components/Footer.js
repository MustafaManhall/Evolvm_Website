import '../Css/footer.css';
const Footer = () => {
    return (
        <div className="nav-container">
            <footer className="footer">
                <div className="footer-content">
                    {/* Logo Section */}
                    <div className="footer-logo">
                        <img src="images/Evolvm_Word_logo.png" alt="Evolvm Logo" width={50} height={50} />
                        <p>Evolvm</p>
                    </div>

                    {/* Copyright Section */}
                    <div className="footer-copyright">
                        <p>Copyright (C) 2024 EVOLVM</p>
                    </div>

                    {/* Social Media Icons Section */}
                    <div className="footer-social">
                        <a href="https://www.facebook.com/evolvmofficial" target="_blank" rel="noopener noreferrer">
                            <img src="images/facebook-icon.png" alt="Facebook" width={30} height={30} />
                        </a>
                        <a href="https://www.instagram.com/evolvm" target="_blank" rel="noopener noreferrer">
                            <img src="images/instagram-icon.png" alt="Instagram" width={30} height={30} />
                        </a>
                        <a href="https://www.linkedin.com/company/evolvm/" target="_blank" rel="noopener noreferrer">
                            <img src="images/linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
