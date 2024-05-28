import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Loading from '@/components/loading';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </Suspense>
    </StrictMode>,
);
