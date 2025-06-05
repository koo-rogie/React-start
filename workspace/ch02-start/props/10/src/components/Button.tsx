interface ButtonProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
  color?: string;
  size?: string;
}

function Button({ children, onClick: handleClick, color, size }: ButtonProps) {
  return (
    <button type="button" onClick={handleClick} style={{ backgroundColor: color, fontSize: size }} className="rounded-button">
      {children}
    </button>
  );
}
export default Button;
