import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

export const TaskHeader = ({title}) => {
  return (
    <>
      <header className="task-title">
        <h2>{title}</h2>
      </header>
      <Outlet />
    </>
    
  )
}

TaskHeader.propTypes = {
  title: PropTypes.string,
}