import axios from 'axios';

// fetch data
const fetchData = (url, options) => {
    return new Promise((resolve, reject) => {
        axios.get(url, options)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
};


export {
    fetchData
}