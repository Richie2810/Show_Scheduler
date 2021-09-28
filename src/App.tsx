import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Performances from "./components/Performances";
// import { PerformancesProps } from "./components/Performances";
import { apiUrl } from "./config/constants";

function App() {
  const [allPerf, setAllPerf] = useState([]);
  useEffect(() => {
    async function getPerformances() {
      const response = await axios.get(`${apiUrl}/allPerformances`);
      setAllPerf(response.data);
    }
    getPerformances();
  }, []);

  // async function getPerformances() {
  //   const response = await axios.get(`${apiUrl}/allPerformances`);
  //   return response.data;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Login />
        {allPerf
          ? allPerf.map((perf, key) => {
              return (
                <Performances
                  key={key}
                  title={perf.title}
                  start_date={perf.start_date}
                  end_date={perf.end_date}
                  description={perf.description}
                  status={perf.status}
                />
              );
            })
          : null}
      </header>
    </div>
  );
}

export default App;
