import { useEffect, useState } from "react";

const News = () => {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/recent-tweets');
        const data = await response.json();
        setTweets(data);
      } catch (error){
        console.error(error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      <h1>Recent free agency news</h1>
      {/* {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>{tweet.text}</p>
        </div>
      ))} */}
    </div>
  );
};

export default News;
