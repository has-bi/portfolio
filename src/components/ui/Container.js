// src/components/ui/Container.js
export function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-4 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
