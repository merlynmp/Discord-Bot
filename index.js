const Discord = require("discord.js")

const TOKEN = "MTAyNjUzNTA3NzY2NjEwMzMxNg.GG8jZK.c0j5j5uPEQ493IbEPKLG8siaLKvKqyCwP9Jruw"

const client = new Discord.Client({
    intents : [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})


client.on("ready", () =>{
    console.log('Logged in!')
})

client.on("messageCreate", (message) => {
    if(message.content == "Hi Bot!") {
        message.reply("Hello! Thats me!")
    }
    else if(message.content == "How are you?") {
        message.reply("I am fine, thank you for asking :)")
    }
    else if(message.content == "That is good to hear.") {
        message.reply("I hope you are doing well too.")
    }
    else if(message.content == "I have to go, goodbye!") {
        message.reply("Goodbye you awesome person :D")
    }
})


client.login(TOKEN)