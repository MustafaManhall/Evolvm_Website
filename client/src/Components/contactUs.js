import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/contactus.css';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        const data = {
            user_first_name: firstName,
            user_last_name: lastName,
            user_email: email,
            user_phone_number: phoneNumber,
            user_message: message,
        };

        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Message sent successfully');
                navigate('/'); // Navigate on success
                const fData = await response.json();
                console.log(fData);
            } else {
                console.error('Error sending message');
                // Handle error if response is not ok
                const errorData = await response.json();
                console.error('Error data:', errorData);
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="contact-container">
            <h2 className='header'>Get in Touch With Us!</h2>
            <p className="contact-description">Have a project in mind? Reach out to us and let's turn your vision into reality with our tailored digital solutions.</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="grid-container">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            name='firstName'
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required // Add required attribute for validation
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            name='lastName'
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            name='phoneNumber'
                            type="tel"
                            id="phoneNumber"
                            placeholder="+1 995 555 5555"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name='message'
                            id="message"
                            placeholder="Tell us What We Can Help You With"
                            rows="5"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group form-inline">
                        <label htmlFor="privacyPolicy">
                            By submitting this form I Confirm that all the Above information is correct and I understand and agree to the <a href="/privacy-policy">Privacy Policy</a> 
                        </label>
                    </div>
                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>

            <div className="contact-info">
                <p>Chat to us</p>
                <p>Our friendly team is here to help.</p>
                <p><a href="mailto:support@evolvm.com">Support@evolvm.com</a></p>
            </div>
        </div>
    );
};

export default ContactForm;
