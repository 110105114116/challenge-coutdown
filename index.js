const express = require('express');
const app = express();
const PORT = process.env.PORT || 1234;

function coutdown (enddate, callback) {
    const now = new Date();
    const distance = enddate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    callback(days, hours, minutes, seconds);
}

app.get(`/`, (req, res) => {
    const enddate = new Date('2020-12-31');
    coutdown(enddate, (days, hours, minutes, seconds) => {
        res.send(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})