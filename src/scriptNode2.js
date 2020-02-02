// donc yeah.json = écoles qui ont cours le mercredi matin

var fs = require('fs');

fs.readFile('tempssco.json', 'utf8', (err, data) => {
  var lapin = JSON.parse(data).filter(item=> item.fields.hasOwnProperty("mercredi_matin_debut") == true);
  console.log(lapin);
  console.log(lapin.length)

  fs.writeFile('yeah.json', JSON.stringify(lapin), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
   }
   )
