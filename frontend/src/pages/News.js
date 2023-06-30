import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        
        const response = await fetch("http://localhost:3001/transactions");
        const jsonData = await response.json();
        console.log(jsonData.players);
        setNews(jsonData.players);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h1>Recent free agency news</h1>
      {loaded ? (
        news.map((player) => (
          <div key={player.id}>
            {player.transfers && player.transfers.length > 0 ? (
              player.transfers.map((transfer) => (
                <p key={transfer.id}>{transfer.desc}</p>
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
  );
};

export default News;
