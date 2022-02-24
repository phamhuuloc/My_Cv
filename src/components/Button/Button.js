import React from "react";
import "./Button.css";
const STYELS = ["btn--outline", "btn--primary"];

const SIZES = ["btn--small", "btn--medium", "btn--large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyles,
  buttonSizes,
}) => {
  const checkButtonStyles = STYELS.includes(buttonStyles)
    ? buttonStyles
    : STYELS[0];
  const checkButtonSizes = SIZES.includes(buttonSizes) ? buttonSizes : SIZES[0];
  return (
    <button
      type={type}
      onClick={onclick}
      className={`btn ${checkButtonSizes} ${checkButtonStyles}`}
    >
      {children}
    </button>
  );
};
