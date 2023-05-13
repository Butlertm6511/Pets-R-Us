/*Title: 
  Author:
  Modified by:TiaNiecia Mosley Butler
  Description:Set up dependencies, nodemon, express. Creates system for setting up node project, writing express server,
  use of templates, using routes, and connecting static folders.*/
  
 

const express = require('express');
const app = express();
const path = require('path');
// const expresslayouts = require('express-ejs-layouts')



// statics files

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// app.use(expresslayouts)
app.use(express.static(path.join(__dirname,'public')));



// Route for the index page and grooming page
app.get('/', (req, res) => {
  res.render('index')
}); 


app.get('/grooming', (req, res) => {
  res.render('grooming');
});


app.get('/boarding', (req, res) => {
  res.render('boarding');
});


app.get('/training', (req, res) => {
  res.render('training');
});



const Port = process.env.PORT || 3002;
app.listen(Port, () => {
  console.log('Server listening on port 3002');
});


