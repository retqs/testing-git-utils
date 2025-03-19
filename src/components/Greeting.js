import React from 'react';

const Greeting = ({ name }) => {
  if (!name) {
    return <p>Hello, stranger!</p>;
  }
  return <p>Hello, {name}!</p>;
};

export default Greeting;