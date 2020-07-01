# OTPushNotifications
This will help you set up a cron job that runs every 5 minutes that will search your otnode logs for specific keywords. A Notifiction will be sent to you with the log lines that we're found that contain that keyword and are not older than 5 minutes. If no results are returned, then a notification will not be sent.<br>
Currently we are monitoring for:
Memory Leaks<br>
Unhandled Rejections<br>
Resource Locks<br>
Time outs<br>
Low Ether Balances<br>
Winning a job offer<br>
Fatal Errors (node crashes)

Install the 'Notify My Device' app from the app store and install it onto your mobile device.

Navigate to https://www.notifymydevice.com/ and create an account. Go to 'My applications' and create an application. Copy the API key and save it for later.

On your node:<br>
Install npm, nodejs, and dotenv
<ul>
<li>sudo apt install npm</li>
<li>sudo apt install nodejs</li>
<li>sudo apt install dotenv</li>
</ul>

Edit your environment variables inside of your directory and add your API key and change your node name.
<ol>
<li>Sudo nano .env</li>
<li>Paste and edit the variables below</li>
</ol>

APIKEY="myapikey"<br>
NODENAME="my node name"<br>
CHOSEN='"I've been chosen"'

Add a Cron job to the bottom of your crontab to trigger the script. Test running the command before adding it to your crontab.
<ol>
<li>Sudo nano /etc/crontab</li>
<li>Edit and Paste the command below to the end of your crontab</li>
</ol>

*/5 * * * * root cd ~/path/to/my/script && node Notification.js


