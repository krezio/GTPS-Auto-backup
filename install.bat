@echo off

echo Bot setup
echo.

set /p token=Enter your Discord bot token: 
set /p channelId=Enter the destination channel ID: 
set /p folderPath=Enter the folder path for backups: 

echo { "token": "%token%", "channelId": "%channelId%", "folderPath": "%folderPath%" } > config.json

echo.
echo Configuration completed. You can now start the bot.

pause