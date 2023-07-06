import { useEffect, useRef, useState } from "react";
import teamLogoMap from "../components/TeamLogoMap";
import classes from "./News.module.css";
import useTimeFormatter from "../hooks/useTimeFormatter";
import DateDropdown from "../components/DateDropdown";
import TeamCircle from "../components/TeamCircle";
import Slider from "../components/Slider";
// import DateDropdown from "../components/DateDropdown";

const News = () => {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [headshots, setHeadshots] = useState({});
  // const teamCircleRef = useRef(null);

  

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/transactions?date=${selectedDate}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const jsonData = await response.json();
        console.log(jsonData.players);

        setNews(jsonData.players);

        

        setLoaded(true);
        fetchHeadshots(jsonData.players.map((player) => player.reference));
      } catch (error) {
        console.log(error);
        setError("Failed to retrieve transactions");
      }
    };
    if (selectedDate) {
      fetchNews();
    }
  }, [selectedDate]);

  const fetchHeadshots = async (playerReferences) => {
    try {
      const headshotsMap = {};

      const headshotRequests = playerReferences.map(async (reference) => {
        const playerId = reference.split(":").pop();
        const headshotUrl = `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
        headshotsMap[reference] = headshotUrl;
      });

      await Promise.all(headshotRequests);
      setHeadshots(headshotsMap);
    } catch (error) {
      console.error("Error occurred while fetching headshots.", error);
    }
  };


  return (
    <div>
      <h1>Recent free agency news</h1>
      <TeamCircle  />
      <Slider />
      <DateDropdown onSelectDate={setSelectedDate} />
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {loaded ? (
            news.map((player) => (
              <div key={player.id}>
                {player.transfers && player.transfers.length > 0 ? (
                  player.transfers.map((transfer) => (
                    <div key={transfer.id}>
                      <p>{transfer.desc}</p>
                      {headshots[player.reference] && (
                        <img
                          src={headshots[player.reference]}
                          alt={player.full_name}
                        />
                      )}
                      {transfer.from_team && (
                        <img
                          src={teamLogoMap[transfer.from_team.reference]}
                          alt={transfer.from_team.name}
                        />
                      )}
                      →
                      {transfer.to_team && (
                        <>
                          <img
                            src={teamLogoMap[transfer.to_team.reference]}
                            alt={transfer.to_team.name}
                          />
                         
                        </>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No transfers for this player.</p>
                )}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default News;
