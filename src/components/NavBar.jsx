import { NavLink } from "react-router-dom";

const activeNavLink = ({ isActive }) => (isActive ? "active-menu" : "");

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className='link_one' to="/posts">
            Посты
          </NavLink>
        </li>
        <li>
          <NavLink className='link_two' to="/login">
            Вход
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;