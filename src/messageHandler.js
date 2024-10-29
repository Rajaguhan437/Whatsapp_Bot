import { products } from './products.js';

export async function handleMessage(message) {
    const content = message.body.toLowerCase();
    const contact = await message.getContact();
    const name = contact.pushname || 'there';

    if (content === 'hi' || content === 'hello') {
        sendWelcomeMessage(message, name);
        return;
    }

    handleProductInquiry(message, content);
}

async function sendWelcomeMessage(message, name) {
    const welcome = `MATRIX INFOTECH, Your Complete Tech Partner\n\n` +
        `Welcome ${name}! Need new gear or a quick fix? We've got you covered!\n\n` +
        `Explore Our Tech Solutions:\n\n` +
        `- 🖥️ Computers: Desktops, All-in-Ones, Gaming PCs\n` +
        `- 💻 Laptops: Business, Gaming, Budget-friendly options\n` +
        `- 🖨️ Printers: Inkjet, Laser, 3D Printing solutions\n` +
        `- 🎥 CCTV Surveillance: Security cameras, Installation services\n` +
        `- 👤 Biometrics: Fingerprint, Facial Recognition systems\n` +
        `- ❓ Other: Request custom solution or query\n\n` +
        `GET IT OR FIX IT!\n\n` +
        `Type a category to learn more (e.g., "computers", "laptops", etc.)`;

    await message.reply(welcome);
}

async function handleProductInquiry(message, content) {
    const category = products[content];
    if (category) {
        await message.reply(category.description);
        return;
    }

    await message.reply("I'm not sure about that. Please type one of the following categories:\n" +
        "- computers\n- laptops\n- printers\n- cctv\n- biometrics\n- other");
}