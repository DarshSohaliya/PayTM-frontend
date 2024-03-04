import { useEffect, useState } from 'react'
import {Appbar} from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'
import Logout from '../components/Logout'


export const Dashboard = () => {

  const [balance,setBalance] = useState(null)

  useEffect(() => {
    const authtoken = getAuthToken();
    console.log('AuthToken:', authtoken);
  
    axios.get("http://localhost:3000/api/v1/bank/balance", {
      headers: {
        Authorization: `Bearer ${authtoken}`
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      setBalance(response.data.balance);
    })
    .catch(error => {
      console.error('Error fetching balance:', error);
      // Handle error (e.g., show an error message to the user)
    });
  }, []);
  
   
   const getAuthToken = () => {
     return localStorage.getItem('authtoken')
   }

    return <div>
        <Appbar/>
        <Logout/>
        <div className='m-8'>
              <Balance value={balance}/>
            <Users/>
        </div>
    </div>
}