'use strict';

const catModel = require('./models/catModel.js');
const express = require('express');
const catRoute = require('./routes/catRoute');
const app = express();
const port = 3000;

// app.get('/cat', (req, res) => {
//   res.send('From this endpoint you can get cats.')
// });

/*
const cats = [
  {
    id: '1',
    name: 'Frank',
    birthdate: '2010-10-30',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    birthdate: '2015-12-25',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];
*/


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.route('/cat/:id')
.get((req, res) => {
	var testi = "You reqested a cat whose id is " + req.params.id;
	
	console.log("Kissojen pituus = ",catModel.cats.length);

/*
	for(var i=0;i<catModel.cats.length;i++) {
		console.log(catModel.cats[i]);
		if(catModel.cats[i].id == req.params.id) {
			testi = testi +" "+ catModel.cats[i].name;
			break;
		}
	}
*/	
	catModel.cats.forEach(cat => { if(cat.id == req.params.id) { testi = testi +" "+ cat.name } } )
	
    res.send(testi)
	
	console.log(testi)	
  })
  
/*
const getCat = async () => {
  const response = await fetch('./models/catModel.js');
  const json = await response.json();
  console.log(json.name);
};
*/

app.route('/cat')
 .get((req, res) => {
    res.send('From this endpoint you can get cats.')
  })
  .post((req, res) => {
    res.send('With this endpoint you can add cats.')
  })
  .put((req, res) => {
    res.send('With this endpoint you can edit cats.')
  })
  .delete((req, res) => {
    res.send('With this endpoint you can delete cats.')
  })


