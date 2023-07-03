import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tweets');
        setTweets(response.data);
      } catch (error) {
        console.error('Error occurred while fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      <h2>Recent Tweets</h2>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;
