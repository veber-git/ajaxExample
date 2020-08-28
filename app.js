let express = require('express');
let app = express();

//создаем парсер для данных в формате json
let parserJson = express.json();

let config = require('./config/config');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/html/index.html');
});


app.get('/formPage', (req, res) => {
    res.sendFile(__dirname + '/client/html/formPage.html');
});
app.post('/formPage', parserJson, (req, res) => {
    console.log('Оправлен POST запрос');
    console.log(req.body);
    //если данных нет - возвращаем статус 400 (ошибка при запросе)
    if (!req.body) return res.sendStatus(400);
    //возвращаем данные 
    res.json(req.body);

});

//Обрабатываем скрипт main.js
app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/client/js/main.js');
});

//отбрабатываем скрипт submitForm.js
app.get('/js/submitForm.js', (req, res) => {
    res.sendFile(__dirname + '/client/js/submitForm.js');
});


app.listen(config.PORT, () => {
    console.log(`server run on port ${config.PORT}`);
});