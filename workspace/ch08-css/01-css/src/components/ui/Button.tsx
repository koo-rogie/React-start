import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps) {
  return (
    <button className={` button bg-${bg}-text-${color}`} {...rest}>
      {children}
    </button>
  ); // ...rest 기존 버튼의 속성들을 전개 연산자로 받아옴
}

export default Button;
