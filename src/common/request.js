import axios from 'axios';


const request = function (config) {
    return new Promise(((resolve, reject) => {
        axios(config).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err.message);
        });
    }))
};

export default request;