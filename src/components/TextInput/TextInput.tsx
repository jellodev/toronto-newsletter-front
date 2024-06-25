import './TextInput.css';
import { ChangeEvent } from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  classNames?: string;
  placeholder?: string;
}

function TextInput({
  value,
  onChange,
  classNames,
  placeholder,
}: TextInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type={'text'}
      placeholder={placeholder || ''}
      className={`text-input ${classNames || ''}`}
      value={value}
      onChange={handleChange}
    />
  );
}

export default TextInput;
