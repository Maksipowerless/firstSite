const token = '6041857280:AAGy7g18OX-GBQIU5CmzDeA12LeWrH7rSjw';
const chatId = '433473911';
const message = 'Hello, Telegram!';

const url = `https://api.telegram.org/bot${token}/sendMessage`;

const data = new FormData();
data.append('chat_id', chatId);
data.append('text', message);

fetch(url, {
  method: 'POST',
  body: data
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));