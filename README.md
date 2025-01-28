# Discord Bot - IP Lookup Command

A simple Discord bot built with Node.js that allows users to get the geolocation of an IP address derived from a `conn` key.

## Features

- **IP Lookup**: Given a `conn` key, the bot converts it to an IP address.
- **Location Info**: Fetches geolocation data (e.g., city, country, region) for the given IP address using an external API.
- **Command**: The bot listens for the `!getip` command to trigger the lookup.

## Setup

### Prerequisites

Before running the bot, make sure you have the following:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- A Discord bot token (can be created via the [Discord Developer Portal](https://discord.com/developers/applications))
- A IP info provider api (I used [IPInfo](https://ipinfo.io/))

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/HakifKadriu/discordbot-convertConnToIp.git
    ```

2. Install the dependencies:

    ```bash
    cd discordbot-convertConnToIp
    npm install
    ```

3. Create a `.env` file to store your Discord bot token:

    ```plaintext
    DISCORD_TOKEN=your-bot-token
    IPINFO_TOKEN=your-ipinfo-token
    ```

4. Run the bot:

    ```bash
    node index.js
    ```

The bot should now be running and ready to respond to `!getip` commands in your Discord server.

### Example Command

When a user sends the command:

!getip 382E382E382E28

The bot will respond with:
```
The provided conn key is: 382E382E382E28 
Ip address: 8.8.8.8

Location {
  "ip": "8.8.8.8",
  "hostname": "dns.google",
  "city": "Mountain View",
  "region": "California",
  "country": "United States",
  "loc": "37.4056,-122.0775",
  "org": "AS15169 Google LLC",
  "postal": "94043",
  "timezone": "America/Los_Angeles",
  "anycast": true,
  "countryCode": "US",
  "countryFlag": {
    "emoji": "🇺🇸",
    "unicode": "U+1F1FA U+1F1F8"
  },
  "countryFlagURL": "https://cdn.ipinfo.io/static/images/countries-flags/US.svg",
  "countryCurrency": {
    "code": "USD",
    "symbol": "$"
  },
  "continent": {
    "code": "NA",
    "name": "North America"
  },
  "isEU": false
}
```

