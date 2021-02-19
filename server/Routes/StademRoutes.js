const Stadem = require('../controller/controllerStadem.js')

module.exports=(app) => {
app.post('/createStadem',Stadem.createStadem)
app.get('/findStadem',Stadem.FindStadem)
}