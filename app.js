var express = require('express');
var axios = require('axios');
var fs = require("fs"); 

const port = 3000;
app = express();

var storeContent = "";



app.get("/",(req,res)=>{

    let  url = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
     axios.get(url).then(
        data=> { 
        jsondata =  data.data;

                    [...jsondata.paid,...jsondata.free].map(item => {
                       storeContent +=`\n\n\n`
                       for (let [key, value] of Object.entries(item)) {
                       storeContent += `[${key}: ${value}]\n`
                       }
                    })
                    // console.log(storeContent);
                    res.send(`${storeContent} \n`);

}).catch(err => console.log("error"));

});
app.listen(port,() =>console.log("Server running"));