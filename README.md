# Инструкция
Для использования реакт-квиза необходимо скачать проект и запустить команду "~npm i".

Далее необходимо  в src->axios->axios-quiz.js указать ссылку на свою базу реального времени в firebase или если вы умеете использовать любую другую базу которая работает с  json.

Так же для авторизации необходимо редактировать src->store->autch.js необходимо указать свой url для получения токенов от firebase.

Затем собираем проект "~npm run build".

Готовую сборку папку "build" загружаем на сервер или внедряем в свой проект.


# Instruction
To use react quiz you need to download the project and run the command "~npm i".

Next, you need to specify in src->axios->axios-quiz.js a link to your real-time database in firebase or if you know how to use any other database that works with json.

Also, for authorization, you need to edit src->store->autch.js, you must specify your url to receive tokens from firebase.

Then build the project "~npm run build".

We upload the finished assembly to the "build" folder on the server or embed it in our project.
