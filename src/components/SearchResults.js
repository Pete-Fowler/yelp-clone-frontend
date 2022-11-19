import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessResult from "./BusinessResult";

export default function SearchResults() {
  const url = process.env.REACT_APP_URL;

  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`${url}/businesses/search/${term}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      });
  }, [term]);

  return (
    <div className="col">
      {searchResults.map((biz) => (
        <BusinessResult
          key={biz.id}
          id={biz.id}
          name={biz.name}
          type={biz.business_type}
          address={biz.address}
          reviews={biz.reviews}
          price={biz.price}
          image_url={biz.image_url}
          transactions={biz.transactions}
        />
      ))}
    </div>
  );
}
