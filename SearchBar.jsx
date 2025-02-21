import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query,setQuery]=useState("");

  const handleSubmit= (e)=>{
    e.preventDefault();
    if(query)onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input type="text"
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      placeholder='search recipes...'
      className='flex-grow p-2 rounded border'
      />
      <button type='submit' className='p2 bg-bule-500 text-white rounded'>search</button>
    </form>
  )
}

export default SearchBar