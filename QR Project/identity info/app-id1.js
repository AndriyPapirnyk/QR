const express = require('express');
const app = express();

app.use((req, res, next) => {

    const userAgent = req.get('user-agent');


    const Fingerprint2 = require('fingerprintjs2');

    Fingerprint2.getPromise().then(components => {
        const fingerprint = Fingerprint2.x64hash128(components.map(pair => pair.value).join(''), 31);

        req.deviceId = fingerprint;
        next();
    });
});

app.get('/', (req, res) => {

    res.send('Device ID: ' + req.deviceId);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
