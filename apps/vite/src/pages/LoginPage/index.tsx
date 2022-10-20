import {useState} from "react";
import reactLogo from "./assets/react.svg";
import {Button} from "@fullpower-stack/ui";
import Login from "../../components/Login";
import TRPCButton from "../../components/TrpcButton";

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
        <h1 className="text-5xl">Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </section>

      <section className="py-4">
        <h2 className="text-2xl underline">tRPC</h2>
        <TRPCButton />
      </section>

      <section className="py-4">
        <h2 className="text-2xl underline">Tailwind</h2>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <Button />
        <h1 className="bg-red-500 text-3xl font-bold">
          This is styled with tailwind
        </h1>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <Login />
      </section>
    </div>
  );
}

export default App;
