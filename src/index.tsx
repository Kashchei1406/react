import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErroeBoundary';
import { Suspense } from 'react';

render(
    <BrowserRouter>
        <Suspense fallback="">
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root'),
);
