How to run this code?

fist, make mongodb account. Then go to browser collection you see in the front page. click it and create new database. Give it a name and remember it. comeback to the main page. there will be connect button right over browse collection. click it. go to drive and copy the given link. 

make .env file. and add the following information. in connect_string paste the link you copied. and change username , passoword and name of your link.
CONNECTION_STRING = mongodb+srv://<your username>:<your password>@nitishcluster.jw9bwk2.mongodb.net/<your databse name>?appName=nitishcluster
ACCESS_TOKEN_SECRET = YouCantSeeMe
MAX_SIZE = 20*1024*1024

in terminal, execute npm start to download all the required modules. then you are ready to run the server.