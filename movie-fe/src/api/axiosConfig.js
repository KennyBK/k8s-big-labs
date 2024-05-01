import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL; // Default value if not set

export default axios.create({
    baseURL: baseURL,
});
