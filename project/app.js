const express = require('express');
const path = require('path');
const fs = require('fs');
const url= require('url');

const app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.get('/dashboard',function(req,res){
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/users.json').toString()));
    res.render('dashboard',{users});
});
// app.get('/Add', function (req, res) {
//   let q = url.parse(req.url, true).query;
//   let dataURL = JSON.stringify(q, null, 4);
// fs.readFile('./data/users.json', (err, data)=>{
//     if (err) throw err;
//     const dataFile = JSON.parse(data.toString());
//     dataFile.push(dataURL);
//     console.log(dataFile);
//     fs.writeFile('./data/users.json', dataFile, (err) => {
//         if (err) {
//             console.error(err)
//         }
//     });
// });
//res.send(`added`);
//});
app.listen(3000);
