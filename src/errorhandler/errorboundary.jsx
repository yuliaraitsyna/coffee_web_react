import { Component } from "react";
import ErrorHandler from "./errorhandler";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorHandler />;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
