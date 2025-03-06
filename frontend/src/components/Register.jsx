import React from 'react'



function Register({auth,setAuth}) {



  const handleAuth = (e)=>{
    e.preventDefault();
    setAuth(!auth);
  }



  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log()
  }

    return (
        <>



<form className="flex flex-col space-y-4 h-[100vh] items-center justify-center" onSubmit={handleSubmit}>
<div className="inputs flex flex-col  space-y-4 bg-[#ecece9] rounded-sm p-5  ">
  {/* Email Input */}
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
        placeholder="mail@gmail.com"
        required
        className="grow"
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
      />
    </label>
  </div>

  <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium">Re-type Password</label>
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
        placeholder="Re-type password Again"
        minLength="8"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        className="grow"
      />
    </label>
  </div>
  <button type="submit" className="btn btn-accent" >Register</button>
  <button className="btn btn-link" onClick={handleAuth}>Already Member? Click Here</button>
</div>
</form>
        </>
    )
}

export default Register