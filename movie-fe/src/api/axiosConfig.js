import axios from 'axios';

const baseURL = window._env_.REACT_APP_BASE_URL; // Default value if not set

export default axios.create({
    baseURL: baseURL,
});
