require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');
const providerRoutes = require('./routes/providerRoutes');
const reportRoute = require('./routes/reportRoute');

const app = express();

app.use(express.json()); // For parsing application/json
app.use(cors()); // Enables CORS

app.use('/api/users', customerRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/report', reportRoute);

// Additional endpoints (optional, for direct testing or simple outputs)
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});
app.get("/test", (req, res) => {
    res.send("Test route works!");
});

// Error handling middleware
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
app.use(notFound);
app.use(errorHandler);

// Server activation
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;


// testing a lottttttt