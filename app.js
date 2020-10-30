const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const keys = require('./config/keys.js');
const mongoose = require('mongoose');
app.engine('handlebars',exphbs({
  defaultLayout: 'main'
}));
app.set('view engine' , 'handlebars');
app.use(express.static('public'));


/*mongoose.connect(keys.MongoURI , {useNewUrlParser:true},function(){}
.then(()=>{
    return ServiceWorkerRegistration.
}));
/*mongoose.connection
.once("open",()=>console.log("Connected"))
.on("error",error => {
 console.log("Your error", error);

}); 
*/
//mongoose.connect(keys.MongoURI, {useNewUrlParser:true,useUnifiedTopology:true}).catch(err => console.log(err.reason));
mongoose.connect(keys.MongoURI, {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('connected to database...');
});



const port = process.env.PORT || 3000;
app.get('/',(req,res)=>
{
    res.render('home');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.listen(port,()=>{
    console.log("Server is running on port $(port)");
});