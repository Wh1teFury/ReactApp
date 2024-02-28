import React from 'react';
import Search from './../search/Search';
import Table from './../table/Table';
import Loading from './../loading/Loading';
import useFilter from './../../hooks/useFilter';
import useUsers from './../../hooks/useUsers';
import './main-page.css';

export default function MainPage() {
  const { loading, error } = useUsers()
  const { search, setSearch, filteredUsers } = useFilter()
  return (
    <main>
      <section className='main-page'>
        <div className='container'>
          <div className='main-page-wrapper'>
            { loading ? <Loading/> : error ? <p className='error'>{ error }</p> : 
              <div className='main-page-block'>
                <Search search = { search } setSearch = { setSearch }/>
                { search !== '' && (filteredUsers.length === 0 || filteredUsers === undefined) ? 
                  <p className='not-found'>Пользователь не найден</p> : <Table users = { filteredUsers }/>
                }                
              </div>
            }
          </div>
        </div>
      </section>
    </main>
  );
}
