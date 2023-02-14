interface ButtonProps {
  icon: string;
  type: string;
  actionOnClick: () => void;
}

const Button = ({ icon, type, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`{task__action task__action--${type}`}
      onClick={actionOnClick}
    >
      {icon}
    </button>
  );
};

export default Button;
