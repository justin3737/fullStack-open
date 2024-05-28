import { ErrorInfo, FC } from 'react';

export interface ErrorBoundaryProps {
    Fallback: FC<{ errorCode?: string }>;
    children?: React.ReactNode;
    scope?: string;
}

export interface ErrorBoundaryState {
    hasError: boolean;
    errorInfo?: ErrorInfo;
    prevPath?: string;
    lastError?: Error;
    errorCode?: string;
}
