import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Starwars extends React.Component {
   //function OnLoad(){
   	return(
      axios.get('https://swapi.co/api/people/?page=1')
           .then(
               function(response){
                const users = response.data.results
                console.log( "Users object:" +users)
                })
         
         );
    //  }
 }

export default Starwars