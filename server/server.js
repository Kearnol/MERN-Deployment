const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();

require(`../server/config/mongoose.config`);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended:true} ))
require(`./routes/pirates.routes`)(app)

app.listen(port, () => console.log(`Arrrr... ports be fired up on ${port}`))
