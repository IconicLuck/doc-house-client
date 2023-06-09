import { Link } from "react-router-dom";
import { FaClinicMedical } from 'react-icons/fa';
import { useSelector } from "react-redux";


const Header = () => {

    const { auth } = useSelector(state => state)
    console.log(auth)

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Appointment</Link></li>
        {auth.user ?
            <button>Logout</button>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div>
            <div className="bg-slate-800 text-white">
                <div className="navbar md:flex justify-between w-9/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <div className="btn btn-ghost normal-case text-xl space-x-1">
                            <FaClinicMedical></FaClinicMedical><p className="font-bold"><span className="text-[#F7A582]">Doc</span> House</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;