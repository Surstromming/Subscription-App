import React from 'react';

import './Header.scss';

export default class Header extends React.Component {
  render() {
    return(
      <header className="header" role="banner">
        <div className="container">
          <h1 className="title">{this.props.title}</h1>
        </div>
      </header>
    )
  }
}
