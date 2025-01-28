import React from "react";
import "./button.css";

type Props = {
  type: "submit" | "reset" | "button" | undefined;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  isDisabled?: boolean;
};

const Button = ({
  type,
  className,
  onClick,
  style,
  isDisabled,
  children,
}: Props) => {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}
        style={style}
        disabled={isDisabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
