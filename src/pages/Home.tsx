import React, { useContext } from "react";
import { Button } from "../components/Button";
import { AuthContext, AuthProvider } from "../contexts/AuthContext";
import { ArrowDown, HappyIcon, FilterIcon } from "../components/Icons";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  direction: "left" | "right";
};

const FeatureSection = (props: SectionProps) => {
  return (
    <div className="flex items-center w-full p-4 space-x-6">
      {props.direction === "left" ? (
        <>
          <div className="flex flex-col items-start w-1/2 space-y-2">
            <div className="p-2 text-lg text-white bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl">
              <div className="w-1/2">{props.icon}</div>
            </div>
            <h1 className="text-3xl underline ">{props.title}</h1>
            <p className="text-xl">{props.children}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-start w-1/2 space-y-2">
            <div className="p-2 text-lg text-white bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl">
              <div className="w-1/2">{props.icon}</div>
            </div>
            <h1 className="text-3xl underline ">{props.title}</h1>
            <p className="text-xl">{props.children}</p>
          </div>
        </>
      )}
    </div>
  );
};

const Home = () => {
  const { signIn } = useContext(AuthContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center h-screen font-sans bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="text-white">
          <div className="flex flex-col items-center p-10 shadow-blue-500">
            <h1 className="text-5xl italic">Chateduu!</h1>
            <p className="text-xl ">Chat rooms for students, free forever.</p>
            <button
              onClick={() => {
                console.log("Hello");
                signIn();
              }}
              className="px-3 py-2 mt-5 text-black transition duration-500 bg-white shadow-2xl hover:shadow-md rounded-xl"
            >
              Sign up/in with <span className="text-red-600">Google.</span>
            </button>
            <ArrowDown className="w-6 h-6 mt-5" />
          </div>
        </div>
      </div>
      <div id="features" className="flex flex-col p-10 space-y-8 bg-white">
        <h1 className="text-6xl">
          Crazy{" "}
          <span className="p-2 font-bold bg-yellow-300 rounded-xl ">
            Features
          </span>
        </h1>
        <div className="flex flex-col items-center space-y-8">
          <FeatureSection
            title="Simple."
            icon={<HappyIcon className="w-12 h-12" />}
            direction="left"
          >
            Easy to use interface. Set up a chat room in seconds and get people
            to join using a five character code. Get the hassle out of instant
            communication and chat rooms.
          </FeatureSection>
          <FeatureSection
            direction="right"
            title="Language Filter."
            icon={<FilterIcon className="w-12 h-12 " />}
          >
            You have to keep it family-friendly! The chat filter protects students
            from seeing unwanted and unwelcomed profanity.
          </FeatureSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
