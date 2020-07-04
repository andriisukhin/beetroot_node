const fetch = require('node-fetch');

async function getInfo(name) {
    const url = `http://api.github.com/users/${name}`;
    const r = await fetch(url);
    const body =  await r.json();
    if(r.status !== 200) {
        throw new Error(body.message);
    }
    return body;
}

async function showInfo(name) {
    const user = await getInfo(name);
    console.log(user.name);
    console.log(user.location);
}

showInfo('Sonyque')
.catch(e => console.log(e.message));