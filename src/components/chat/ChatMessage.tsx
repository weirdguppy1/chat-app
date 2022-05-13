import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Timestamp } from "firebase/firestore";

type Props = {
  message: string;
  author: any;
  timeStamp: Timestamp;
};

const ChatMessage = (props: Props) => {
  const { message, author, timeStamp } = props;
  // const [author, setAuthor] = useState();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getDocWrapper();
  // }, []);

  // const getAuthorWrapper = async () => {
  //   setLoading(true);
  //   const doc = await getDoc(author);
  //   const data: any = doc.data();
  //   console.log(data.name);
  //   setAuthor(data);
  //   setLoading(false);
  // };

  return (
    <div className="flex items-start space-x-6">
      <div className="flex flex-col items-center space-y-2">
        <Tippy content={`${author.displayName}`}>
          <img
            className="w-12 h-12 border-2 border-gray-200 rounded-xl"
            src={author.photoURL}
          />
        </Tippy>
        <div className="text-xs text-gray-300">
          {timeStamp.toDate().toLocaleTimeString()}
        </div>
      </div>
      <div className="max-w-sm px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-xl word-break">
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
