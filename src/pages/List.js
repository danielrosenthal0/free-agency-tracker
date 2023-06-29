import { useEffect, useState } from "react";
import Table from "../components/Table";

const List = () => {
  const [freeAgents, setFreeAgents] = useState([]);
  const API_URL =
    "/api/en/league/free_agents.json?api_key=dp432uckqhw2kd48hv9g677d";

  useEffect(() => {
    const fetchFreeAgents = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();

        setFreeAgents(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFreeAgents();
  }, []);

  return (
    <>
      <h1>List view page</h1>
      <Table freeAgents={freeAgents} />
    </>
  );
};

export default List;
