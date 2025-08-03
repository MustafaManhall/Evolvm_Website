import { Link } from 'react-router-dom';
import '../Css/notFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <Link to="/" className="home-button">Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
