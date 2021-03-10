const express = require("express");
const port = process.env.PORT || 3911;
const { ApiWasUsed, readJson } = require("./appendix");

const app = express();
app.use(express.json());

app.get('/members/:name', async (req, res) => {
    try {
        await ApiWasUsed("1.wassef911@gmail.com", req.params.name);
        const data = await readJson("./src/csvjson.json");
        res.status(200).send(data);
    } catch (err) {
        res.status(404).send({ err });
    }
})

app.listen(port, () => {
    console.log(`Beb ma7loul : http://localhost:${port}`)
})