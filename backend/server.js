const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/free-agents', async (req, res) => {
  try {
    const api_key = '4qtutsebhny3zgp3jadur9n6';
    const apiUrl = `https://api.sportradar.com/nba/trial/v8/en/league/free_agents.json?api_key=${api_key}`;

    const response = await axios.get(apiUrl);
    const freeAgentsData = response.data;

    res.json(freeAgentsData);
  } catch (error) {
    console.error('Error occurred while fetching free agents', error);
    res.status(500).json({ error: 'Failed to retrieve free agents' });
  }
});

app.get('/transactions', async (req, res) => {
  try {
    const api_key = '4qtutsebhny3zgp3jadur9n6';
    const response = await axios.get(`http://api.sportradar.us/nba/trial/v8/en/league/2023/06/29/transfers.json?api_key=${api_key}`);
    const transactionsData = response.data;
    res.json(transactionsData);
  } catch (error) {
    console.error('Error occurred while fetching transactions', error);
    res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
