import PropTypes from 'prop-types';

export const ErrorBox = ({ msg }) => {
  return (
    <div className="err-box">
      <div className="err-msg">{msg}</div>
    </div>
  )
}

ErrorBox.propTypes = {
  msg: PropTypes.string
}