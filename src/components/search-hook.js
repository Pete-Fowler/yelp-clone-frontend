import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function handleSubmit(term) {
const navigate = useNavigate();


  e.preventDefault();
  fetch(`http://localhost:9292/businesses/search/${term}`)
  .then(res => res.json())
  .then(data => {
    handleSearch(data);
    navigate(`/search/${term}`);
  });
}