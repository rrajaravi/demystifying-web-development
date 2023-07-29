import "./App.css";
import { useEffect, useState } from "react";
import Elevation from "./PaperUi";
import { Stack } from "@mui/material";

function App() {
  const [topics, setTopics] = useState([]);
  const [backend, setBackend] = useState([]);
  const [frontend, setFrontend] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:3000/topics/backend")
      .then((response) => response.json())
      .then((data) => setBackend(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:3000/topics/frontend")
      .then((response) => response.json())
      .then((data) => setFrontend(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Web developer career path</h1>
      {/* <ul>
        {topics.map((t) => {
          return <li>{t}</li>;
        })}
      </ul> */}
      <Stack direction={"row"}>
        <Elevation header="All Topics" topics={topics} />
        <Elevation header="Front End" topics={frontend} />
        <Elevation header="Back End" topics={backend} />
      </Stack>
    </>
  );
}

export default App;
