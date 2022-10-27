import React, {useState} from "react";
import TRPCButton from "../../components/TrpcButton";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col">
      <div className="flex flex-row justify-center align-middle">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <section className="flex flex-col space-y-2 py-4">
        <h1 className="text-5xl">Vite + React + tRPC Server </h1>
      </section>
      <section className="py-4">
        <TRPCButton />
      </section>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

    </div>
  );
}

export default App;
