require('dotenv').config();
const { exec } = require("child_process");
var https = require("https");
var querystring = require('querystring');

var command1 = 'sudo docker logs --since 5m otnode | grep memory'
var command2 = 'sudo docker logs --since 5m otnode | grep Rejection'
var command3 = 'sudo docker logs --since 5m otnode | grep Resource'
var command4 = 'sudo docker logs --since 5m otnode | grep Timed'
var command5 = 'sudo docker logs --since 5m otnode | grep balance'
var command6 = 'sudo docker logs --since 5m otnode | grep ' + process.env.CHOSEN
var command7 = 'sudo docker logs --since 5m otnode | grep fatal'

var title1 = process.env.NODENAME + ' - Memory Leak'
var title2 = process.env.NODENAME + ' - Unhandled Rejection'
var title3 = process.env.NODENAME + ' - Resource Lock'
var title4 = process.env.NODENAME + ' - Time Out'
var title5 = process.env.NODENAME + ' - Eth Balance Low'
var title6 = process.env.NODENAME + ' - New Job Accepted!'
var title7 = process.env.NODENAME + ' - FATAL - ATTENTION REQUIRED'

function PushNotification(PushTitle, PushText)
                {
                         var apiKey = process.env.APIKEY
                         var postdata = querystring.stringify({
                                 'ApiKey': apiKey,
                                 'PushTitle': PushTitle,
                                 'PushText': PushText,
                                 });
                                 var options = {
                                 hostname: 'www.notifymydevice.com',
                                 port: 443,
                                 path: '/push?',
                                 method: 'POST',
                                 headers: {
                                 'Content-Type': 'application/x-www-form-urlencoded',
                                 'Content-Length': postdata.length
                                 }
                         };

                 callback = function (response) {
                         var str = '';
                                 //another chunk of data has been recieved, so append it to `str`
                                         response.on('data', function (chunk) {
                                         str += chunk;
                                         });
                                         //the whole response has been recieved, so we just print it out here
                                         response.on('end', function () {
                                         console.log('Response: ' + str);
                                         });
                                 }
                         var req = https.request(options, callback);
                         req.write(postdata);
                         req.end();
                         req.on('error', function (e) {
                         Log(e);
                 });
                }

//Memory Leak
exec(command1, (error, stdout1, stderr) => {
    if (stdout1){
        PushNotification(title1,stdout1);
    }
});

//Unhandled Rejection
exec(command2, (error, stdout2, stderr) => {
    if (stdout2){
        PushNotification(title2,stdout2);
    }
});

//Resource Lock
exec(command3, (error, stdout3, stderr) => {
    if (stdout3){
        PushNotification(title3,stdout3);
    }
});

//Time Out
exec(command4, (error, stdout4, stderr) => {
    if (stdout4){
        PushNotification(title4,stdout4);
    }
});

//Eth balance low
exec(command5, (error, stdout5, stderr) => {
    if (stdout5){
        PushNotification(title5,stdout5);
    }
});

//Job Won
exec(command6, (error, stdout6, stderr) => {
    if (stdout6){
        PushNotification(title6,stdout6);
    }
});

//fatal
exec(command7, (error, stdout7, stderr) => {
    if (stdout7){
        PushNotification(title7,stdout7);
    }
});
