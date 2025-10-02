const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Set relaxed CSP headers to allow inline scripts/styles
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'");
  next();
});



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

// Enhanced error logging
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
