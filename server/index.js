const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());
app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
