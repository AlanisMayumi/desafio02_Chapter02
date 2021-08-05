import { useEffect, useRef, useState, useCallback } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";
import { IconType } from "react-icons/lib";

interface InputProps {
  name: string;
  icon?: IconType;
  placeholder: string;
  value: string | number;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, icon: Icon, value, handleInputChange, placeholder, ...rest }: InputProps) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={(e) => handleInputChange(e)}
        defaultValue={defaultValue}
        ref={inputRef}
        // value={value}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
