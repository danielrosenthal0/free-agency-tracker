import { useEffect, useState } from "react";
import teamLogoMap from "../components/TeamLogoMap";
import classes from './News.module.css'
import useTimeFormatter from "../hooks/useTimeFormatter";

const News = () => {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3001/transactions");
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const jsonData = await response.json();
        console.log(jsonData.players);

        setNews(jsonData.players);
        setLoaded(true);
      } catch (error) {
        console.log(error);
        setError("Failed to retrieve transactions");
      }
    };
    fetchNews();
  }, []);
  // const formattedTimes = news.map((player) => {
  //   if (player.transfers && player.transfers.length > 0) {
  //     return player.transfers.map((transfer) =>
  //       useTimeFormatter(new Date(transfer.last_modified))
  //     );
  //   }
  //   return [];
  // });

  return (
    <div>
      <h1>Recent free agency news</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {loaded ? (
            news.map((player, index) => (
              <div key={player.id}>
                {player.transfers && player.transfers.length > 0 ? (
                  player.transfers.map((transfer) => (
                    <div>
                      <p key={transfer.id}>{transfer.desc}</p>
                      {transfer.from_team && (
                        <img
                        src={teamLogoMap[transfer.from_team.reference]}
                        alt={transfer.from_team.name}
                      />
                      )}
                      {transfer.to_team && (
                        <img
                        src={teamLogoMap[transfer.to_team.reference]}
                        alt={transfer.to_team.name}
                      />
                      )}
                      {/* <p>{formattedTimes[index][1]}</p> */}
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
