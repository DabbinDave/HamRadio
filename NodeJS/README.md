# HamRadio Node.js Web App

This project is a Node.js web application using Express.js and Sequelize ORM for SQL database support (default: SQLite, easily switchable to MySQL/PostgreSQL).

## Features
- Express.js web server
- Sequelize ORM for SQL database
- Basic project structure for models, routes, and database connection

## Getting Started

1. Install dependencies:
   ```powershell
   cd NodeJS
   npm install
   ```
2. Start the development server:
   ```powershell
   npm start
   ```

## Database
- Default: SQLite (file-based, no setup required)
- To use MySQL/PostgreSQL, update the Sequelize configuration in `config/database.js`.

## Project Structure
- `server.js` - Main entry point
- `models/` - Sequelize models
- `routes/` - Express routes
- `config/database.js` - Database configuration

## License
MIT
