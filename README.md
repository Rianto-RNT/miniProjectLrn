 
 ## Package need to install

 ## Make folder config, migrations, models,

 ## create Database in folder migration: code example
 npx sequelize model:generate --name user --attributes name:string,email:string,dayOfBirth:date

 ## migrate data from mogrations folder to database
 npx sequelize db:migrate

 ## undo migrate data to database
 npx sequelize db:migrate:undo:all

 ## Help
 npx sequelize --help