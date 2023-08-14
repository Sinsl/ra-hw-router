import { useLocation, Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CustomTask1Menu = ({ children, to }) => {
  const location = useLocation();
  const match = location.pathname === to;

  return (
    <Link to={to} className={match ? "menu__item menu__item-active" : "menu__item"}>{children}</Link>
  );
}