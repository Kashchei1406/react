import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/className';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <main className="content-wrapper">
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
