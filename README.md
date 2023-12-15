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
