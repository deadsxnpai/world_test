
<h2>Краткое описание.</h2> <br>
Взять стек Node.js, Moleculer, Apollo Server, любую реляционную БД (желательно postgresql)
Создать API приложения, в котором реализовано:
* Студенты, у них зачетки с оценками по дисциплинам
* Рейтинг студентов по их оценкам
<hr>

<b>Таблица students:</b><br> 
    id<br>
    first_name (Фамилия)<br>
    last_name (Имя)<br>
    date_of_birth (Дата рождения)<br>
    email (e-mail)<br>
    phone_number (номер телефона)<br>
    address (адрес)<br>
    transcript_id (внешний ключ с таблицей зачетки)<br>
<hr>
<b>Таблица transcripts:</b><br> 
    id<br>   
    group_name (Название группы)<br>
<hr>
<b>Таблица subjects:</b> <br> 
    id<br>
    subject_name (Название дисциплины) <br>
    grade (Оценка)
    semester (Семестр) <br>
<hr>
<b>Таблица transcripts_subjects:</b> <br> 
Связка зачеток и дисциплин - какой предмет в какой зачетке. Может быть, что одна зачетка имеет несколько дисциплин. <br><hr>
<b>Таблица ratings:</b> <br> 
    transcript_id (Id зачетки (вн.ключ))<br>
    rating (посчитанный рейтинг по зачетке)<br>
<hr>

![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>
![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>
![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>
![Иллюстрация к проекту](https://github.com/deadsxnpai/../raw/master/../file.png)<hr>