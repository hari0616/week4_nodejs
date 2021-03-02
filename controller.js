var promise =new Promise (function (resolve,reject){
    
    resolve("2");
   reject("error");
})
promise.then(first).then(second).then(third).then(function(response){
    console.log(response);
})

function first(value){
    return value+1;
    
}
function second(value){
    console.log(typeof value)
    if(typeof value == String){
    
        console.log(value)
   }
    return value+1;
    
}
function third(value){
    return value+1;
}








/*let data = [
    { id: 1, name: 'Karthick', age:21 },
    { id: 2, name: 'Gokul', age:24 },
    { id: 3, name: 'prasanth', age:25},
    { id: 4, name: 'lazer', age:23 },
  ];
  
  var express = require('express')
  var app = express()
  const port = 7000
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  
  app.get('/', function (req, res) {
  
    res.send(JSON.stringify(data));
  })
  app.get('/:name/:age', function (req, res) {
    let itemId = data.map(item => item.id);
    //let ageNum = data.map(item => item.age);
    let newId = itemId.length > 0 ? Math.max.apply(Math, itemId) + 1 : 1;
    let age=parseInt(req.params.age);
   // let ageNum1 = ageNum.length > 0 ? Math.max.apply(Math, ageNum) + 1 : 1;
  
    // create an object of new Item
      let newItem={
        id: newId, // generated in above step
        name: req.params.name, // value of `title` get from POST req
        age: age, // generated in above step
        }
    data.push(newItem);
    res.status(201).json(newItem);
  
});
  

app.listen(port, () => {
    console.log(`Running Successfully`);
  })
*/
/*var express = require('express');
var app = express();

var things = require('./server.js');

//both index.js and things.js should be in same directory
app.use('/', things);

app.listen(3600);*/

/*//const { response } = require('express');
const express = require('express')
const request=require('request')
const app = express();
const port = process.env.PORT || 3000;
app.all('/', function (req, res) {

    request.get("http://localhost:6000/",(error,response,body) => {
    if(error){
        console.log(error)
        // return console.dir(error);
    }
        var temp=(JSON.parse(body));
        console.log("Success",temp);
        res.send(temp);
    })
    
  })
 
//const routes = require('./api/route');
//routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});*/