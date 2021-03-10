const fetch = require("node-fetch");

const getNamesWithA = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const namesWithA = await users.filter((user) => user.username.includes("a"));
    console.log(namesWithA);
}

getNamesWithA();

