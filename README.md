# Discord Backup Bot

This Discord bot creates backups of a specified folder and sends them to a specific channel at regular intervals.

## Prerequisites

- Node.js installed on your machine
- Discord bot token
- Channel ID for the destination channel
- Folder path for the backup directory
- Discord.js v12

## Installation

1. Clone this repository or download the files.

2. Open a terminal or command prompt and navigate to the project folder.

3. Install the required dependencies by running the following command:
```npm install```

4. Open the `config.json` file and enter your Discord bot token, channel ID, and folder path.

5. Save the `config.json` file.

6. Run the `install.bat` script to start the bot setup process.

7. Follow the prompts in the console to enter your Discord bot token, channel ID, and folder path.

8. The bot will be set up and ready to use. It will create backups of the specified folder and send them to the designated channel every 2 hours.

## Configuration

You can modify the bot's behavior by adjusting the values in the `config.json` file. Make sure to restart the bot after making any changes to the configuration.

- `token`: Your Discord bot token.
- `channelId`: The ID of the channel where the backups will be sent.
- `folderPath`: The absolute path to the folder you want to back up.

## Usage

To start the bot, run the following command:
```node bot.js```

The bot will log in to Discord and begin creating backups at the specified intervals.

## Troubleshooting

If you encounter any issues during the setup or usage of the bot, please create a new issue in the repository or contact me through discord.

If you encounter any issues during the setup or usage of the bot, please refer to the troubleshooting section in this document or create a new issue in the repository.
