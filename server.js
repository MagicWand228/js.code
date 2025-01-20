const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`IP-адреса користувача: ${userIP}`);
    
    res.send(`venom`);
});

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});
