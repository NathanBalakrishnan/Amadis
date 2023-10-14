import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { userSignup } from '../Store/LoginSlice';
import { useNavigate } from 'react-router-dom';
function Signin() {
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword]= useState("")
    const[rePassword,setRePassword] = useState("")
const dispatch = useDispatch()
    const onHandleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        console.log(email,password)
        const userData = {firstName:firstName,lastName:lastName,email: email, password: password,rePassword:rePassword };

        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        dispatch(userSignup(userData))
      }

  return (
   
          <>
    <div className='w-50 m-auto border border-success p-5 bg-warning mb-3'>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input type="email" className="form-control" onChange={e => setFirstName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input type="email" className="form-control" onChange={e => setLastName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className='f-left'>Password</label>
          <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className='f-left'>Retype Password</label>
          <input type="password" className="form-control" onChange={e => setRePassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Signin
