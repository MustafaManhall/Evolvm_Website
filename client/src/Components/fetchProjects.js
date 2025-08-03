import { useEffect, useState} from 'react';

const useFatch = (url) => {

    const [data, setData] = useState('');
    const [IsLoding,setIsLoding] = useState(true);
    const [error, setError] = useState(null);

    // Runs every time the template render
    useEffect(() =>{
        fetch(url)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                  } 
                return res.json();
            }).then((data) => {
                console.log(data);
                setData(data);
                setIsLoding(false);
                setError(null);
            })
            .catch(err => {
                // auto catches network / connection error
                setIsLoding(false);
                setError(err.message);
            });
    },[url]);
    
    return { error, IsLoding, data};
}

export default useFatch;