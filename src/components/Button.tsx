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
      className={`${className} px-3 py-2 text-black bg-white shadow-xl hover:shadow-md hover:bg-white transition-all duration-500 rounded-xl `}
      {...rest}
    >
      {children}
    </button>
  );
};
