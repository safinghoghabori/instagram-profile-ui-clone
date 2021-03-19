require('dotenv').config(); //for env variables

const express = require('express');
const cors = require('cors');
const path = require('path');

require('./db/mongoose');

const app = express();
const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, '..', 'build');

app.use(cors());
app.use(express.static(buildPath));

//import routes
const fileRoutes = require('./routes/file');

//register routes
app.use(fileRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
