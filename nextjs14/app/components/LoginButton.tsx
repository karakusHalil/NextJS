interface LoginButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const LoginButton = ({
  children,
  fullWidth,
  onClick,
  type,
}: LoginButtonProps) => {
  return (
    <>
      <button
        className={`p-3 bg-cyan-800 hover:bg-cyan-950 shadow-lg  transition-all text-white rounded cursor-pointer transform duration-300 hover:scale-105 ${
          fullWidth && "w-full"
        }`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default LoginButton;
