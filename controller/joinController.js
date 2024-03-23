const Join = require('../models/join');
const router = require('../router/joinRouter');


// --------------------------------- Create data Home --------------------------------- //
// --------------------------------- Send data from postman to Atlas --------------------------------- //

const createJoin = async (req, res) => {
    const payload = req.body
    const postJoin = await Home.create({
        image: payload.image,
        name: payload.name,
        date: new Date(),
        statistical: random(10, 100),
        category: payload.category,
    });
    return res.json(postJoin);
};

//--------------------------------- Take data (Trending) ---------------------------------//

const getJoin = async (req, res) => {
    return res.json({});
};






module.exports = {
    createJoin,
    getJoin
}