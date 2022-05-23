# Практическая работа № 10, 11, 12 для Яндекс.Практикум. Mesto-React

## Описание

Эта практическая работа представляет собой вариант проекта Mesto  
портированного на «Реакт», куда можно добавлять фотографии, удалять их и ставить лайки.    
Основная задачи - адаптивная вёрстка, а также организация взаимодействия  
с пользователем через диалоговое окно ("попап"). 

Код разбит на функциональные компоненты, применены хуки useState, useEffect, использован CRA.    

Применена пока встроенная, "живая" валидация для всех форм планируется к добавлению.    

Макет дизайна страницы был взят с сайта [https://figma.com].  

Разработка адаптивной верстки велась с использованием:  
 * Flex-верстки;  
 * Grid Layout;
 * Относительных величин;
 * JavaScript;  
 * React;  
 * Wabpack.  

 Файловая структура проекта организована по БЭМ, для определения  
оптимальных точек перелома использовался сайт  
[https://screensizemap.com],  
картинки, использумые в проекте оптимизировались на сайте  
[https://tinypng.com],  
а сам проект доступен в публичном репозитории на GitHub Pages  
по ссылке: 
 
[https://akuchevskaya.github.io/mesto-react/index.html].

В проекте также есть специальный файл .nojekyll, который используется для того, чтобы GitHub корректно отображал файлы именованные по БЭМ и содержащие в своем имени нижнее подчеркивание.

Проект подключен к серверу, т.е. вся информация пользователя подгружается с сервера при помощи  
GET, PATCH, POST, PUT-запросов. Добавлен счетчик лайков, а также разделение карточек на свои и других пользователей.  
Свои карточки можно удалять при помощи DELETE-запросов, чужие удалять нельзя.

### Что планируется улучшить:

* добавить "живую" валидацию;
* дальнейший рефакторинг.
