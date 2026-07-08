import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import AuthGate from './auth/AuthGate';
import DashboardApp from './dashboard/DashboardApp';

import Home from './pages/Home';
import Platform from './pages/Platform';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Distribution from './pages/Distribution';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="platform" element={<Platform />} />
          <Route path="services" element={<Services />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="login" element={<Login />} />

        <Route
          path="dashboard/*"
          element={
            <AuthGate>
              <DashboardApp />
            </AuthGate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
