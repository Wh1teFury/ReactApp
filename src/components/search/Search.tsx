import React from 'react';
import './search.css';

interface SearchProps {
  search: string,
  setSearch: Function,
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <div className='search-block'>
      <input 
      type="text"
      onChange={(event) => setSearch(event.target.value)}
      value = { search }
      placeholder='Search...'
      className='search-input'
      />
      <button disabled = { !search } className={ !search ? 'reset-btn-disabled' : 'reset-btn' } onClick = {() => setSearch('')}></button>
    </div>
  )
}