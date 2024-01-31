# Tablotheque-server

## Endpoints

### Auth

- **/login** => POST (Connect registered user)
- **/logout** => GET (Logout from app)
- **/signup** => POST (Create new user)

### User

- **/user/:id** => GET/PATCH/DELETE (Get/Edit user informations/Delete account, id => user id)
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
