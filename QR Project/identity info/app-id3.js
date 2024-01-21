const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3003;

app.use(cookieParser());

app.get('/', (req, res) => {
    let deviceId = req.cookies.deviceId;

    if (!deviceId) {
        deviceId = 2;// Функція для генерації унікального ідентифікатора
        res.cookie('deviceId', deviceId, { maxAge: 900000, httpOnly: true });
    }

    res.send(`Device ID: ${deviceId}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
