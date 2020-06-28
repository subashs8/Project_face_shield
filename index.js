const { GoogleSpreadsheet } = require('google-spreadsheet');


doc = new GoogleSpreadsheet('1a0ciEHsPRt0zH8-8A3szwJlNXYVV6KOgGBGs-LY8dUY');
// loads sheets
doc.useApiKey('AIzaSyCWU0M9E0-f2g0WDskDyHaSVfvneW7c4iE');

(async() => {
    await doc.loadInfo();
    var sheet = await doc.sheetsByIndex[0];

    await doc.loadInfo(); // loads sheets
    var sheet = doc.sheetsByIndex[0]; // the first sheet
    await sheet.loadCells('A1:J2');
    var cellA1 = sheet.getCell(0, 0);
    var cellC3 = sheet.getCellByA1('J2');
    console.log(cellC3._rawData.formattedValue)

})()
const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "vash")

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

app.get('/', (req, res) => {
    doc = new GoogleSpreadsheet('1a0ciEHsPRt0zH8-8A3szwJlNXYVV6KOgGBGs-LY8dUY');
// loads sheets
    doc.useApiKey('AIzaSyCWU0M9E0-f2g0WDskDyHaSVfvneW7c4iE');
    (async() => {
        await doc.loadInfo();
        var sheet = await doc.sheetsByIndex[0];

        await doc.loadInfo(); // loads sheets
        var sheet = doc.sheetsByIndex[0]; // the first sheet
        await sheet.loadCells('A1:J2');
        var cellA1 = sheet.getCell(0, 0);
        var cellC3 = sheet.getCellByA1('J2');
        res.render('index', {
            number: numberWithCommas(cellC3._rawData.formattedValue)
        });

    })()

})

app.get('/count', (req, res) => {
    doc = new GoogleSpreadsheet('1zNekWknU_1GoeQBa7SNAEyI01ucvQLRKnxsOVhFHbvk');
// loads sheets
doc.useApiKey('AIzaSyCWU0M9E0-f2g0WDskDyHaSVfvneW7c4iE');
        res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    (async() => {
        await doc.loadInfo();
        var sheet = await doc.sheetsByIndex[0];

        await doc.loadInfo(); // loads sheets
        var sheet = doc.sheetsByIndex[1]; // the first sheet
        await sheet.loadCells('A1:A2');
        var cellA1 = sheet.getCell(0, 0);
        var cellC3 = sheet.getCellByA1('A2');
        res.send({count:numberWithCommas(cellC3._rawData.formattedValue)})

    })()

})
app.get("/about", (req, res) => {
    res.sendFile('views/about.html', { root: __dirname })
})
app.get("/contact", (req, res) => {
    res.sendFile('views/contact.html', { root: __dirname })
})
app.use(express.static('views'))

app.listen(port)
