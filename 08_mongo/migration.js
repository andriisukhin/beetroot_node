const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

(async () => {
    const connect = await mongoClient.connect(url, { useNewUrlParser: true });
    console.log('Database created');

    const db = connect.db('bookmarks');

    const users = await db.createCollection('users');
    console.log('Collection created');

    await users.drop();
    console.log('Users removed');

    await users.insertMany([
        { 
            name : {first: "John", last: "Doe"},
            age: 30,
            email: "johndoe@gmail.com",
            passwordHash: "some_password_hash",
            logins: [
              {at: new Date(2018, 3, 4, 5, 6, 7), minutes: 20 },
              {at: new Date(2018, 3, 15, 16, 17), minutes: 18 },
              {at: new Date(2018, 4, 1, 2, 3, 4), minutes: 34 }
           ]
        },
        {
            name : {first: "Jane", last: "Wilson"},
	        age: 29,
	        email: "janewilson@gmail.com",
	        passwordHash: "another_password_hash",
            logins: [ 
                {at: new Date(2018, 5, 6, 7, 8, 9), minutes: 27},
                {at: new Date(2018, 5, 16, 17, 18), minutes: 50}
            ]
        },
        {
            name : {first: "Bob", last: "Smith"},
	        age: 37,
	        email: "bob.smith@gmail.com",
	        passwordHash: "last_password_hash",
	        logins: [ 
	            {at: new Date(2018, 2, 3, 4, 5, 6), minutes: 58},
	            {at: new Date(2018, 3, 3, 4, 5, 6), minutes: 20}
	         ]
        }
    ]);
    console.log('inserted');

    const u1 = users.findOne({"name.first": 'John'}),
        u2 = users.findOne({"name.first": 'Jane'}),
        u3 = users.findOne({"name.first": 'Bob'});

    const links = await db.createCollection('links');
    console.log('Collection links created');

    await links.drop();
    console.log("links remove");

    await links.insertMany([
        {
            title: "Frontend",
             url: "https://beetroot.academy/frontend",
             comment: "Great site for web tutorals",
             tags: ["tutorials", "dev", "code"],
             favorites: 100,
             userId: u1._id
         },
         {
             title: "Backend",
             url: "https://beetroot.academy/backend",
             comment: "Backend tutorials like none other",
             tags: ["php", "tutorials", "code"],
             favorites: 507,
             userId: u2._id
         },
         {
             title: "Web Design",
             url: "https://beetroot.academy/webdesign",
             comment: "The best screenshort courses ever",
             tags: ["screenshot", "tutorials"],
             favorites: 149,
             userId: u1._id
         },
         {
             title: "Python",
             url: "https://beetroot.academy/python",
             comment: "Python courses",
             tags: ["python", "tutorials"],
             favorites: 279,
             userId: u2._id
         },
         {
             title: "Mongodb.org",
             url: "http://mongodb.org",
             comment: "Really cool NoSQL database",
             tags: ["database", "development"],
             favorites: 79,
             userId: u3._id
         },
         {
             title: "Audible Audio Books",
             url: "http://www.audible.com",
             comment: "Good audio books",
             tags: ["books", "audio"],
             favorites: 10,
             userId: u2._id
         },
         {
             title: "Wikipedia",
             url: "http://wikipedia.org",
             comment: "The source of all knowledge",
             tags: ["information", "encyclopedia", "online", "wikis"],
             favorites: 187,
             userId: u3._id
         },
         {
             title: "Mobiletuts",
             url: "http://mobile.awesome.com",
             comment: "Great tutorials for developing on mobile devices",
             tags: ["mobile", "development"],
             favorites: 84,
             userId: u2._id
         },
         {
             title: "Amazon.com",
             url: "http://amazon.com",
             comment: "Where to buy things",
             tags: ["selling", "buying"],
             favorites: 329,
             userId: u1._id
         },
         {
             title: "ThemeForest",
             url: "http://themeforest.net",
             comment: "Where to byy the best website themes",
             tags: ["marketplace", "themes"],
             favorites: 654,
             userId: u1._id
         },
         {
             title: "CodeCanyon",
             url: "http://codecanyon.com",
             comment: "A marketplace for code",
             tags: ["code", "marketplace"],
             favorites: 217,
             userId: u1._id
         },
         {
             title: "Design-class",
             url: "http://design-class.com.ua",
             comment: "Courses design and programming",
             tags: ["design", "tutorials"],
             favorites: 100,
             userId: u2._id
         },
         {
             title: "GraphicRiver",
             url: "http://graphicriver.com",
             comment: "A marketplace for graphic",
             tags: ["marketplace", "graphics"],
             favorites: 543,
             userId: u1._id
         }
    ]);

    console.log('links inserted');

    connect.close();
})();
