import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(errorInfo: ErrorInfo) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorInfo };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // use your log service
        console.log(error, errorInfo.componentStack);
    }

    render() {
        const { hasError, errorCode } = this.state;
        const { Fallback, children } = this.props;

        return hasError ? <Fallback errorCode={errorCode} /> : children;
    }
}

export default ErrorBoundary;
