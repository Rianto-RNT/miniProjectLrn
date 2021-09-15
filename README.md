 
  ## Package need to install

 ## Make folder config, migrations, models,

 ## create Database in folder migration: code example
 npx sequelize model:generate --name user --attributes name:string,email:string,dayOfBirth:date

 ## migrate data from mogrations folder to database
 npx sequelize db:migrate

 ## undo migrate data to database
 npx sequelize db:migrate:undo:all

 ## start project server at PORT 3000
    using terminal, Go to project file directory and type: nodemon then hit enter
 ## Help
 npx sequelize --help

 ## Link

 http://localhost:3000/admin/dashboard

 http://localhost:3000/admin/create-book
 
 http://localhost:3000/admin/list-book