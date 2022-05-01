import React, { useContext } from "react";
import { Button } from "../components/Button";
import { AuthContext, AuthProvider } from "../contexts/AuthContext";

type Props = {};

const Home = (props: Props) => {
  const { signIn } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans bg-blue-300">
      <div className="flex flex-col items-center p-10 text-white bg-blue-500 shadow-2xl rounded-xl shadow-blue-500">
        <h1 className="text-5xl italic">Chateduu!</h1>
        <p className="text-xl ">Chat rooms for students, free forever.</p>
        <Button
          className="mt-5"
          onClick={() => {
            console.log("Hello");
            signIn();
          }}
        >
          Sign up/in with <span className="text-red-600">Google.</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;
