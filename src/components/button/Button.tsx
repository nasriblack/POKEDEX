import React from "react";

type Props = {
  type: "submit" | "reset" | "button" | undefined;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Button = (props: Props) => {
  return (
    <>
      <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
