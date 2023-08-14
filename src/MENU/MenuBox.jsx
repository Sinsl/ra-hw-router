import Menu from "./Menu";
import './menu.css';
import PropTypes from 'prop-types';

export const MenuBox = ({ content }) => {

  return (
    <div className="page">
      <Menu />
      {content}
    </div>  
  );
}
MenuBox.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element
}
