# OTPushNotifications
This will help you set up a cron job that runs every 5 minutes that will search your otnode logs for specific phrases. A Notifiction will be sent to you with the log lines that we're found and are not older than 5 minutes. If no results are returned, then a notification will not be sent.<br>
By customizing the json config, you can configure the script to notify you about anything you want.
<br>

------------------------------------------------------------------------------------------------------------------------------------------------------------------
Install the 'Notify My Device' app from the app store and install it onto your mobile device.

Navigate to https://www.notifymydevice.com/ and create an account. Go to 'My applications' and create an application. Copy the API key and save it for later.

On your node:<br>
Install npm, nodejs
<ul>
<li>sudo apt install npm</li>
<li>sudo apt install nodejs</li>
</ul>

Create and edit a config.json file in your directory and copy the configuration from the example-config.json file.
<ol>
<li>Sudo nano config.json</li>
<li>Paste and edit the text from the example-config.json file into your config.json file</li>
</ol>

Add a Cron job to the bottom of your crontab to trigger the script. Test running the command before adding it to your crontab.
<ol>
<li>Sudo nano /etc/crontab</li>
<li>Edit and Paste the command below to the end of your crontab</li>
</ol>

*/5 * * * * root cd ~/path/to/my/script && node Notification.js


