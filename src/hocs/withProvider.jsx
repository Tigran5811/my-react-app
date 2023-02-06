import React from 'react';
import { Consumer } from '../context/AuthContext';

export const withProvider = (Component) => class Wrapper extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => <Component {...value} {...this.props} />}
      </Consumer>
    );
  }
};
