const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

(async () => {
    const connect = await mongoClient.connect(url, { useUnifiedTopology: true });
    const db = connect.db('bookmarks');

    const users = db.collection('users');
    const links = db.collection('links');
    const tags = db.collection('tags');

    await users.insertOne({ name: "Vasya"});
    const author = await users.findOne({ name: "Vasya"});
    const authorId = author._id;

    await links.insertOne({
        title: "front End",
        url: "some/beetroot/url",
        userId: authorId
    });

    const link = await links.findOne({title: "front End"});
    console.log(link);

    const user = await users.findOne({'_id': link.userId});
    console.log(user)

    connect.close();
})();