const qr = require('qrcode');

qr.toFile('./qrcode.png', 'Hello, World!', function (err) {
    if (err) throw err;
    console.log('QR Code saved!');
});
