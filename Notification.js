require('dotenv').config();
const { exec } = require("child_process");
const https = require("https");
const querystring = require('querystring');
const json = require('./config.json');

for(var i = 0; i < json.length; i++) {
    var obj = json[i];

function PushNotification(PushTitle, PushText)
                {
                         const apiKey = obj.apikey
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

    if(obj.enabled == 'y'){
        const command = 'sudo docker logs --since '+obj.since+' otnode | grep '+obj.searchfor
        const header = obj.nodename + ' - '+obj.header

        function os_func() {
          	this.execCommand = function(command,callback) {
          			exec(command, (error, stdout, stderr) => {
                  if (error) {

                      return;
                  }

                  callback(stdout);
          			});
          		}
          }
          var os = new os_func();

          os.execCommand(command, function (stdout) {
              PushNotification(header,stdout);
          });
    }else{
      console.log(obj.header+' is disabled.');
    }
}
