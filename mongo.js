const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://slava:${password}@cluster0.r3u2bai.mongodb.net/numerot?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const puhelinSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Puhelinnumero = new mongoose.model("Puhelinnumerot", puhelinSchema)

const numero = new Puhelinnumero({
    name: "Joku",
    number: "6132874621"
})

// Puhelinnumero.find({}).then(result => {
//     result.forEach(thisnumero=> {
//        console.log(thisnumero) 
//     })
//     mongoose.connection.close()
// })

numero.save().then(result => {
    console.log("numero saved")
    mongoose.connection.close()
})