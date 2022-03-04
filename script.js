'use strict';

const getData = () => {
   return fetch('db.json')
         .then(response => response.json());
};

const sendData = (url) => {
   return fetch(url, {
      method: 'POST',
      body: JSON.stringify(getData()),
      headers: { "Content-Type": "application/json; charset=utf-8" },
   }).then(response => response.json());
};

getData()
   .then((data) => alert("Данные получены\n" + JSON.stringify(data)))
   .catch(error => alert('Ошибка: ' + error));

sendData('https://jsonplaceholder.typicode.com/posts')
   .then(() => alert("Данные отправлены!"))
   .catch(error => alert('Ошибка: ' + error));
   