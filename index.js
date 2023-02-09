import app from "./server.js"
import mongodb from "mongodb"
//import ReviewDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const uri = 'mongodb+srv://svzama:<Tanvir15>@cluster0.gmids4w.mongodb.net/?retryWrites=true&w=majority'
const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })

    .catch(err => {
        console.error(err.stack)
        process.exit(1)

    })

    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })