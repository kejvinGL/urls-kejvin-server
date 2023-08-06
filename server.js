const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()

//Connect to DB
connectDB();
app.use(express.json({ extended: false }))

app.use(cors(
    {
        origin: 'https://urls-kejvin.netlify.app',
    }
));
//Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))
app.use('/api/url', require('./routes/getAll'))

app.listen(process.env.PORT || 5000);