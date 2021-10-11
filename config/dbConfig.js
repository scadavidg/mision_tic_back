//utilizando variables de entorno definidas en el archivo .env
require('dotenv').config();
var dbUser = process.env.DB_USER;
var dbPassword = process.env.DB_PASSWORD;
module.exports = {
    urlDatabase: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2cjt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}