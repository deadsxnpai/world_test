
<h2>Краткое описание.</h2> <br>
Взять стек Node.js, Moleculer, Apollo Server, любую реляционную БД (желательно postgresql)<br>
Создать API приложения, в котором реализовано:<br>
* Студенты, у них зачетки с оценками по дисциплинам<br>
* Рейтинг студентов по их оценкам<br>
<hr>
<h2>Структура базы данных:</h2><br>
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
<hr>
<b>Таблица <i>transcripts</i>:</b><br> 
     <ul class="nav">
        <li>id</li>
        <li>group_name (Название группы)</li>
    </ul>
<hr>
<b>Таблица <i>subjects</i>:</b> <br> 
    <ul class="nav">
        <li>id</li>
        <li>subject_name (Название дисциплины)</li>
        <li>grade(Оценка )</li>
        <li>semester (Семестр)</li>
    </ul>
<hr>
<b>Таблица <i>transcripts_subjects</i>:</b> <br> 
Связка зачеток и дисциплин - какой предмет в какой зачетке.<br>
Может быть, что одна зачетка имеет несколько дисциплин. <br>
<hr>
<b>Таблица <i>ratings</i>:</b> <br> 
    <ul class="nav">
        <li>transcript_id (Id зачетки (вн.ключ))</li>
        <li>rating (посчитанный рейтинг по зачетке)</li>
    </ul>
<hr>
<h3>API:</h3>
    1. crud-methods для каждой таблицы<br>
    2. get..ById get-метод по id для каждой таблицы.<br>
    3. calculateRatingByTranscript() - функция по подсчету рейтинга для каждой зачетки по семестрам.<br>
<hr>
<h2>Демонстрация решения:</h2>

![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>
![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>
![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>
![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>