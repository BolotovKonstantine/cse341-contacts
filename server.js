const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require('./data/database');

app.use('/',require('./routes'));
app.use(bodyParser.json());

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Server started on port ${port} and Database is connected`)})
    }
})

