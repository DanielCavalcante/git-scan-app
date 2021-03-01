import React, { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Torou dento!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
