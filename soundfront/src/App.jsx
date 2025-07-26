import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import injectContext from "./store/appContext";
import Home from './pages/home';
import Examples from './pages/examples';
import Thanks from './pages/thankyou';
import { initGA, logPageView } from "./googleAnalytics";

// 🧠 Este componente registra los cambios de ruta
const AnalyticsHandler = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(); // cada vez que cambia la ruta
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initGA(); // solo una vez al inicio
  }, []);

  const basename = import.meta.env.BASENAME || "";

  return (
    <div className='cont'>
      <HashRouter basename={basename}>
        {/* AnalyticsHandler escucha los cambios */}
        <AnalyticsHandler />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Examples />} path="/examples" />
          <Route element={<Thanks />} path="/thanks" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default injectContext(App);
