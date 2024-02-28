import React from 'react';
import { IUser } from './../../models/IUser';
import editDate from './../../hooks/editDate';
import Tooltip from './../tooltip/Tooltip';
import './table.css'

interface UserProps {
  users: IUser[],
}

export default function Table({ users }: UserProps) {
  return (
    <table className='table-users'>
      <thead>
        <tr>
          <th className='avatar-title'>Avatar</th>
          <th className='name'>Name</th>
          <th className='location'>Location</th>
          <th className='email'>Email</th>
          <th className='phone'>Phone</th>
          <th className='registered'>Registered Date</th>
        </tr>
      </thead> 
        <tbody>
          {users.map(user => {
            return (
              <tr key={ user.id }>
                <td>
                  <Tooltip user = { user }>
                    <img className='avatar-thumbnail' src={ user.picture.thumbnail } alt="avatar"/>
                  </Tooltip>
                </td >
                <td>{ user.name }</td>
                <td>{ user.location }</td>
                <td>{ user.email }</td>
                <td>{ user.phone }</td>
                <td>{ editDate(user.registeredDate) }</td>
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}