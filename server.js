const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const app = express();
const apiPort = 3001;

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-ursxl6w1.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3001',
    issuer: 'https://dev-ursxl6w1.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());

const db = require('./models');
db.sequelize.sync();

require('./routes/item.routes')(app);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));