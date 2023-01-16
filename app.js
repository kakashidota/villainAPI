const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const villians = { allVillians: [{name: "Tri Pack", city:"Chicago", punchLine: "So long mothersucker"},
{name:"FireLord", city:"Hell", punchLine: "Its getting hot in here, so lets take of our clothes"},
{name: "Mr Freeze", city:"Gotham", punchLine: "Freeze, Im Freeze"} ]}

const firstNames = ["Tony", "Pablo", "Joel", "kent", "Jay", "Omar", "Maria", "Katalea"]
const lastNames = ["Skottlossning", "Sneaöga", "agent", "Panna", "Torpeden", "Kofot", "TV"]
const cities = ["Marbella", "Colombia", "Gårdsten", "Byn", "Bergsjön", "Hammarkullen", "Möllan", "Systembolget"]


app.get("/newentry", (req, res) => {
    newEntry()
    res.send("Added new data    ")
})

function newEntry(){
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    const fullName = randomFirstName + " " + randomLastName

    villians.allVillians.push({name: fullName, city: randomCity})
    
    return villians
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.get("/villians", (req, res) => {
    res.send(villians)
})


app.listen(PORT, () => {
    console.log("listening to port" + PORT)
    console.log(villians)
})