const express = require('express')
const chalk = require('chalk')
const connectDB = require('./config/db')

const app = express();

// Connect to DB
connectDB();

app.use(express.json({ extended: false }));

// Define routes
app.use('/', require('./routes/index.js'))
app.use('/api/url', require('./routes/url.js'))

const PORT = 5000;

const d = new Date

app.listen(PORT, () => console.log(chalk.green(`[${d.toLocaleDateString()}] [${d.toLocaleTimeString()}]`), chalk.cyan(`[READY]`), chalk.white(`Server running successfully on port ${PORT}.`)))

