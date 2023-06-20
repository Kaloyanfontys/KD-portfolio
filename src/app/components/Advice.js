import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Advice = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const fetchAdvice = async () => {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
    };

    fetchAdvice();
  }, []);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-6 flex flex-col">
        <h1 className="text-gray-700 font-bold text-xl mb-4 text-center">
          Daily Advice
        </h1>
        <p className="text-center">{advice}</p>
      </div>
    </div>
  );
};

export default Advice;