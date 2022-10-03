const express = require('express');
const app = express();
const moment = require('moment');
const PORT = process.env.PORT || 1234;

// function coutdown (edate, callback) {
//     const today = moment(new Date()).utcOffset(7).format('YYYY-MM-DD HH:mm:ss')
//     const distance = edate - today;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     callback(days, hours, minutes, seconds);
// }

// app.get(`/`, (req, res) => {
//     const timeToday = moment(new Date()).utcOffset(7).format('HH:mm:ss')

//     const endDate = req.query.enddate + ` ` + timeToday;

//     const today = new Date(moment(new Date()).utcOffset(7).format('YYYY-MM-DD HH:mm:ss'))
//     const edate = new Date(moment(endDate).utcOffset(7).format('YYYY-MM-DD HH:mm:ss'))

//     const distance = edate - today;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // coutdown(edate, (days, hours, minutes, seconds) => {
//     //     res.send(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
//     // });

//     res.json({
//         today,
//         edate,
//         distance,
//         days,
//         hours,
//         minutes,
//         seconds
//     })
// });
function coutdown (endDate, cllback) {
    const today = new Date()
    const distance = endDate - today;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    cllback(days, hours, minutes, seconds);
}

app.get(`/`, (req, res) => {
    const enddate = new Date(req.query.enddate);

    coutdown(enddate, (days, hours, minutes, seconds) => {
        res.send(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})