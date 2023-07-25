
<h2>Краткое описание.</h2>
Взять стек Node.js, Moleculer, Apollo Server, любую реляционную БД (желательно postgresql)<br>
Создать API приложения, в котором реализовано:<br>
* Студенты, у них зачетки с оценками по дисциплинам<br>
* Рейтинг студентов по их оценкам<br>
<hr>
<h2>Структура базы данных:</h2>
<b>Таблица <i>students</i>:</b><br> 
    <ul class="nav">
        <li>id</li>
        <li>first_name (Фамилия) </li>
        <li>last_name (Имя)</li>
        <li>date_of_birth (Дата рождения)</li>
        <li>email (e-mail)</li>
        <li>phone_number (номер телефона)</li>
        <li>address (адрес)</li>
        <li>transcript_id (внешний ключ с таблицей зачетки)</li>
    </ul>

<b>Таблица <i>transcripts</i>:</b><br> 
     <ul class="nav">
        <li>id</li>
        <li>group_name (Название группы)</li>
    </ul>

<b>Таблица <i>subjects</i>:</b> <br> 
    <ul class="nav">
        <li>id</li>
        <li>subject_name (Название дисциплины)</li>
        <li>grade(Оценка )</li>
        <li>semester (Семестр)</li>
    </ul>

<b>Таблица <i>transcripts_subjects</i>:</b> <br> 
Связка зачеток и дисциплин - какой предмет в какой зачетке.<br>
Может быть, что одна зачетка имеет несколько дисциплин. <br>

<b>Таблица <i>ratings</i>:</b> <br> 
    <ul class="nav">
        <li>transcript_id (Id зачетки (вн.ключ))</li>
        <li>rating (посчитанный рейтинг по зачетке)</li>
    </ul>
<hr>
<h3>Install:</h3>
<p><code>npm i express apollo-server-express graphql graphql-tag moleculer moleculer-web nats nodemon pg</code></p>
<p><code>npm run dev</code>: for development</p>
<p><code>npm start</code>: for run</p><hr>
<h3>API:</h3>
    1. crud-methods для каждой таблицы<br>
    2. get..ById get-метод по id для каждой таблицы.<br>
    3. calculateRatingByTranscript() - функция по подсчету рейтинга для каждой зачетки по семестрам.<br>
<hr>
<h2>Демонстрация решения:</h2>

[![Screenshot-20230724-153734.png](https://i.postimg.cc/YSXFXPqn/Screenshot-20230724-153734.png)](https://postimg.cc/R3HqhXtK)<hr>
[![3.png](https://i.postimg.cc/mkKswCnp/3.png)](https://postimg.cc/9wPKXRCy)<hr>
[![Screenshot-20230725-043418.png](https://i.postimg.cc/Y0SwFtdq/Screenshot-20230725-043418.png)](https://postimg.cc/DJRDk3Vt)<hr>

[![Screenshot-20230725-043758.png](https://i.postimg.cc/L6np66qx/Screenshot-20230725-043758.png)](https://postimg.cc/QHGPfDJ7)<hr>

[![Screenshot-20230725-043818.png](https://i.postimg.cc/q7XfZNYv/Screenshot-20230725-043818.png)](https://postimg.cc/d71ShVwb)<hr>
