var express = require('express');
var app = express();
var URL = require('url')
var path = require('path');


app.post('/rest/collect/event/h5/v1/', function(req, res) {
        res.cookie('token','11111112222222224444444444')
        res.cookie('httpOnly-token','11111112222222224444444444',{ httpOnly: true })

    function User() {
            this.name;
            this.city;
            this.age;
    }

    var user = new User();

    if(params.id == '1') {

            user.name = "ligh";
            user.age = "1";
            user.city = "北京市";

    }else{
            user.name = "SPTING";
            user.age = "1";
            user.city = "杭州市";
    }

    var response = {status:1,data:user};
    res.send(JSON.stringify(response));
});

app.listen(3000);
console.log('Listening on port 3000...');

