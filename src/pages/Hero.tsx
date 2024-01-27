import { Users } from '../types/types';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

import Header from '../components/Header'
import { getUsers } from '../api/users.api';
import Tables from '../components/Tables';
import Pagination from '../components/Pagination';
import { LoaderIcon } from '../assets/icons/Icons';
import { searchUsers } from '../service/user.service';


function Hero() {

  // NOTE : using useState instead of global state manager because I don't need to manage a complex state
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const [users,setUsers]=useState<Users | null>(null);
  const [originalUsers,setOriginalUsers]=useState<Users | null>(null);
  const [page,setPage]=useState<number>(1);
  const [usersPerPage,setUsersPerPage]=useState<number>(10);
  const [filters , setFilters] = useState({
    email: false,
    phone : false,
  })

  useEffect(()=>{
    fetchUsers()
  },[usersPerPage,page])

  const fetchUsers=async()=>{
    console.clear();
    setIsLoading(true)
    try {
      const usersResponse = await getUsers(page,usersPerPage);
      setUsers(usersResponse);
      setOriginalUsers(usersResponse);
    } catch (error) {
      toast.error('Error fetching users, please try again later.');
      console.error('Error fetching users:');
    }
    finally{
      setIsLoading(false);
    }
  }
  
  const handleSearch = (query:string) => {
    if(!query) return setUsers(originalUsers);
    // When search in back-end, need to debounce
    const filteredUsers = users && searchUsers(users, query, filters);
    setUsers(filteredUsers);
  };

  return (
    <div>
      <Header onSearch={handleSearch} filters={filters} setFilters={setFilters}/>
      <main className="min-w-full">
        {isLoading && (
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <LoaderIcon />
          </div>
        )}

        {!isLoading && users && (
          <section className="container px-4 md:px-6 mx-auto">
            <Tables users={users.results} usersPerPage={usersPerPage} setUsersPerPage={setUsersPerPage} />
            <Pagination page={page} setPage={setPage} />
          </section>
        )}
      </main>
    </div>
  )
}

export default Hero