const QRCode = require('qrcode-generator');

const qr = QRCode(0, 'H');
qr.addData('Hello, World!');
qr.make();
const img = qr.createImgTag();
console.log(img);
