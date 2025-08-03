const  db = require('../Config/db.js');

const getProjects = async () => {
    return new Promise(resolve => {
        db.query('SELECT * FROM projects',
        [],(err,data) => {
            if(err) {
                console.error(err);
                resolve(false);
            } else {
                resolve(data);
            }
        });
    });
}

const UploadMessage = async (user_first_name, user_last_name, user_email, user_phone_number, user_message) => {
    console.log('Inserting message with:', { user_first_name, user_last_name, user_email, user_phone_number, user_message }); 
	// Debugging line
    try {
		const q = 'INSERT INTO evolvm.contact_us (`user_first_name`, `user_last_name`, `user_email`, `user_phone_number`, `user_message`) VALUES (?,?,?,?,?);';
        const result = await new Promise((resolve, reject) => {
            db.query(q,[user_first_name, user_last_name, user_email, user_phone_number, user_message],
                (err, data) => {
                    if (err) {
                        console.error('Error inserting message:', err);
                        return reject(err); // Reject the promise on error
                    }
                    console.log('Message Inserted');
                    resolve(true); // Resolve the promise on success
                }
            );
        });
        return result; // Return the result of the promise
    } catch (error) {
        console.error('Failed to upload message:', error);
        return false; // Return false if there was an error
    }
};

const getStatistics = async () => {
    return await new Promise(resolve => {
        db.query("SELECT * FROM `statistics` WHERE 1",
        [], (err, data) => {
        if(err) {
            console.error(err);
            resolve(false);
        } else {
            resolve(data);
            // console.log(data);
        }
        });
    });
}


module.exports = {
    getProjects,
    UploadMessage,
	getStatistics
}