const express = require("express");

//setting up Express js
const app = express();

const PORT = 8080;
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use(express.json());
app.use('/tasks', dashboardRoutes);


app.listen(PORT, () => {
    console.log(`Server Started on Portal ${PORT}`);
})