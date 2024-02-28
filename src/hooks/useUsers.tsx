import { useEffect, useState } from 'react';
import { IUser } from '../models/IUser';
import { URL } from '../utils/const';

export default function useUsers() {
  const [ users, setUsers ] = useState<IUser[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<string>('')
  
  async function fetchUsers() {
    try {
      setError('')
      setLoading(true)
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data.results.map((item: any) => {
        return {
          id: item.login.uuid,
          name: `${item.name.first} ${item.name.last}`,
          location: `${item.location.state}, ${item.location.city}`,
          picture: {
            medium: item.picture.medium,
            thumbnail: item.picture.thumbnail,
          },
          email: item.email,
          phone: item.phone,
          registeredDate: item.registered.date        
        }
      }))
      setLoading(false)
    } catch (error: unknown) {
      setLoading(false)
      setError((error as Error).message)    
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return { loading, error, users }
}