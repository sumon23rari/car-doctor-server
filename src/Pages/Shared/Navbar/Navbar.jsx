import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'; 
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
const Navbar = () => {
  const {user,logOutUser}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOutUser()
    .then(() => {
  alert('signOut successfully')
    }).catch((error) => {
      console.error(error)
    });
  }
    const links=<>
<li><NavLink to="/">home</NavLink></li>
<li><NavLink to="/about">about</NavLink></li>
{
  user?.email? <>
  <li><NavLink to="/bookings">My Bookings</NavLink></li>
  <li><button onClick={handleLogOut}>logOut</button></li>
  </>:
  <li><NavLink to="/logIn">logIn</NavLink></li>
}
<li><NavLink to="/services">Services</NavLink></li>
<li><NavLink to="/blog">blog</NavLink></li>
<li><NavLink to="/contact">contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns={logo} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
         <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-warning">appointment</button>
        </div>
      </div>
    );
};

export default Navbar;