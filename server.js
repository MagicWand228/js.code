const express = require('express');
const app = express();
const port = 3000;

// Роут для головної сторінки
app.get('/', (req, res) => {
    const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`IP-адреса користувача: ${userIP}`);
    res.send(`Ваш IP-адреса: ${userIP}`);
});

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});
