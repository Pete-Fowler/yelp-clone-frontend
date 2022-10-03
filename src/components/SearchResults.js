import React from 'react';
import BusinessResult from './BusinessResult';

export default function SearchResults({ searchResults }) {

  
  return <div>
    SearchResults
    {searchResults.map(biz => <BusinessResult 
      key={biz.id} 
      name={biz.name} 
      type={biz.business_type}
      address={biz.address}
    />)}
  </div>
}