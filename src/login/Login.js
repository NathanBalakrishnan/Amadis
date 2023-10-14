import React,{useEffect, useState} from 'react'
import { userValid } from '../Store/LoginSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Login() {
  
    const[email,setEmail] = useState("")
    const[password,setPassword]= useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onHandleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const userData = {email: email, password: password};
        console.log("user",userData)
        if (userData.email === localStorage.getItem("email") && userData.password === localStorage.getItem("password")) {
            dispatch(userValid(userData))
            alert("Login Successfull")
            navigate('/Dashboard')
        }else{
            alert("Invalid crediential")
            navigate('/')
        }
      }
      useEffect(()=>{
        localStorage.setItem("email","nathan@gmail.com")
        localStorage.setItem("password","admin@123")
      })
  return (
    <div>
      <div className='w-50 m-auto border border-success p-5 bg-warning mb-3 mt-5'>
      <form>
    
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" required onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className='f-left'>Password</label>
          <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" required />
        </div>
      
        <input type="submit" onClick={onHandleSubmit} className="btn btn-primary"/>
      </form>
    </div>
    </div>
  )
}

export default Login
