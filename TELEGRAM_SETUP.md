# Настройка интеграции с Telegram для форм обратной связи

## 📋 Что нужно для настройки отправки в Telegram

### 1. Создание Telegram бота

1. **Найдите @BotFather в Telegram**
   - Откройте Telegram
   - Найдите пользователя @BotFather
   - Начните диалог командой `/start`

2. **Создайте нового бота**
   ```
   /newbot
   ```
   - Введите название бота (например: "ВидеоНаблюдение34 Заявки")
   - Введите username бота (например: "videonablydenie34_bot")

3. **Получите токен бота**
   - BotFather выдаст вам токен вида: `123456789:ABCdefGhIJKlmNoPQRsTUVwxyz`
   - **СОХРАНИТЕ ЭТОТ ТОКЕН!**

### 2. Получение Chat ID

1. **Добавьте бота в группу или канал** (или используйте личный чат)

2. **Найдите Chat ID одним из способов:**

   **Способ 1 - через @userinfobot:**
   - Найдите @userinfobot в Telegram
   - Отправьте ему любое сообщение
   - Он покажет ваш Chat ID

   **Способ 2 - через API:**
   - Отправьте любое сообщение вашему боту
   - Откройте в браузере: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Найдите `"chat":{"id":-123456789}`

### 3. Настройка в коде

В файле `src/lib/telegram.ts` замените значения:

```typescript
// Замените на ваши реальные значения
const TELEGRAM_BOT_TOKEN = 'ваш_токен_бота';
const TELEGRAM_CHAT_ID = 'ваш_chat_id'; // может быть отрицательным для групп
```

### 4. Раскомментируйте код API

В файле `src/lib/telegram.ts` найдите закомментированный блок:

```typescript
// Раскомментируйте этот блок:
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
```

## 🔧 Альтернативные способы

### Использование Webhook (рекомендуется для production)

1. **Создайте серверный endpoint** для обработки Telegram webhook
2. **Настройте webhook:**
   ```bash
   curl -X POST https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook \
   -d "url=https://yoursite.com/api/telegram-webhook"
   ```

### Использование сторонних сервисов

1. **Telegram Bot API сервисы:**
   - Zapier
   - IFTTT
   - n8n

2. **Готовые решения:**
   - FormSubmit
   - Formspree (с webhook на Telegram)

## 🛡️ Безопасность

1. **Никогда не храните токены в коде!**
   - Используйте переменные окружения
   - В Lovable подключите Supabase для хранения секретов

2. **Проверяйте входящие данные**
   - Валидируйте все поля формы
   - Защитите от спама с помощью rate limiting

3. **Используйте HTTPS**
   - Telegram API работает только с HTTPS

## 📱 Дополнительные возможности

### Форматирование сообщений

```typescript
const message = `
🔔 <b>НОВАЯ ЗАЯВКА</b>

👤 <b>Имя:</b> ${formData.name}
📱 <b>Телефон:</b> ${formData.phone}
📧 <b>Email:</b> ${formData.email}

🕐 <i>${new Date().toLocaleString('ru-RU')}</i>
`;
```

### Добавление кнопок

```typescript
body: JSON.stringify({
  chat_id: TELEGRAM_CHAT_ID,
  text: message,
  parse_mode: 'HTML',
  reply_markup: {
    inline_keyboard: [[
      { text: "📞 Перезвонить", callback_data: `call_${formData.phone}` },
      { text: "📧 Email", callback_data: `email_${formData.email}` }
    ]]
  }
})
```

## 🔄 Текущее состояние

Сейчас в проекте настроена **демо-версия**, которая:
- ✅ Принимает данные формы
- ✅ Показывает уведомления пользователю  
- 🔄 Симулирует отправку в Telegram (логирует в консоль)

Для **реальной работы** нужно:
1. Получить токен бота и Chat ID
2. Раскомментировать код API в `telegram.ts`
3. Заменить демо-значения на реальные

## 📞 Поддержка

При возникновении проблем с настройкой:
1. Проверьте токен и Chat ID
2. Убедитесь, что бот добавлен в чат
3. Проверьте консоль браузера на ошибки
4. Протестируйте API через curl или Postman