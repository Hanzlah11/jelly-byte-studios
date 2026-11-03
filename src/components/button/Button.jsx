import React, { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import "./Button.css";

const Button = ({
  text,
  icon,
  href,
  to,
  color,
  size,
  fontWeight,
  weight,
  textColor,
  radius,
  border,
  padding,
  onClick,
  disabled,
  type,
  className
}) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic cursor tracking
  const handleMouseMove = useCallback((e) => {
    if (disabled || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Subtle, tight magnetic pull with strict boundary clamping
    const maxOffset = 6; // Max 6px displacement
    const pullStrength = 0.12;
    const textPullStrength = 0.04;

    const rawMoveX = distanceX * pullStrength;
    const rawMoveY = distanceY * pullStrength;

    const moveX = Math.max(-maxOffset, Math.min(maxOffset, rawMoveX));
    const moveY = Math.max(-maxOffset, Math.min(maxOffset, rawMoveY));
    const textMoveX = Math.max(-2, Math.min(2, distanceX * textPullStrength));
    const textMoveY = Math.max(-2, Math.min(2, distanceY * textPullStrength));

    buttonRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    if (textRef.current) {
      textRef.current.style.transform = `translate3d(${textMoveX}px, ${textMoveY}px, 0)`;
    }
  }, [disabled]);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
    if (buttonRef.current) {
      buttonRef.current.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease';
    }
    if (textRef.current) {
      textRef.current.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)';
    }
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (buttonRef.current) {
      // Satisfying spring release back to origin
      buttonRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 1.4, 0.45, 1), box-shadow 0.35s ease, border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease';
      buttonRef.current.style.transform = 'translate3d(0, 0, 0)';
    }
    if (textRef.current) {
      textRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 1.4, 0.45, 1)';
      textRef.current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, []);

  const resolvedFontWeight = fontWeight || weight;

  const buttonStyle = {
    "--button-color": color || textColor,
    borderRadius: radius,
    border: border,
    padding: padding,
    fontWeight: resolvedFontWeight,
    opacity: disabled ? 0.7 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };

  const textStyle = {
    fontSize: size,
    fontWeight: resolvedFontWeight,
    color: "inherit"
  };

  const buttonClass = `${color ? "filled" : "transparent"}${className ? ` ${className}` : ''}${isHovered ? ' magnetic-active' : ''}`;

  const renderContent = () => (
    <span ref={textRef} className="button-inner-content" style={textStyle}>
      {icon}{icon && '\u00A0\u00A0'}{text}
    </span>
  );

  const buttonElement = (
    <button
      ref={buttonRef}
      id="Button"
      className={buttonClass}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderContent()}
    </button>
  );

  // Internal route link
  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none', display: 'inline-block' }}>
        {buttonElement}
      </Link>
    );
  }

  // External or scroll link
  if (href) {
    const isScrollLink = href.startsWith('#');
    return (
      <a 
        href={href} 
        style={{ textDecoration: 'none', display: 'inline-block' }} 
        target={isScrollLink ? undefined : "_blank"} 
        rel={isScrollLink ? undefined : "noopener noreferrer"}
      >
        {buttonElement}
      </a>
    );
  }

  // No link (form submit, onClick, etc.)
  return buttonElement;
};

export default Button;
