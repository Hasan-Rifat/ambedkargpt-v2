import React from "react";

const Input = ({
  name,
  type,
  placeholder,
  required = false,
  className,
  value,
  onChange,
  onKeyDown,
}: {
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className={`${className} py-6 px-5 text-black opacity-50 font-semibold text-base border border-black border-opacity-50 rounded-2xl bg-white`}
      placeholder={placeholder}
      required={required}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
