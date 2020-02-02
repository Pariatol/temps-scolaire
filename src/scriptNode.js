var fs = require('fs');

fs.readFile('tempssco.json', 'utf8', (err, data) => {
  var lapin = JSON.parse(data).filter(item=> item.fields["multi_rythme"] == "O");
  console.log(lapin);
  console.log(lapin.length)

  fs.writeFile('new.json', JSON.stringify(lapin), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
   }
   )
