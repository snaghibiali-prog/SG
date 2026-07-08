import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { login } from '../auth/authClient';
import Button from '../components/ui/Button';

const inputClass =
  'w-full bg-gp-card border border-gp-border text-gp-text px-4 py-3 focus:border-gp-accent outline-none';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from ?? '/dashboard';

  function handleSubmit(e) {
    e.preventDefault();
    if (login(username, password)) {
      navigate(from, { replace: true });
    } else {
      setError('Incorrect username or password.');
    }
  }

  return (
    <section className="min-h-screen bg-gp-black flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md border border-gp-border bg-gp-card p-8">
        <Link to="/" className="block mb-8">
          <img src="/logo.svg" alt="Genprima" className="h-6" />
        </Link>
        <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-2">Platform Login</p>
        <h1 className="text-2xl font-bold mb-8">Sign in to your dashboard</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-gp-muted text-sm uppercase tracking-wider mb-2">Username</label>
            <input
              className={inputClass}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-gp-muted text-sm uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              className={inputClass}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" variant="primary" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </section>
  );
}
