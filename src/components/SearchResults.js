import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BusinessResult from './BusinessResult';


export default function SearchResults() {
  const { term, page } = useParams();
  const [searchResults, setSearchResults ] = useState([]);
  const [ newPage, setNewPage ] = useState(parseInt(page));

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/businesses/search/${term}/page/${page}`)
    .then(res => res.json())
    .then(data => {
      setSearchResults(data)
    });
  }, [term, page])

  function forward() {
    setNewPage(newPage => newPage + 1);
    navigate(`/search/${term}/page/${newPage + 1}`);
  }

  function back() {
    if(page > 1) {
      setNewPage(newPage => newPage - 1);
      navigate(`/search/${term}/page/${newPage - 1}`)
    }
  }

  return <div className='col'>
    {searchResults.map(biz => <BusinessResult
      key={biz.id}
      id={biz.id}
      name={biz.name}
      type={biz.business_type}
      address={biz.address}
      reviews={biz.reviews}
      price={biz.price}
      image_url={biz.image_url}
      transactions={biz.transactions}
    />)}
    <button onClick={forward}>{'>'}</button><button onClick={back}>{'<'}</button>
  </div>
}