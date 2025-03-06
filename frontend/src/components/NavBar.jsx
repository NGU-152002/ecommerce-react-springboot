import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router'
import {AuthUpdate} from '../../redux/store'

function NavBar() {


  

  const name = useSelector(state => state.username);
  const dispatch = useDispatch( );
  dispatch(AuthUpdate())
  console.log("Here");
  console.log(name);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm justify-around mb-2">
        <div className="">
          <a className="btn btn-ghost text-xl">  <Link to="/">JEERA{name}</Link></a>
        </div>
        {/* <input type="text" placeholder="Search" className="input input-bordered  w-36 md:w-auto" /> */}
        <div className="search-bar justify-center items-center flex">
          <div className="join p-2 ">
            <div>
              <label className="input join-item">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                <input type="text" placeholder="Search" />
              </label>
            </div>
            <button className="btn btn-neutral join-item "><Link to="/search">Search</Link></button>
          </div>

        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className="badge bg-amber-200 badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
              <Link to="/profile">
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar