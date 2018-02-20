import React from 'react';
import { Redirect } from 'react-router';

import Header from './../components/Header/Header';
import Subscription from './../components/Subscription/Subscription';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="Your Submission" />
        <Subscription />
      </div>
    );
  }
}
