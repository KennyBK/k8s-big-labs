import axios from 'axios';

const baseURL = process.env.BASE_URL; // Default value if not set

export default axios.create({
    baseURL: baseURL,
});

console.log(baseURL)
console.log(process.env.BASE_URL)