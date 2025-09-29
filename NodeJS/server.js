const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

// Serve static files
app.use(express.static('public'));



// Home page route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Contacts API
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

// Station Info API
const stationInfoRouter = require('./routes/stationInfo');
app.use('/stationInfo', stationInfoRouter);

// Sync database and start server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
