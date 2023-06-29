import { useEffect, useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const List = () => {
  const playersPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);
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

  const freeAgentsArray = Object.values(freeAgents);
  const players = Array.isArray(freeAgentsArray[1]) ? freeAgentsArray[1] : [];

  
  const totalPlayers = players.length;
  const totalPages = Math.ceil(totalPlayers / playersPerPage);
  const lastPlayer = currentPage * playersPerPage;
  const firstPlayer = lastPlayer - playersPerPage;


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1>List view page</h1>
      <Table freeAgents={freeAgents} first={firstPlayer} last={lastPlayer} />
      {freeAgents ? <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      /> : 'Loading...'}
      
    </>
  );
};

export default List;
