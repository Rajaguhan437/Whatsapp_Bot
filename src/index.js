import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { handleMessage } from './messageHandler.js';

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR Code generated. Please scan with WhatsApp to login.');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', handleMessage);

client.initialize();