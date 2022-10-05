import { withRouter, NavLink } from "react-router-dom";
const items = [
  { to: "/", exact: true, name: "Home" },
  { to: "/new-comment", name: "New Comment" },
];
const Navigation = (props) => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);