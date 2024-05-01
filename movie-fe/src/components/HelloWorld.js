import { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/hello');
        setMessage(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <p>BE: {message}</p>
    </div>
  );
}

export default HelloWorld;
