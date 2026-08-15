const axios = require("axios");
const express = require("express");
const app = express();
app.use(express.json());

// simplificando pro barramento ser broadcast, mas poderia fazer tipo MQTT com pub/sub
const eventos = [];

app.post("/eventos", async (req, res) => {
  const evento = req.body;
  eventos.push(evento);
  console.log(evento);
  try {
    await axios.post("http://localhost:4000/eventos", evento);
  } catch (e) {}
  try {
    await axios.post("http://localhost:5000/eventos", evento);
  } catch (e) {}
  try {
    await axios.post("http://localhost:6000/eventos", evento);
  } catch (e) {}
  try {
    await axios.post("http://localhost:7001/eventos", evento);
  } catch (e) {}
  res.status(200).send({ msg: "ok" });
});

app.get("/eventos", (req, res) => {
  res.json(eventos);
});

const port = 10000;
app.listen(port, () => {
  console.log(`Barramento. Porta ${port}. `);
});
