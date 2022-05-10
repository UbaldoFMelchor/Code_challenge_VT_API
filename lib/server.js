const PartnerController = require('./controllers/PartnerController');
const express = require("express");
const { request, response } = require('express');
const app = express();
app.use(express.json());
const port = 3000

app.get("/", (request, response) => {
    response.json({message: "Welcome to Visual Thinking API!!! Woopa!!!"});
})

app.get("/v1/partners/", (request, response) => {
    const Partners = PartnerController.getPartnersList();
    response.json(Partners);
})

app.get("/v1/partners/emails", (request, response) => {
    const Partners = PartnerController.getPartnersWithCertification();
    response.json(Partners);
})

//app.get("/v1/partners/credits", (request, response) => {
    //const Partners = PartnerController.getPartnersUpto500Credits();
    //response.json(Partners);
//})

app.listen(port, () => {
    console.log(`Code Challenger API run in localhost:${port}`)
})
