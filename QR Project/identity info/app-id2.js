const express = require('express');
const device = require('express-device');
const app = express();
const port = 3002;

app.use(device.capture());

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];
    const deviceType = req.device.type;



    res.send(`User-Agent: ${userAgent}\nDevice Type: ${deviceType}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
