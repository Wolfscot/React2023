import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";



const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { path: "/", title: "Start a search" },
        { path: "/my-job", title: "My Jobs" },
        { path: "/salary", title: "Salary estimate" },
        { path: "/post-job", title: "Post A Job" },
    ];

    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <nav className="flex justify-between items-center py-6">
                <NavLink to="/" className='flex items-center gap 2 text-2xl'><img src="/images/logo.png" height="50" width="200" /></NavLink>
                {/* nav items lg*/}
                <ul className="hidden lg:flex gap-12">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
                    <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
                    <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign up</Link>
                </div>
                {/* mobile nav*/}
                <div className="lg:hidden block">
                    <button onClick={handleMenuToggler}>
                        {isMenuOpen ? (
                            <><FaXmark className="w-5 h-5 text-primary/75" /></>
                        ) : (
                            <><FaBarsStaggered className="w-5 h-5 text-primary/75" /></>
                        )}
                    </button>
                </div>
            </nav>
            {/* mobile nav items */}
            <div  className={`px-4 border py-5 rounded-sm ${isMenuOpen ? "" : "hidden" }`} >
                <ul>
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-white py-1" >
                            <NavLink
                                onClick={handleMenuToggler}
                                to={path}
                                className={({ isActive }) => (isActive ? "active" : "")}>
                                {title}
                            </NavLink>
                        </li>
                    ))}

                    <li className="text-white py-1">
                        <Link to="login">Log in</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;