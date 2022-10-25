import React, {useState} from "react";
import {trpc} from "../../services/trpc";

function TRPCButton() {
  const [text, setText] = useState("Hello World")
  const {data} = trpc.cat.useQuery();
  const {file, image, timestamp} = data ?? {};
  const utils = trpc.useContext();

  if (!image || !timestamp) return <div>Loading....</div>;

  return (
    <section className="flex flex-col justify-center items-center">

      <button
        className="m-5 border-4"
        onClick={() => {
          utils.invalidate();
        }}
      >
        Get new cat!
      </button>

      <input value={text} onChange={(e) => setText(e.target.value)} className="p-2 mb-8" />
      <img src={image} alt={image} />

      <h1 className="bg-green-500 text-lg text-white">{file}</h1>
      <h2 className="bg-blue-400 text-small text-white">
        {timestamp.toString()}
      </h2>

    </section>
  );
}

export default TRPCButton;
