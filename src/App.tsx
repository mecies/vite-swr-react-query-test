import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactQueryUser from "./components/ReactQueryUser";
import SwrUser from "./components/SwrUser";

const queryClient = new QueryClient();

function App() {
  const [apiClient, setApiClient] = useState<"SWR" | "REACT_QUERY">(
    "REACT_QUERY"
  );

  return (
    <div>
      <button
        onClick={() =>
          setApiClient((prev) => (prev === "SWR" ? "REACT_QUERY" : "SWR"))
        }
      >
        change api client
      </button>
      <br />
      {apiClient === "SWR" && <SwrUser />}
      {apiClient === "REACT_QUERY" && (
        <QueryClientProvider client={queryClient}>
          <ReactQueryUser />
        </QueryClientProvider>
      )}
    </div>
  );
}

export default App;
