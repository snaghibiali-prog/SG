export default function Card({ children, className = '' }) {
  return <div className={`bg-gp-card border border-gp-border p-8 ${className}`}>{children}</div>;
}
