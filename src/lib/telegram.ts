// Утилита для отправки сообщений в Telegram бот
// Для работы нужно:
// 1. Создать бота через @BotFather в Telegram
// 2. Получить токен бота 
// 3. Настроить webhook или использовать polling
// 4. Получить chat_id куда отправлять сообщения

interface TelegramFormData {
  name: string;
  phone: string;
  email?: string;
  objectType?: string;
  message?: string;
}

// Токен бота - в реальном проекте должен храниться в переменных окружения
const TELEGRAM_BOT_TOKEN = '8303969862:AAHD1LOY9JmBwpLuEgWHqz9IDWAymYLXcP8';
const TELEGRAM_CHAT_ID = '-1002890807115';

export const sendToTelegram = async (formData: TelegramFormData): Promise<boolean> => {
  try {
    const escapeHTML = (text: string) =>
      text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const message = `
🔔 НОВАЯ ЗАЯВКА НА ВИДЕОНАБЛЮДЕНИЕ

👤 Имя: ${escapeHTML(formData.name)}
📱 Телефон: ${escapeHTML(formData.phone)}
${formData.email ? `📧 Email: ${escapeHTML(formData.email)}` : ''}
${formData.objectType ? `🏢 Тип объекта: ${escapeHTML(formData.objectType)}` : ''}
${formData.message ? `💬 Сообщение: ${escapeHTML(formData.message)}` : ''}

🕐 Время: ${new Date().toLocaleString('ru-RU')}
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Telegram API error:', error);
      return false;
    }

    return true;

  } catch (error) {
    console.error('Ошибка при отправке сообщения в Telegram:', error);
    return false;
  }
}; // ← вот этой закрывающей скобки, скорее всего, у вас не было
