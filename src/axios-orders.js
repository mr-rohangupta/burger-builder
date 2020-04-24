import axios from 'axios';
//Axios for sending http requests
const instance = axios.create({
    baseURL: 'https://react-my-burger-eba2f.firebaseio.com/'
});

export default instance;