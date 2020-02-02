var fs = require('fs');

fs.readFile('tempssco.json', 'utf8', (err, data) => {
  var lapin = JSON.parse(data).map(item=> {
    return {
        commune:item.fields['commune'],
        departement:item.fields['departement'],
        region:item.fields['libelle_region'],
        mercredi_matin:item.fields['mercredi_matin_debut'],
        mercredi_matin_fin:item.fields['mercredi_matin_fin'],
        multi_rythme:item.fields['multi_rythme'],
        nom_etablissement:item.fields['nom_etablissement'],
        annee_scolaire:item.fields['annee_scolaire'],
        academie:item.fields['academie'],
        code_nature:item.fields['code_nature']
    }
      
  })
  console.log(lapin);


  fs.writeFile('hellYeah.json', JSON.stringify(lapin), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
   }
   )
