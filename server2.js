
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
});