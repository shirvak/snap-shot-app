const Button = ({ isEnabled, onClick, children }) => {
  return (
    <button disabled={!isEnabled} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
