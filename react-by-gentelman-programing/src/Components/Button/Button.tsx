import "./Button.css"

interface ButtonProps {
  label: string;
  parentMethod: () => void;
}

export const Button = ({label, parentMethod} : ButtonProps) => {
  return (
    <button 
      className="custom-button"
      onClick={parentMethod}>
      
      {label}

    </button>
  );
}