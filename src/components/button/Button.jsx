import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css";

const Button = ({
  text,
  icon,
  href,
  to,
  color,
  size,
  textColor,
  radius,
  border,
  padding,
  onClick,
  disabled,
  type
}) => {

  const buttonStyle = {
    "--button-color": color || textColor,
    borderRadius: radius,
    border: border,
    padding: padding,
    opacity: disabled ? 0.7 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };

  const textStyle = {
    fontSize: size,
    color: "inherit"
  };

  // Internal route link
  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <button
          id="Button"
          className={color ? "filled" : "transparent"}
          style={buttonStyle}
          disabled={disabled}
          type={type}
        >
          {icon}{icon && '\u00A0\u00A0'}<span style={textStyle}>{text}</span>
        </button>
      </Link>
    )
  }

  // External or scroll link
  if (href) {
    const isScrollLink = href.startsWith('#');
    return (
      <a 
        href={href} 
        style={{ textDecoration: 'none' }} 
        target={isScrollLink ? undefined : "_blank"} 
        rel={isScrollLink ? undefined : "noopener noreferrer"}
      >
        <button
          id="Button"
          className={color ? "filled" : "transparent"}
          style={buttonStyle}
          disabled={disabled}
          type={type}
        >
          {icon}{icon && '\u00A0\u00A0'}<span style={textStyle}>{text}</span>
        </button>
      </a>
    )
  }

  // No link (form submit, onClick, etc.)
  return (
    <button
      id="Button"
      className={color ? "filled" : "transparent"}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon}{icon && '\u00A0\u00A0'}<span style={textStyle}>{text}</span>
    </button>
  )
}

export default Button