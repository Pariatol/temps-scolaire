var fs = require('fs');

fs.readFile('new.json', 'utf8', (err, data) => {
  var lapin = JSON.parse(data).filter(item=> item.fields.hasOwnProperty("mercredi_matin_debut") == false);
  console.log(lapin);
  console.log(lapin.length)

  fs.writeFile('new3.json', JSON.stringify(lapin), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
   }
   )
