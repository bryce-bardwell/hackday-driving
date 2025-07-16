const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');

app.use(express.json());
app.use(cors());

const state = {
  command: 'command',
  colour: 'colour'
};

app.post('/command', (req, res) => {
  const { command } = req.body;

  state.command = command;
  res.status(200).send(`Thank you for the command: ${command}`);
});

app.post('/sky/colour', (req, res) => {
  console.log(req.body);
  const { colour } = req.body;

  state.colour = colour;
  res.status(200).send(`Thank you for the sky colour: ${colour}`);
});

app.post('/car/colour', (req, res) => {
  console.log(req.body);
  const { colour } = req.body;

  state.colour = colour;
  res.status(200).send(`Thank you for the car colour: ${colour}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/state', cors(), (req, res) => {
  res.json(state);
});

app.listen(port, () => {
  console.log(`Example listening port ${port}`);
});
