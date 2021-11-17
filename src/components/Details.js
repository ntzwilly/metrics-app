import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const Details = () => {
  const { country } = useParams();
  console.log(country);
  return (
    <div>
      <Header />
      <h1>
        { country }
        ...New country
      </h1>
    </div>
  );
};
export default Details;
