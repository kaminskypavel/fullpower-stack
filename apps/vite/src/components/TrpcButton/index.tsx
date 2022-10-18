import React from "react";
import { trpc } from "../../services/trpc";

function TRPCButton() {
  const { data } = trpc.getUsers.useQuery();
  const { title, timestamp } = data ?? {};

  const utils = trpc.useContext();
  if (!title || !timestamp) return <div>Loading....</div>;

  return (
    <section>
      <div>
        <h1 className="bg-blue-400 text-xl text-white">{title}</h1>
        <h2 className="bg-blue-400 text-xl text-white">
          {timestamp.toString()}
        </h2>

        <button
          className="m-5 border-4"
          onClick={() => {
            utils.invalidate();
          }}
        >
          reload from server
        </button>
      </div>
    </section>
  );
}

export default TRPCButton;
