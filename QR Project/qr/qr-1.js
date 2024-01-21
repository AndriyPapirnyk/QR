const qr = require('qr-image');
const fs = require('fs');

const code = qr.image('Hello, World!', { type: 'png' });
code.pipe(fs.createWriteStream('qrcode.png'));
