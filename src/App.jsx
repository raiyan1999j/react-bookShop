import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <section className="w-[1170px] mx-auto small:w-[468px]">
          <div className="navbar bg-base-100 small:flex small:justify-center">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                  <NavLink to='/' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/bookList' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Listed books</NavLink>
                </li>
                <li>
                  <NavLink to='/pageRead' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>page to read</NavLink>
                </li>
                <li>
                <NavLink to='/comments' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Comments</NavLink>
                </li>
                <li>
                <NavLink to='/contact' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Contact Us</NavLink>
                </li>
                <li className="flex flex-row justify-between">
                <button className="rounded-xl py-2 px-6 bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border hover:border-green-600 hover:transition-all hover:ease-in hover:duration-300 capitalize">sign in</button>
                <button className="rounded-xl py-2 px-6 bg-sky-600 text-white hover:bg-white hover:text-sky-600 hover:border hover:border-sky-600 hover:transition-all hover:ease-in hover:duration-300 capitalize">sign up</button>
                </li>
                </ul>
              </div>
              <a className="btn btn-ghost font-workSans font-bold text-[28px]">BookStore</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1  font-workSans text-lg font-normal capitalize">
                <li>
                  <NavLink to='/' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/bookList' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Listed books</NavLink>
                </li>
                <li>
                  <NavLink to='/pageRead' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>page to read</NavLink>
                </li>
                <li>
                <NavLink to='/comments' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Comments</NavLink>
                </li>
                <li>
                <NavLink to='/contact' className={({isActive,isPending})=>{
                    return isActive?'bg-white border border-[#23BE0A] text-[#23BE0A]':'text-[#131313cc]'
                  }}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end capitalize font-workSans text-lg font-semibold small:hidden">
              <a className="btn mr-4 py-[18px] px-7 bg-[#23BE0A] text-white">sign in</a>
              <a className="btn py-[18px] px-7 bg-[#59C6D2] text-white">sign up</a>
            </div>
          </div>
        </section>
        <Outlet/>
      </div>
    </>
  );
}
