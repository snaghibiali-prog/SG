import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import { RoleProvider, useRole } from './state/RoleContext';

import CompaniesPage from './admin/CompaniesPage';
import GeneratorsPage from './admin/GeneratorsPage';
import OnboardGeneratorPage from './admin/OnboardGeneratorPage';
import TemplatesPage from './admin/TemplatesPage';
import IntervalRulesPage from './admin/IntervalRulesPage';
import PartsCatalogPage from './admin/PartsCatalogPage';

import DashboardPage from './company/DashboardPage';
import GeneratorDetailPage from './company/GeneratorDetailPage';

function RoleRoot() {
  const { role } = useRole();
  return <Navigate to={role === 'admin' ? 'admin/companies' : 'app/dashboard'} replace />;
}

// Mounted under /dashboard/* once a user is authenticated — see src/auth/AuthGate.jsx.
// Seed data is populated synchronously in main.jsx, before this ever renders.
export default function DashboardApp() {
  return (
    <RoleProvider>
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
    </RoleProvider>
  );
}
