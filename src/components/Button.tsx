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
      className={`${className} px-3 py-2 text-white bg-blue-600 shadow-lg hover:shadow-md hover:bg-blue-500 transition-all duration-500 rounded-xl `}
      {...rest}
    >
      {children}
    </button>
  );
};
