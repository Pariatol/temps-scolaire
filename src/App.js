import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fourDaysAndHalf:0,
      ville:'',
      firstSearch:false,
      doesntExist:false
    }
  }

  checkIfMercredi = (e) => {
    e.preventDefault();
    var data = require('./hellYeah.json');
    var form = document.querySelector("form");
    var i = 0;
    // dans l'expression régulière, on ajoute " " pour tenir compte de Paris, Marseille et Lyon, qui prennent, par ex, la forme "Paris 5e Arrondissement"
    var regExp = RegExp(form.elements.commune.value.toLowerCase()+" ");
    
    var searchResult = data.filter(item => {
      if(item.commune.toLowerCase()===form.elements.commune.value.toLowerCase() || regExp.test(item.commune.toLowerCase())){
        i++;
        if(item.mercredi_matin!==undefined){
          return item;
        }        
      } 
    })

    console.log(i)

    if(searchResult.length>0){
      console.log("oui, 4.5 jours")
      this.setState({
        ville:form.elements.commune.value,
        fourDaysAndHalf:true,
        doesntExist:false
      });
    } else if(searchResult.length === 0 && i>0) {
      this.setState({
        ville:form.elements.commune.value,
        fourDaysAndHalf:false,
        doesntExist:false
      });
    } else {
        this.setState({
          doesntExist:true
        })
        console.log('commune not')
    }
    this.setState({
      firstSearch:true
    });
  }

  render(){
    return (

      <div className="App">
        <Titre/>
        <SearchBar checkIfMercredi={this.checkIfMercredi}/>
        {
        !this.state.doesntExist?  

        !this.state.firstSearch?
        null
        :
        this.state.fourDaysAndHalf?
        <p className="result">Les écoles de {this.state.ville.toUpperCase()} sont soumises à la semaine de 4 jours et demi.</p>
        :<p className="result">Les écoles de {this.state.ville.toUpperCase()} ne sont pas soumises à la semaine de 4 jours et demi.</p>
        
        :
        <p className="result">Cette commune n'est pas enregistrée. Veuillez réessayer.</p>
        }
      </div>
    );
  }
}

export default App;


function Titre() {
  return (
    <React.Fragment>
      <h1 className="titre">Ecole le mercredi matin ?</h1>
      <h3 className="sousTitre">Vérifiez si les écoles publiques de votre commune pratiquent la semaine de 4 jours et demi</h3>
    </React.Fragment>
  )
}

function SearchBar(props) {

  return (
    <React.Fragment>
      <form onSubmit={(e)=>props.checkIfMercredi(e)}>      
      <input className="search" id="commune" name="commune" placeholder="Entrez le nom d'une commune" type="text"/>
      <input className="submitButton" type="submit" value="Valider"/>
      </form>
    </React.Fragment>
  )
}