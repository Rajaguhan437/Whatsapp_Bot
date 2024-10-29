import { products } from '../data/products.js';
import { HELP_MESSAGE } from '../config/constants.js';

export async function handleProductInquiry(message, content) {
    const category = products[content];
    if (category) {
        await message.reply(category.description);
        return;
    }

    await message.reply(HELP_MESSAGE);
}