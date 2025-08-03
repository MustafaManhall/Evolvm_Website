const model = require('../Models/model');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Use port 587 for TLS or 465 for SSL
    secure: false, // Use TLS (false) or SSL (true)
    auth: {
      user: process.env.EMAIL_ACCOUNT, // Your Gmail email address
      pass: process.env.EMAIL_PASSWORD, // Your Gmail app password
    },
  });

const ContactUsEmail = async (user_first_name, user_last_name, user_email, user_phone_number, user_message) => {
    try { 
        // Send email
        await transporter.sendMail({
        from: 'zzsooffyzz@gmail.com', // Sender address (your Gmail email)
        to: 'mustafamanhalcs@gmail.com', // Recipient address
        subject: 'New Message | Evolvm Website', // Email subject
        html: `
            <h3>New Message has been sent to you</h3>
            <p>Full Name: ${user_first_name} ${user_last_name}</p>
            <p>From: ${user_email}</p>
            <p>Phone Number: ${user_phone_number}</p>
            <p>The Message : ${user_message}</p>
        `,
        });
    } catch (error) {
        console.error('Error sending the message:', error);
    }
} 


const projectsControllerGet = async (req,res) => {
    try {
        const getProjects = await model.getProjects();
        // console.log(getProjects);
        
        if (getProjects) {
            res.json(getProjects); // Send the results as JSON to the frontend
        } else {
            res.json('Can not get the data from the server');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Database query failed' });
    }
}

const contactUsControllerPost = async (req,res) => {
    const { user_first_name, user_last_name, user_email, user_phone_number, user_message} = req.body;
    // console.log(req.body);
    try {
        const uploadMessage = await model.UploadMessage(user_first_name, user_last_name, user_email, user_phone_number, user_message);
        if (uploadMessage) {
			ContactUsEmail(user_first_name, user_last_name, user_email, user_phone_number, user_message);
            res.json(uploadMessage); // Send the results as JSON to the frontend
        } else {
            res.json('Can not send the message');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to insert the message' });
    }
}

const statisticsControllerGet = async (req,res) => {

	try{
	const statistics = await model.getStatistics();
    //console.log(statistics); // Make sure this logs an array
        if (statistics) {
            res.json(statistics); // Return as JSON
        }
	} catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to get the statistics' });
    }

}

module.exports  = {
    projectsControllerGet,
    contactUsControllerPost,
	statisticsControllerGet,
	ContactUsEmail,
}