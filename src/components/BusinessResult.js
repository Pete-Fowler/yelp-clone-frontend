import React from 'react';

export default function BusinessResult({ name, type, address }) {

  return <div>
    <h1>{name}</h1>
    <p>{type}</p>
    <p>{address}</p>
  </div>
}