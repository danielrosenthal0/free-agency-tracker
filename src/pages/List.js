import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import { json } from "react-router-dom";

const List = () => {
  const [freeAgents, setFreeAgents] = useState([]);
  const API_URL = '/api/en/league/free_agents.json?api_key=dp432uckqhw2kd48hv9g677d';

  useEffect(() => {
    const fetchFreeAgents = async () => {
      try {
        const response = await fetch(
          API_URL
        );
        const jsonData = await response.json()
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
      {/* <Table data={freeAgents} /> */}
      <div>{freeAgents ? JSON.stringify(freeAgents) : 'Loading...'}</div>
    </>
  );
};

export default List;
