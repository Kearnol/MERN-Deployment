const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost/pirateCrew", {
    useNewURLParser: true,
    useUnifiedTopology: true
})
.then( () => console.log("Swabbin the db decks, Cap'n!"))
.catch(err => console.log(err))
