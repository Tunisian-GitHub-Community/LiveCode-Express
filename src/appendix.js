const sgMail = require("@sendgrid/mail");
const neatCsv = require('neat-csv');
const fs = require('fs')


const ApiWasUsed = async (email, name = "user") => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email,
            from: "1.wassef911@gmail.com",
            subject: `GTC API was used by${name}!`,
            text: "Let us know if you like the app.",
        };
        // await sgMail.send(msg);
        console.log(name, "used the api.");
    } catch (error) {
        console.log(error.response.body);
    }
};

const readJson = async (route) => {
    let rawdata = await fs.readFileSync(route);
    let members = JSON.parse(rawdata);
    return members
}

module.exports = { ApiWasUsed, readJson };
