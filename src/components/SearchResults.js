import React from 'react';
import BusinessResult from './BusinessResult';
import styles from './SearchResults';

export default function SearchResults({ searchResults }) {

  
  return <div>
    {searchResults.map(biz => <BusinessResult 
      key={biz.id} 
      id={biz.id} 
      name={biz.name} 
      type={biz.business_type}
      address={biz.address}
      reviews={biz.reviews}
    />)}
  </div>
}