export default function FormButton({ 
  children, 
  type = 'submit', 
  disabled = false, 
  className = '' 
}: {
  children: React.ReactNode;
  type?: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn-primary px-6 py-3 rounded-lg font-medium 
      transition-all 
      hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}