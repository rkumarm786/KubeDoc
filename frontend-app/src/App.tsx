import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

const API_URL =
  import.meta.env.VITE_INSIDE_DOCKER == "true"
    ? "http://host.docker.internal:3000"
    : "http://localhost:3000";

function App() {
  const [count, setCount] = useState(0);

  const getUsers = async () => {
    const res = await fetch(API_URL);
    return res.json();
  };

  const getUserRequest = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  useEffect(() => {
    getUserRequest.refetch();
  }, []);

  return (
    <>
      <div>
        <h1>Hi {getUserRequest.data?.[0]?.name}</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
