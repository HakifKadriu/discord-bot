const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
const { getipinfo } = require("./ipinfo");

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Function to convert conn key to IP address
function connToIP(conn) {
  let dyshet = [];
  let ip = [];
  let fullip = "";

  // daj ndyshe
  for (let i = 0; i < conn.length; i += 2) {
    dyshet.push(conn.slice(i, i + 2));
  }

  for (let i = 0; i < dyshet.length; i++) {
    if (dyshet[i] === "2E") {
      dyshet[i] = ".";
    }
  }

  for (let i = 0; i < dyshet.length; i++) {
    if (dyshet[i] !== ".") {
      ip.push(dyshet[i].substring(1));
    } else {
      ip.push(dyshet[i]);
    }
  }

  for (let i = 0; i < ip.length; i++) {
    fullip += ip[i];
  }

  return fullip;
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!hello") {
    message.channel.send("Hello there! 👋");
  } else if (message.content === "!bye") {
    message.channel.send("Goodbye! ");
  }

  const msg = message.content.split(/ +/);

  if (["!getip"].includes(msg[0].toLowerCase())) {
    const conn = msg[1];

    const ip = connToIP(conn);

    const location = await getipinfo(ip);

    message.channel.send(
      `The provided conn key is: ${conn} \nIp address: ${ip}\n\nLocation ${JSON.stringify(location, null, 2)}`
    );
  }
});

client.on("guildMemberAdd", (member) => {
  member.send("Welcome to the server!");
});


client.login(process.env.DISCORD_API);
