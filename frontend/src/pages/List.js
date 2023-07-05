import { useEffect, useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const List = () => {
  const playersPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);
  const [freeAgents, setFreeAgents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFreeAgents = async () => {
      try {
        const response = await fetch("http://localhost:3001/free-agents");
        if (!response.ok) {
          throw new Error('Failed to fetch free agents');
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setFreeAgents(jsonData);
        console.log(freeAgents); 
     
      } catch (error) {
        console.log(error);
        setError('Failed to retrieve free agents');
      }
    };
    fetchFreeAgents();
  }, []);

  //filtering and sorting data before sending to components
  const freeAgentsArray = Object.values(freeAgents);
  const players = Array.isArray(freeAgentsArray[1]) ? freeAgentsArray[1] : [];

  const sortedPlayers = [...players].sort((a, b) => {
    const dateA = new Date(a.updated);
    const dateB = new Date(b.updated);
    return dateB - dateA;
  }).filter((player) => {
    const year = new Date(player.updated).getFullYear();
    return year === 2022 || year === 2023
  });

  const totalPlayers = sortedPlayers.length;
  const totalPages = Math.ceil(totalPlayers / playersPerPage);
  const lastPlayer = currentPage * playersPerPage;
  const firstPlayer = lastPlayer - playersPerPage;


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    {error ? <p>Error: {error} </p> :
    <>
    <h1>Available Free Agents</h1>
      <Table freeAgents={freeAgents} first={firstPlayer} last={lastPlayer} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
    }
      
      
    </>
  );
};

export default List;
