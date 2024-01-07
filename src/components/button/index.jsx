export const Button = ({ children: text, icon, className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      {icon && <img src={icon} alt="Icon" className="w-6 h-6" />}
      {text}
    </button>
  );
};
