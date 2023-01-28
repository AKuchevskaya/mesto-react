# Проект: Mesto на React

## Описание

Эта работа представляет собой вариант проекта Mesto  
портированного на «Реакт», куда можно добавлять фотографии, удалять их и ставить лайки.    
Основнst задачи - адаптивная вёрстка, организация взаимодействия  
с пользователем через диалоговое окно ("попап"), а также практика работы с React. 

Код разбит на функциональные компоненты, применены хуки useState, useEffect, использован CRA.     
Макет дизайна страницы был взят с сайта [https://figma.com].  

Разработка адаптивной верстки велась с использованием: Flex-верстки; Grid Layout; Относительных величин.  
Файловая структура проекта организована по БЭМ, для определения оптимальных точек перелома использовался сайт  
[https://screensizemap.com],  
картинки, использумые в проекте оптимизировались на сайте [https://tinypng.com],  
а сам проект доступен на GitHub Pages  
 
[https://akuchevskaya.github.io/mesto-react].

В проекте также есть специальный файл .nojekyll, который используется для того, чтобы GitHub корректно отображал файлы  
именованные по БЭМ и содержащие в своем имени нижнее подчеркивание.

Проект подключен к серверу, т.е. вся информация пользователя подгружается с сервера при помощи  
GET, PATCH, POST, PUT-запросов. Добавлен счетчик лайков, а также разделение карточек на свои и других пользователей.  
Свои карточки можно удалять при помощи DELETE-запросов, чужие удалять нельзя.

## Технологии:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
