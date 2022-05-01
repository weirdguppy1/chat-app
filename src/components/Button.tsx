import React from "react";

// export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}
export interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

export const Button: React.FC<any> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`px-3 py-2 border-2 text-black bg-white border-black shadow-lg hover:shadow-md hover:shadow-white transition-all duration-500 rounded-xl ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
