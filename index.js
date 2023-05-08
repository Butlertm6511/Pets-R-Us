/*Title: 
  Author:
  Modified by:TiaNiecia Mosley Butler
  Description:Set up dependencies, nodemon, express. Creates system for setting up node project, writing express server,
  use of templates, using routes, and connecting static folders.*/
  


const express = require('express');
const app = express();
const path = require('path');



// statics files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.static(path.join(__dirname,'public')));



// Route for the index page and grooming page
app.get('/', (req, res) => {
  res.render('index'), {
    title:'pet-r-us:Landing Page',
    pageTitle:'Landing Page'
  }
}) 


app.get('/grooming', (req, res) => {
  res.render('grooming',{
  title:'pets-r-us:grooming',
  pageTitle:'grooming'
  })
})





const Port = process.env.PORT || 3002;
app.listen(Port, () => {
  console.log('Server listening on port 3001');
});


