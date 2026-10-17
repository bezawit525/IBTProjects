import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2>Something went wrong.</h2>
          <p>This part of Addis Eats could not be displayed.</p>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
