import './TextInput.css';

interface TextInputProps {
  classNames?: string;
  placeholder?: string;
}

function TextInput({ classNames, placeholder }: TextInputProps) {
  return (
    <input
      type={'text'}
      placeholder={placeholder || ''}
      className={`text-input ${classNames || ''}`}
    />
  );
}

export default TextInput;
