import { Component, PropTypes } from 'react';

require('../public/css/grid.css');

export default class MainLayout extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
