import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
