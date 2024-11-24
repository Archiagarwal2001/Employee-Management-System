import React, {useContext, useState} from 'react'
import Login from './Componenets/Auth/Login'
import EmployeeDashboard from './Componenets/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componenets/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { useEffect } from 'react'

const App = () => {
  
  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)
  useEffect(() => {
    if(authData){
       const loggedInUser = localStorage.getItem("loggedInUser")
       if(loggedInUser){
        setUser(loggedInUser.role)
       }

    }
  }, [authData]);
  
 

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    }
    else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      
    }
    else{
      alert("Invalid Credentials")
    }   
  }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
     
    </>
  )
}

export default App