import { Suspense } from "react";

import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
        <header>
        <ul>
            <li>
                <NavLink to="/">Домашняя</NavLink>
            </li>
        
            <li>
            <NavLink to="/dogs">Коллекция</NavLink>
            </li>
            </ul>
        </header>
            <Suspense fallback={<div>Loading...</div>}>
        <main>
            <Outlet />
        </main>
            </Suspense>
        {/* <footer>
            Footer
        </footer> */}
    </div>
    );
    

}