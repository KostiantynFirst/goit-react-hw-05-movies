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
        <main>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </div>
    );
    

}