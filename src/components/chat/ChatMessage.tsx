import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

type Props = {
  message: string;
  author: any;
};

const ChatMessage = (props: Props) => {
  const { message, author } = props;
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
    <div className="flex items-center space-x-6">
      <div className="flex flex-col items-center space-y-1">
        <Tippy content={`${author.displayName}`}>
          <img className="border-2 border-black w-12 h-12 rounded-xl" src={author.photoURL} />
        </Tippy>
      </div>
      <div className="px-4 py-2 text-xl text-black bg-white border-2 border-black rounded-xl ">
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
