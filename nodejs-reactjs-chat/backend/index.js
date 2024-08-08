const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, last_name: username},
      {headers: {"private-key": "61c4968f-0c75-4a8b-b224-5ea467a691b2"}}
    )
    
    //Returns status and data of the api call of response.
    return res.status(response.status).json(response.data)
  } catch (error) {
    return res.status(error.response.status).json(error.response.data)
  }
  

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);