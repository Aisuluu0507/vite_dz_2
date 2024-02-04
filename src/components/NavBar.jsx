import { NavLink } from "react-router-dom";

const activeNavLink = ({ isActive }) => (isActive ? "active-menu" : "");

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className='link_one' to="/create_posts">CreatePost</NavLink>
          <li>
          <NavLink className='link_one' to="/">WatchPosts</NavLink>
        </li>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;