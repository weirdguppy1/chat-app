import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  ArrowDown,
  HappyIcon,
  FilterIcon,
  CollectionIcon,
} from "../components/Icons";
import { Button } from "../components/Button";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  direction: "left" | "right";
};

const FeatureSection = (props: SectionProps) => {
  return (
    <div className="flex items-center p-4 space-x-6">
      <div className="flex items-center max-w-lg space-x-4 sm:space-x-0 sm:flex-col sm:items-start sm:space-y-2">
        <div className="p-2 text-lg text-white bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl">
          {props.icon}
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl underline ">{props.title}</h1>
          <p className="text-md sm:text-lg md:text-xl">{props.children}</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const { signIn } = useContext(AuthContext);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <div id="intro" className="bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="flex flex-col items-center justify-center h-screen font-sans text-white">
          <div className="flex flex-col items-center p-10 shadow-blue-500">
            <h1 className="text-5xl italic">Chateduu!</h1>
            <p className="text-md md:text-lg">
              Chat rooms for students, free forever.
            </p>
            <button
              onClick={() => {
                console.log("Hello");
                signIn();
              }}
              className="px-3 py-2 mt-5 text-black transition duration-500 bg-white shadow-2xl hover:shadow-md rounded-xl"
            >
              Sign up/in with <span className="text-red-600">Google.</span>
            </button>
            <button onClick={() => scrollTo("features")}>
              <ArrowDown className="w-6 h-6 mt-5" />
            </button>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=""
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,224C672,224,768,256,864,266.7C960,277,1056,267,1152,229.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="features" className="flex flex-col p-10 space-y-8 bg-white">
        <h1 className="text-4xl md:text-6xl">
          Crazy{" "}
          <span className="p-2 font-bold bg-yellow-300 rounded-xl ">
            Features
          </span>
        </h1>
        <div className="flex flex-col space-y-8">
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
            You have to keep it family-friendly! The chat filter protects
            students from seeing unwanted and unwelcomed profanity.
          </FeatureSection>
          <FeatureSection
            direction="right"
            title="Own Your Data"
            icon={<CollectionIcon className="w-12 h-12 " />}
          >
            We don't see or exploit your messages you send on the platform.
            We're keeping students safe because we're not terrible people.
          </FeatureSection>
        </div>
      </div>
      <div
        id="features"
        className="flex flex-col items-center p-10 space-y-8 bg-white"
      >
        <h1 className="text-3xl md:text-6xl">
          Made for{" "}
          <span className="p-2 font-bold bg-yellow-300 rounded-xl ">
            Students.
          </span>
        </h1>
        <h1 className="text-3xl md:text-6xl">
          <span className="p-2 font-bold bg-yellow-300 rounded-xl ">
            Connecting
          </span>{" "}
          Students
        </h1>
        <h1 className="text-4xl underline md:text-6xl decoration-yellow-300">
          Together.
        </h1>
        <Button
          onClick={() => scrollTo("intro")}
          className="text-xl text-white bg-gradient-to-r from-blue-500 to-cyan-600"
        >
          Sign me up!
        </Button>
      </div>
      <div className="flex flex-col p-5 text-white bg-black">
        <h1 className="text-lg">
          Made by{" "}
          <a
            className="underline underline-offset-4 decoration-wavy decoration-sky-400"
            target="_blank"
            href="https://weirdguppy1.github.io"
          >
            Mark Fang
          </a>
          .
        </h1>
        <h1 className="text-lg">Show ❤️ love to my other projects.</h1>
      </div>
    </div>
  );
};

export default Home;
