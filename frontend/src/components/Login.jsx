import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { AuthUpdate } from '../../redux/store';



function Login({auth,setAuth}) {

  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

    const dispatch = useDispatch;


  const API_URL = "http://127.0.0.1:8080";
  const handleAuth = (e)=>{
    e.preventDefault();
    setAuth(!auth);
  }

  const handleEmailChange= (e) =>{
    setEmail(s=>e.target.value);
}

const handlePassChange= (e) =>{
  setPass(s=>e.target.value);
}

const handleResponse =(res)=>{
  dispatch(AuthUpdate(res))
}

const handleSubmit = (e) =>{
  e.preventDefault();
  fetch(API_URL+'/auth/login',{method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
    email,
    password:pass
  })}).then(res=>res.json())
  .then(res =>handleResponse(res));
}

    return (
        <>


<div className="form-container h-[100vh]">

<form className="flex flex-col space-y-4 items-center justify-center h-full " onSubmit={handleSubmit}>
  {/* Email Input */}
  <div className="inputs flex flex-col space-y-4 bg-[#ecece9] rounded-sm p-5">


  <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium">Email</label>
    <label className="input input-bordered flex items-center gap-2">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input
        type="email"
        placeholder="mail@site.com"
        required
        className="grow"
        value={email}
        onChange={handleEmailChange}

      />
    </label>
  </div>

  {/* Password Input */}
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium">Password</label>
    <label className="input input-bordered flex items-center gap-2">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
          <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
        </g>
      </svg>
      <input
        type="password"
        required
        placeholder="Password"
        minLength="8"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        className="grow"
        value={pass}
        onChange={handlePassChange}

      />
    </label>
  </div>
  <button type='submit' className="btn btn-accent">Login</button>

  <button onClick={handleAuth} className="btn btn-link">New? Register Here</button>
  </div>
</form>
</div>
        </>
    )
}

export default Login