import React, { useRef } from 'react'
import { navbarData } from '../staticData'
import { Link, useLocation } from 'react-router-dom'


export default function Nav() {

    const drawerToggle = useRef(null);
    const closeDrawer = () => drawerToggle.current ? drawerToggle.current.checked = false : null;
    const location = useLocation() ;

    
  return (
    <section>
    {/* pc Nav */}
    <div className="navbar bg-base-100 shadow-sm">
    <div className="flex items-center lg:flex-1">
    <div className="drawer-content lg:hidden ">
        <label htmlFor="my-drawer" className="drawer-button cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg></label>
    </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1">
        {
            navbarData.map((data,i)=> <li key={i}><Link className={`${location.pathname === data.link ? 'bg-primary font-medium text-white' : ''} `} to={data.link}>{data.name} </Link></li>)
        }
        </ul>
    </div>
    </div>

    {/* mobile Nav */}
   <div className="drawer">
  <input ref={drawerToggle} id="my-drawer" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {
        navbarData.map((data,i)=> <li  key={i}><Link className={`${location.pathname === data.link ? 'bg-primary font-medium text-white' : ''} `} onClick={closeDrawer} to={data.link}>{data.name} </Link></li>)
      }
    </ul>
  </div>
</div>
    </section>
  )
}
