import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { RoleProvider, useRole } from './state/RoleContext';
import { seedIfEmpty } from './lib/api/seed';

import CompaniesPage from './pages/admin/CompaniesPage';
import GeneratorsPage from './pages/admin/GeneratorsPage';
import OnboardGeneratorPage from './pages/admin/OnboardGeneratorPage';
import TemplatesPage from './pages/admin/TemplatesPage';
import IntervalRulesPage from './pages/admin/IntervalRulesPage';
import PartsCatalogPage from './pages/admin/PartsCatalogPage';

import DashboardPage from './pages/company/DashboardPage';
import GeneratorDetailPage from './pages/company/GeneratorDetailPage';

function RoleRoot() {
  const { role } = useRole();
  return <Navigate to={role === 'admin' ? '/admin/companies' : '/app/dashboard'} replace />;
}

export default function App() {
  useEffect(() => {
    seedIfEmpty();
  }, []);

  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<RoleRoot />} />

            <Route path="admin/companies" element={<CompaniesPage />} />
            <Route path="admin/generators" element={<GeneratorsPage />} />
            <Route path="admin/generators/onboard" element={<OnboardGeneratorPage />} />
            <Route path="admin/templates" element={<TemplatesPage />} />
            <Route path="admin/interval-rules" element={<IntervalRulesPage />} />
            <Route path="admin/parts-catalog" element={<PartsCatalogPage />} />

            <Route path="app/dashboard" element={<DashboardPage />} />
            <Route path="app/generators/:id" element={<GeneratorDetailPage />} />

            <Route path="*" element={<RoleRoot />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}
