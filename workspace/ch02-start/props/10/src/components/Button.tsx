interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent) => void;
  color?: string;
  size?: string;
}

function Button({ children, onClick: handleClick, color, size, type = "button" }: ButtonProps) {
  return (
    <button type={type} onClick={handleClick} style={{ backgroundColor: color, fontSize: size }} className="rounded-button">
      {children}
    </button>
  );
}
export default Button;
