import { NavLink } from "react-router-dom";

const activeNavLink = ({ isActive }) => (isActive ? "active-menu" : "");

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className='link_one' to="/posts">
           Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;