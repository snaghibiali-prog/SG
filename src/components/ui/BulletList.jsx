export default function BulletList({ items, className = '' }) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-gp-text">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gp-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
