const express = require("express");
const axios = require("axios");
const cors = require("cors");
const winston = require("winston");
require("dotenv").config();

const app = express();
const PORT = 3001;

// Configure logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log" }),
  ],
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error("An error occurred:", err);
  res
    .status(err.statusCode || 500)
    .json({ error: err.message || "Internal Server Error" });
});

app.use(cors());

app.get("/free-agents", async (req, res, next) => {
  try {
    const api_key = process.env.API_KEY;
    const apiUrl = `https://api.sportradar.com/nba/trial/v8/en/league/free_agents.json?api_key=${api_key}`;

    const response = await axios.get(apiUrl);
    const freeAgentsData = response.data;

    res.json(freeAgentsData);
  } catch (error) {
    console.error("Error occurred while fetching free agents", error);
    // next(new RequestError('Failed to retrieve free agents', 500));
  }
});

app.get("/transactions", async (req, res, next) => {
  try {
    const api_key = process.env.API_KEY;
    const { date } = req.query;
    const formattedDate = date.replace(/-/g, "/");
    // const response = await axios.get(`http://api.sportradar.us/nba/trial/v8/en/league/2023/06/29/transfers.json?api_key=${api_key}`);
    const response = await axios.get(
      `http://api.sportradar.us/nba/trial/v8/en/league/${formattedDate}/transfers.json?api_key=${api_key}`
    );

    const transactionsData = response.data;
    res.json(transactionsData);
  } catch (error) {
    console.error("Error occurred while fetching transactions", error);
    // next(new RequestError('Failed to retrieve transactions', 500));
  }
});

app.get("/tweets", async (rec, res, next) => {
  try {
    const api_key = process.env.TWITTER_API_KEY;
    const api_secret_key = process.env.TWITTER_API_SECRET_KEY;
    const access_token = process.env.TWITTER_ACCESS_TOKEN;
    const access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
    const userNames = ["ShamsCharania", "wojespn"];
    const tweets = [];

    for (const userName of userNames) {
      // Get user ID
      const userIdResponse = await axios.get(
        `https://api.twitter.com/2/users/by/username/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      const userId = userIdResponse.data.data.id;

      // Get recent tweets
      const tweetsResponse = await axios.get(
        `https://api.twitter.com/2/users/${userId}/tweets`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      tweets.push(...tweetsResponse.data.data);
    }

    res.json(tweets);
  } catch (error) {
    console.error("Error occurred while fetching tweets", error);
  }


});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
