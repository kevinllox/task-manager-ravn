import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MainContent from './pages/MainContent/MainContent';
import Profile from './pages/Profile/Profile';
import { ROUTES } from './const/consts';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path={ROUTES.home} element={<MainContent />} />
        <Route path={ROUTES.settings} element={<Profile />} />
      </Route>
      <Route path={ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
