export async function handleQuote(message) {
    const response = `Thank you for your interest in getting a quote! 💼\n\n` +
        `Our sales team will contact you shortly to provide detailed pricing information.\n\n` +
        `You can also reach us directly at:\n` +
        `📞 Phone: +91-XXXXXXXXXX\n` +
        `📧 Email: sales@matrixinfotech.com`;
    
    await message.reply(response);
}