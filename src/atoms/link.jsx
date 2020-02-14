import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export default function Link({ to, children }) {
  return (
    <RouterLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </RouterLink>
  );
}

Link.defaultProps = {
  to: '/',
  children: <></>,
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
