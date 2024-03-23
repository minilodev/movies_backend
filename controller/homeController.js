const Home = require('../models/home');
const router = require('../router/homeRouter');

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const homePage = (req, res) => {
    return res.json({ code: 200, msg: 'homepage is success', data: 0 })
};

const menu = (req, res) => {
    return res.json({ code: 200, msg: 'menu is success', data: 0 });
};

const banners = (req, res) => {
    const listImages = [
        {
            img0: 'https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tfw5LKySp7uEYJ3CUuD4TKx3s8y.jpg'
        },
        {
            img1: 'https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctxm191q5o3axFzQsvNPlbKoSYv.jpg'
        },
        {
            img2: 'https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg'
        },
        {
            img3: 'https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg'
        },
        {
            img4: 'https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg'
        },
    ]
    return res.json({ code: 200, msg: "banners is success", data: [listImages] });
};

const trailers = (req, res) => {
    const listTrailersLeft = [
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/zNugnnR5KEmq9EzLcl0Me1UmHYk.jpg',
            name: 'SPY X Family',
            description: 'Season 7 Coming to Max Jan 22',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/5qUq8oCHnMz4IodB3WRJ3rmAl83.jpg',
            name: 'Gia Đình × Điệp Viên',
            description: 'Trailer Chính Thức',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/h47vT6X82WlHoAcQpyhPW6I3gSj.jpg',
            name: 'Rick và Morty',
            description: 'Season 7 Coming to Max Jan 22',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/j64H7GlYSarltRHJOl75jxLTRV6.jpg',
            name: 'Rick và Morty',
            description: 'Season 7 Coming to Max Jan 22',
        },
        {
            id: 3,
            video: 'https://www.youtube.com/watch?v=ejWo1KHRYTI',
            image: 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/j64H7GlYSarltRHJOl75jxLTRV6.jpg',
            name: 'Rick và Morty',
            description: 'Season 7 Coming to Max Jan 22',
        },
    ];
    const listTrailersRight = [
        {
            notification: "This panel didn't return any results. Try refreshing it."
        }
    ]
    return res.json({ code: 200, msg: "trailers is success", data: [listTrailersLeft, listTrailersRight] });
}

const join = (req, res) => {
    const listJoin = [
        {
            image: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg',
            title: 'Join Today',
            description: 'Get access to maintain your own custom personal lists, track what you\'ve seen and search and filter for what to watch next—regardless if it\'s in theatres, on TV or available on popular streaming services like .',
            signup: 'Sign up',
            tip1: 'Enjoy Himawari ad free',
            tip2: 'Maintain a personal watchlist',
            tip3: 'Filter by your subscribed streaming services and find something to watch',
            tip4: 'Log the movies and TV shows you\'ve seen',
            tip5: 'Build custom lists',
            tip6: 'Contribute to and improve our database',
        }
    ]
    return res.json({ code: 200, msg: "join is success", data: listJoin });
}

const progress = (req, res) => {
    let tenArray = ["An", "Binh", "Chi", "Dung", "Hoa", "Khanh", "Minh", "Nam", "Quyen", "Tuan"];
    randomName = () => {
        let randomIndex = Math.floor(Math.random() * tenArray.length);
        return tenArray[randomIndex];
    }
    const listProgressRight = [
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
    ];

    const listProgressLeft = [
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
        {
            image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/b6JFYmPdGWww0bD0YzJCRTAZ3kt.png',
            name: randomName(),
            statisticalAllTime: random(10, 100),
            statisticalThisWeek: random(10, 100),
        },
    ]
    return res.json({ code: 200, msg: "progress is success", data: [listProgressRight, listProgressLeft] });
}



// --------------------------------- Create data Home --------------------------------- //
// --------------------------------- Send data from postman to Atlas --------------------------------- //

const createHome = async (req, res) => {
    const payload = req.body
    const postHome = await Home.create({
        image: payload.image,
        name: payload.name,
        date: new Date(),
        statistical: random(10, 100),
        category: payload.category,
    });
    return res.json(postHome);
};

//--------------------------------- Take data (Trending) ---------------------------------//

const getHomeTrending = async (req, res) => {
    const today = await Home.find(
        {
            date: { '$gte': new Date('1-10-2024') },
            category: "today",
        }
    );
    const thisWeek = await Home.find(
        {
            date: { '$lt': new Date('1-13-2024') },
            category: "this week",
        }
    );
    return res.json({ today, thisWeek });
};

//--------------------------------- Take data (Trailer) ---------------------------------//

const getHomeTrailer = async (req, res) => {
    return res.json({});
};

//--------------------------------- Take data (Popular) ---------------------------------//

const getHomePopular = async (req, res) => {
    const popular = await Home.find(
        {
            date: { '$gte': new Date('1-10-2024') },
            category: "this week",
        }
    );
    const inTheaters = [
        {
            notification: 'This panel didn\'t return any results. Try refreshing it.'
        }
    ]
    return res.json({ popular, inTheaters });
};

module.exports = {
    homePage,
    menu,
    banners,
    trailers,
    join,
    progress,
    // ----------------- //
    createHome,
    getHomeTrending,
    getHomeTrailer,
    getHomePopular
    // ----------------- //   
}