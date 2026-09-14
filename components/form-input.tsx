import { useController } from 'react-hook-form';

interface FormInputProps {
  name: string;
  control: any;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export default function FormInput({ 
  name, 
  control, 
  label, 
  type = 'text', 
  placeholder = '', 
  required = false 
}: FormInputProps) {
  const { field, fieldState: { error } } = useController({
    name,
    control,
    rules: {
      required: required ? 'This field is required' : undefined,
      validate: {
        email: (value: string) => 
          !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email address',
      }
    }
  });

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-muted-foreground">
        {label}{required ? ' *' : ''}
      </label>
      <div>
        <input
          {...field}
          id={name}
          type={type}
          placeholder={placeholder}
          className={`bg-input px-4 py-3 rounded-lg border border-input text-sm 
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
          transition-all duration-200 ${error ? 'border-destructive' : ''}`}
        />
        {error && (
          <p className="text-destructive text-sm mt-1">{error.message}</p>
        )}
      </div>
    </div>
  );
}