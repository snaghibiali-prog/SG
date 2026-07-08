import { Link } from 'react-router-dom';

const BASE = 'inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors';

const VARIANTS = {
  primary: `${BASE} bg-gp-accent text-black hover:bg-amber-500`,
  secondary: `${BASE} border border-gp-border text-gp-text hover:border-gp-accent hover:text-gp-accent`,
};

export default function Button({ as, to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
