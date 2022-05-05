/**
 * -------------------
 * ONE TIME for your computer
 * -----------------
 * 1. create heroku account
 * 2. verify email
 * 3. install heroku cli
 * 4. heroku login
 * --------------------
 * For each project one time
 * --------------------------
 * 1. heroku create
 * 2. make sure you: git add . git commit. git push
 * 3. if git push heroku main gives error then heroku git:remote -a yourHerokuAppName
 * 4. git push heroku main
 * 5. Go to Heroku Dashboard > Current Project> Settings > Reveal Config vars
 * 6. copy paste config vars from your .env file
 * 7. Make sure you have whitelisted all ip address to access mongodb
 * --------------------
 * UPDATE SERVER with new changes
 * ------------------------
 * 1. Make changes
 * 2. make sure you: git add . git commit. git push
 * 3. git push heroku main
 * ---------------------
 * Connect Server with Client and deploy client
 * -------------------------
 * 1. replace localhost by heroku link
 * 2. npm run build
 * 3. firebase deploy
**/