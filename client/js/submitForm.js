//Получаем элемент документа - кнопку отправки формы
let buttonSubmit = document.getElementById('submitForm');

buttonSubmit.addEventListener('click', ((e) => {
    //Отменяем действия элемента по-умолчанию (отправку формы)
    e.preventDefault();

    //Получаем данные формы
    let myForm = document.forms.myForm;
    let yourName = myForm.elements.yourName.value;
    let yourEmail = myForm.elements.yourEmail.value;

    //сериализуем данные в JSON (преобразует значение JavaScript в строку JSON), необходимо для отправки на сервер
    let userData = JSON.stringify({
        yourName: yourName,
        yourEmail: yourEmail
    });

    //Создаем запрос
    let xhr = new XMLHttpRequest();
    //Конфигурируем запрос (тип- POST, адрес - /formPage, true- асинхронный)
    xhr.open('POST', '/formPage', true);
    //Устанавливаем заголовки
    xhr.setRequestHeader('Content-Type', 'application/json');
    //После завешения запроса без ошибок
    xhr.addEventListener('load', () => {
        //получаем и парси ответ от сервера
        let returnData = JSON.parse(xhr.response);
        //выводим в консоль данные ответа
        console.log('your Name: ' + returnData.yourName);
        console.log('your Email ' + returnData.yourEmail);
        document.getElementById('returnName').innerText = returnData.yourName;
        document.getElementById('returnEmail').innerText = returnData.yourEmail;
    });
    //отсылаем данные
    xhr.send(userData);
}));