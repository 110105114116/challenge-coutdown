const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * 
 * @param {timestamp} date 
 */
function countdown (date) {
    const today = new Date();
    const end = new Date(date);
    const duration = end.getTime() - today.getTime();

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    if (duration < 0) { 
        console.log('\n!!! TIME OUT !!!\n');
        process.exit();
    }

    DisplayCountdown(days, hours, minutes, seconds);
}

function DisplayCountdown (days, hours, minutes, seconds) {
    console.log(`${days > 0 ? days + ' วัน ' : ''}${hours > 0 ? hours<10 ? '0'+hours+':' : hours + ':' : '00:'}${minutes > 0 ? minutes<10 ? '0'+minutes+':' : minutes + ':' : '00:'}${seconds > 0 ? seconds<10 ? '0'+seconds : seconds : '00'}`);
}
  
readline.question('Please enter date ? (ex.2022-10-03)\n:: ', (date) => {
    readline.question('Please enter time ? (ex.00:00:00)\n:: ', (time) => {
        const dateTime = `${date} ${time}`;

        console.log(`\n----> เริ่มนับถอยหลัง <----\n`);

        setInterval(() => {
            countdown(dateTime)
        }, 1000);
    })
});