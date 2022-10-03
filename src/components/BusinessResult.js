import React from 'react';
import { Link } from 'react-router-dom';

export default function BusinessResult({ id, name, type, address }) {

  return <div>
    <Link to={`/business/${id}`}>
      <h1>{name}</h1>
    </Link>
    <p>{type}</p>
    <p>{address}</p>
  </div>
}