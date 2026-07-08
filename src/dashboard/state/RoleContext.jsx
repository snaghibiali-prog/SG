import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { listCompanies } from '../lib/api';

const RoleContext = createContext(null);

export function RoleProvider({ children }) {
  const [role, setRole] = useState('admin'); // 'admin' | 'company'
  const [companyId, setCompanyId] = useState('');
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const list = listCompanies();
    setCompanies(list);
    if (!companyId && list.length > 0) setCompanyId(list[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({ role, setRole, companyId, setCompanyId, companies, refreshCompanies: () => setCompanies(listCompanies()) }),
    [role, companyId, companies]
  );

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;
}
