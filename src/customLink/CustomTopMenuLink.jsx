import { useLocation, Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CustomTopMenuLink = ({ children, to }) => {
  const location = useLocation();
  const match = location.pathname.includes(to);

  return (
    <div className={match ? "menu-item active" : "menu-item"}>
      <Link to={to}>{children}</Link>
    </div>
  );
}