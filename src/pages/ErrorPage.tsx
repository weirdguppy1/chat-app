import React from "react";

type Props = {
  message: string;
};

const Error = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-blue-300 ">
      <h1 className="text-6xl">Oops!</h1>
      {props.message}
    </div>
  );
};

export default Error;
