
const players = require('../controllers/playersController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Players:', req.method, req.url)
        next();
    });

    // /api
    router.get('/list', players.list);
    router.post('/add', players.add);

};