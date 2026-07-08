export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-widest text-gp-accent mb-4 ${className}`}>
      {children}
    </p>
  );
}
