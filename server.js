// Import the express library here
const express = require ('express');
// Instantiate the app here
const app = express();
const PORT = process.env.PORT || 3000;

// function getElementById(num, resource){
//     resource.forEach(element => {
//         if (num = element.id){
//             console.log(element);
//             console;log(element.id);
//             return element;
//         }
//         else{
//             res.status(404).send();
//         }
//     });
// }

// Import and mount the datarouter
const datarouter = require('./database/datab');
const data = require('./database/datab');
const { json } = require('body-parser');


app.get("/allProducts", function (req, res) {
    const broughtDataB = data;
    if (broughtDataB) {
      res.send(broughtDataB);
    } else {
      res.status(404).send();
    }
  });

app.get('/OneProduct/:id', (req, res, next) => {
    let idt = req.params.id;
    // res.send(idt);
    console.log(typeof(idt));
    // console.log(foundObject);
    const foundObject = data.find(item => item.id == idt);

    if (foundObject) {
      res.send(foundObject);
      console.log(foundObject);
    } else {
      res.status(404).send();
    }
  });
  



// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
