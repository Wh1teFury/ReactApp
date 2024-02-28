import { useState } from 'react';
import useUsers from './useUsers';
import useDebounce from './useDebounce';

export default function useFilter() {
  const { users } = useUsers();
  const [ search, setSearch ] = useState<string>('');
  const debouncedSearch = useDebounce(search, 300);

  const filteredUsers = debouncedSearch ? users.filter((user) => user.name.toLowerCase().includes(debouncedSearch.toLowerCase())) : users;

  return { search, setSearch, filteredUsers }
}