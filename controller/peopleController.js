const People = require('../models/people');
const router = require('../router/peopleRouter');




// --------------------------------- Create data HomeComponent --------------------------------- //
// --------------------------------- Send data from postman to Atlas --------------------------------- //

const createPeople = async (req, res) => {
    const payload = req.body
    const postHomeComponent = await People.create({
        id: payload.id,
        avatar: payload.avatar,
        nameAuthor: payload.nameAuthor,
        role: payload.role,
        credits: payload.credits,
        gender: payload.gender,
        birthday: payload.birthday,
        placeOfBirth: payload.placeOfBirth,
        aka: payload.aka,
        contentScore: payload.contentScore,
        biography: payload.biography,
        knownForImage: payload.knownForImage,
        knownFor: payload.knownFor,
        acting: payload.acting,
        production: payload.production,
        creator: payload.creator,
    });
    return res.json(postHomeComponent);
}

//--------------------------------- Take data (Trending) ---------------------------------//

const getPeoplePerson = async (req, res) => {
    const person = await People.find(
        {
            id: { '$gte': 1 }
        }
    )
    return res.json({ person });
}


module.exports = {
    createPeople,
    getPeoplePerson,
}