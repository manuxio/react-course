import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(React.PropTypes.node),
      PropTypes.node
    ])
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello... Serfin!</h1>
        {this.props.children}
      </div>
    );
  }
}
