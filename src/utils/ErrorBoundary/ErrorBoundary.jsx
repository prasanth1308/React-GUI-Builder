/*
* ErrorBoundary.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used catch exception on the application send it to logger function(WIP)
* Template: JSx
* Prerequisites: React and babel

METHODS
--------
componentDidCatch(error, info)
*/
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
     * @method
     * @name - componentDidCatch
     * This method will catch all the exceptions in this class
     * @param error
     * @param info
     * @returns none
  */
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    // if (hasError) {
    //   // You can render any custom fallback UI
    //   return <h1>Something went wrong.</h1>;
    // }
    return children;
  }
}

export default ErrorBoundary;
