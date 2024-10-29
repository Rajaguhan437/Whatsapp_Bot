import { WELCOME_MESSAGE } from '../config/constants.js';

export async function handleWelcome(message, name) {
    const personalizedMessage = WELCOME_MESSAGE.replace('{name}', name);
    await message.reply(personalizedMessage);
}