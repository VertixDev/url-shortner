const mongoose = require('mongoose')
const config = require('./deafult.json')
const db = config.mongoURI
const chalk = require('chalk')
const d = new Date

const connectDB = async () => { 
try {
    await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    console.log(chalk.green(`[${d.toLocaleDateString()}] [${d.toLocaleTimeString()}]`), chalk.cyan(`[READY]`), chalk.white(`Connected to database successfully.`))
} catch (error) {
    console.log(chalk.red(`[ERROR] ${err.message}`))
    process.exit(1)
}
}

module.exports = connectDB