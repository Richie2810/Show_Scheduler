import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import "./App.css";
import Performances from "./components/Performances";
import { Switch, Route } from "react-router-dom";

import { apiUrl } from "./config/constants";
import Login from "./pages/Login";
import Shows from "./pages/Shows";

function App() {
  const [name, set_name] = useState("");
  const [allPerf, setAllPerf] = useState([]);
  const [schedule, setschedule] = useState([]);
  const [login, setlogin] = useState(false);
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
    setlogin(true);
    const response = await axios.post(
      `${apiUrl}/newFan`,
      {
        name,
      },
      {}
    );
    setschedule(response.data);
    console.log("this is schedule", schedule);
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
    console.log(response);
    if (response.status === 200) {
    }
  };

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/shows" component={Shows} />
    </Switch>
    // <div className="App">
    //   <header className="App-header">
    //     {login ? (
    //       <div>
    //         <h1>Logged in as {name}</h1>
    //         <Button
    //           variant="primary"
    //           type="submit"
    //           onClick={() => {
    //             setlogin(false);
    //             set_name("");
    //           }}
    //         >
    //           Log out
    //         </Button>
    //       </div>
    //     ) : (
    //       <Container>
    //         <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
    //           <h1 className="mt-5 mb-5">Login</h1>
    //           <Form.Group controlId="formBasicName">
    //             <Form.Label>Name</Form.Label>
    //             <Form.Control
    //               value={name}
    //               onChange={(event) => set_name(event.target.value)}
    //               type="name"
    //               placeholder="Enter Name"
    //               required
    //             />
    //           </Form.Group>
    //           <Form.Group className="mt-5">
    //             <Button variant="primary" type="submit" onClick={submitName}>
    //               Log in
    //             </Button>
    //           </Form.Group>
    //         </Form>
    //       </Container>
    //     )}
    //     {allPerf
    //       ? allPerf.map((perf) => {
    //           return (
    //             <Performances
    //               key={perf._id}
    //               id={perf._id}
    //               title={perf.title}
    //               start_date={perf.start_date}
    //               end_date={perf.end_date}
    //               description={perf.description}
    //               status={perf.status}
    //               onSchduleClick={onSchduleClick}
    //             />
    //           );
    //         })
    //       : null}
    //   </header>
    // </div>
  );
}

export default App;
