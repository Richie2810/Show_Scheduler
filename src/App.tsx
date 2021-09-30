import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import "./App.css";
import Performances from "./components/Performances";
// import { PerformancesProps } from "./components/Performances";
import { apiUrl } from "./config/constants";

function App() {
  const [name, set_name] = useState("");
  const [allPerf, setAllPerf] = useState([]);
  useEffect(() => {
    async function getPerformances() {
      const response = await axios.get(`${apiUrl}/allPerformances`);
      console.log(response.data);
      setAllPerf(response.data);
    }
    getPerformances();
  }, []);

  async function submitName() {
    console.log(name);

    const response = await axios.post(
      `${apiUrl}/newFan`,
      {
        name,
      },
      {}
    );
    console.log(response.data);
  }

  const onSchduleClick = async (id) => {
    console.log(id);
    const response = await axios.patch(
      `${apiUrl}/addToSchedule`,
      {
        name,
        performance: id,
      },
      {}
    );
    console.log(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form
            as={Col}
            md={{ span: 6, offset: 3 }}
            className="mt-5"
            style={{ backgroundColor: "#557A95" }}
          >
            <h1 className="mt-5 mb-5">Login</h1>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(event) => set_name(event.target.value)}
                type="name"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="primary" type="submit" onClick={submitName}>
                Log in
              </Button>
            </Form.Group>
          </Form>
        </Container>
        {allPerf
          ? allPerf.map((perf) => {
              return (
                <Performances
                  key={perf._id}
                  id={perf._id}
                  title={perf.title}
                  start_date={perf.start_date}
                  end_date={perf.end_date}
                  description={perf.description}
                  status={perf.status}
                  onSchduleClick={onSchduleClick}
                />
              );
            })
          : null}
      </header>
    </div>
  );
}

export default App;
