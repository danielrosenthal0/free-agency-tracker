import React, { useEffect, useState } from 'react';


const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('/tweets');
        if (!response.ok) {
          throw new Error("Failed to fetch tweets");
        }
        const data = await response.json();
        setTweets(data);
        console.log(data);
        setLoaded(true);
      } catch (error) {
        console.error('Error occurred while fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      <h2>Recent Tweets</h2>
      {tweets ? <p>Loading...</p> : <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>}
      
    </div>
  );
};

export default Tweets;
