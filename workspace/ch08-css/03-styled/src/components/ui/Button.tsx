import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
  variant?: "base" | "cancel" | "confirm";
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) => props.bg || "gray"};
  border: none;
  color: ${(props) => props.color || "black"};
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

const BaseButtonStyle = styled(BasicButtonStyle)`
  background-color: #1e3a8a; /* 인디고 블루 */
  color: #f87171; /* 연한 레드 */
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(30, 58, 138, 0.3);
  transition: all 0.3s ease;
  &:hover {
    background-color: #3b82f6;
    transform: translateY(-2px);
  }
`;

const CancelButtonStyle = styled(BasicButtonStyle)`
  background-color: #fde047; /* 밝은 노랑 */
  color: #dc2626; /* 강한 레드 */
  font-weight: bold;
  padding: 10px 24px;
  border-radius: 8px;
  box-shadow: inset 0 -2px 0 #facc15;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fef08a;
    transform: scale(1.03);
  }
`;

const ConfirmButtonStyle = styled(BasicButtonStyle)`
  background: linear-gradient(to bottom, #f3f4f6, #d1d5db);
  color: #1d4ed8;
  font-weight: 500;
  padding: 10px 24px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #cbd5e1;
  transition: all 0.25s ease;
  &:hover {
    background: linear-gradient(to bottom, #e5e7eb, #cbd5e1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

function Button({ children, variant = "base", ...rest }: ButtonProps) {
  switch (variant) {
    case "cancel":
      return (
        <CancelButtonStyle {...rest}>
          <>{children}</>
        </CancelButtonStyle>
      );
    case "confirm":
      return (
        <ConfirmButtonStyle {...rest}>
          <>{children}</>
        </ConfirmButtonStyle>
      );
    case "base":
    default:
      return (
        <BaseButtonStyle {...rest}>
          <>{children}</>
        </BaseButtonStyle>
      );
  }
}

export default Button;
