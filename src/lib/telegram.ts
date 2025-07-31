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
  // В данной демо-версии симулируем отправку
  // В реальном проекте здесь должен быть реальный API вызов
  
  try {
    // Формируем текст сообщения
    const message = `
🔔 НОВАЯ ЗАЯВКА НА ВИДЕОНАБЛЮДЕНИЕ

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}` : ''}
${formData.objectType ? `🏢 Тип объекта: ${formData.objectType}` : ''}
${formData.message ? `💬 Сообщение: ${formData.message}` : ''}

🕐 Время: ${new Date().toLocaleString('ru-RU')}
    `.trim();

    // В реальном проекте здесь должен быть вызов:
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         chat_id: TELEGRAM_CHAT_ID,
        text: message,
     parse_mode: 'HTML'
      }),
    });
    
   return response.ok;

    
