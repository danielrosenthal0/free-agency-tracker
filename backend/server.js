const express = require('express');
const axios = require('axios');
const cors = require('cors');
const winston = require('winston');
require('dotenv').config();


const app = express();
const PORT = 3001;

// Configure logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' }),
  ],
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('An error occurred:', err);
  res.status(err.statusCode || 500).json({ error: err.message || 'Internal Server Error' });
});

app.use(cors());

app.get('/free-agents', async (req, res, next) => {
  try {
    const api_key = process.env.API_KEY;
    const apiUrl = `https://api.sportradar.com/nba/trial/v8/en/league/free_agents.json?api_key=${api_key}`;

    const response = await axios.get(apiUrl);
    const freeAgentsData = response.data;

    res.json(freeAgentsData);
  } catch (error) {
    console.error('Error occurred while fetching free agents', error);
    // next(new RequestError('Failed to retrieve free agents', 500));
  }
});

app.get('/transactions', async (req, res, next) => {
  try {
    const api_key = process.env.API_KEY;
    const {date} = req.query;
    const formattedDate = date.replace(/-/g, "/")
    // const response = await axios.get(`http://api.sportradar.us/nba/trial/v8/en/league/2023/06/29/transfers.json?api_key=${api_key}`);
    const response = await axios.get(`http://api.sportradar.us/nba/trial/v8/en/league/${formattedDate}/transfers.json?api_key=${api_key}`);

    const transactionsData = response.data;
    res.json(transactionsData);
  } catch (error) {
    console.error('Error occurred while fetching transactions', error);
    // next(new RequestError('Failed to retrieve transactions', 500));
  }
});

// app.get('/headshot', async (req, res, next) => {
  
//   try {
//     const {playerId} = req.query;
//     const apiUrl = `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
//     const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
//     const headshot = Buffer.from(response.data, 'binary');
//     res.set('Content-Type', 'image/png');
//     res.send(headshot);
//   } catch (error) {
//     console.error('Error occurred while fetching headshot.')
//   }
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
