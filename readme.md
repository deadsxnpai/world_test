
<h2>Краткое описание.</h2> <br>
Взять стек Node.js, Moleculer, Apollo Server, любую реляционную БД (желательно postgresql)<br>
Создать API приложения, в котором реализовано:<br>
* Студенты, у них зачетки с оценками по дисциплинам<br>
* Рейтинг студентов по их оценкам<br>
<hr>

<b>Таблица <i>students</i>:</b><br> 
    id<br>
    first_name (Фамилия)<br>
    last_name (Имя)<br>
    date_of_birth (Дата рождения)<br>
    email (e-mail)<br>
    phone_number (номер телефона)<br>
    address (адрес)<br>
    transcript_id (внешний ключ с таблицей зачетки)<br>
<hr>
<b>Таблица <i>transcripts</i>:</b><br> 
    id<br>   
    group_name (Название группы)<br>
<hr>
<b>Таблица <i>subjects</i>:</b> <br> 
    id<br>
    subject_name (Название дисциплины) <br>
    grade (Оценка)
    semester (Семестр) <br>
<hr>
<b>Таблица <i>transcripts_subjects</i>:</b> <br> 
Связка зачеток и дисциплин - какой предмет в какой зачетке. Может быть, что одна зачетка имеет несколько дисциплин. <br>
<hr>
<b>Таблица <i>ratings</i>:</b> <br> 
    transcript_id (Id зачетки (вн.ключ))<br>
    rating (посчитанный рейтинг по зачетке)<br>
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