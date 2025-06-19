import { NavLink } from "react-router";

interface isActive {
  isActive: string;
}

function Header() {
  return (
    <header>
      <h1>Todo List</h1>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink className={({ isActive }: isActive) => (isActive ? "menu-bark" : "menu")} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }: isActive) => (isActive ? "menu-bark" : "menu")} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }: isActive) => (isActive ? "menu-bark" : "menu")} to="/list">
                TodoList
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
