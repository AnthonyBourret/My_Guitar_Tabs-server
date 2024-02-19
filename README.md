# Tablotheque-server

All your tablatures in one place !  
This application collects all your tablatures links for the songs you are learning, and enables you to follow your progression.  
Songs can be sorted by style, tuning, difficulty, etc..., to create your own tab library.  

## 🚧 WORK IN PROGRESS 🚧

## Endpoints

### Auth

- **/login** => POST (Connect registered user)
- **/logout** => GET (Logout from app)
- **/signup** => POST (Create new user)

### User

- **/user/:id** => GET/PATCH/DELETE (Get/Edit user informations/Delete account, id => user id)
- **/user/:id/password** => PATCH (Edit password, id => user id)
- **/user/:id/songs** => GET (Get all songs from an user, id => user id)

### Song

- **/infos** => GET (Get all styles and tuning)
- **/song/:id** => GET/PATCH/DELETE (Find/Edit/Delete a song, id => song id)
- **/user/:id/add** => POST (Create a song, id => user id)

### Style

- **/song/:id/styles** => PUT/DELETE (Edit/Delete styles of a song, id => song id)

## How to read commits

:zap: = Minor correction / fast debug \
:construction: = Work in progress \
:tada: = New feature \
:card_file_box: = Datas or contents updated \
:hammer: = Corrections / debug \
:memo: = Readme / Code comments / Documentations \
:rotating_light: = Security \
:sparkles: = Clean code
