import React from 'react' ;
import ReactDOM from 'react-dom' ;
import axios from 'axios';
import  starWars from './starwars.js';
import './index.css';


class ShoppingList extends React.Component   {
     //state = {
     // users : [],
       
     //}
     
    //onClickGetUsers (){
      //https://swapi.co/api/people/?page=
       /* axios.get('https://swapi.co/api/people/?page=1')
             .then(function(response){
                const users = response.data.results
                console.log( "Users object:" +users)
             })
           }*/
           
          render(){
            return(
                <div>
                    {starWars.map(starWar =>starWar.name)}
                    <button className="btn btn-default">
                        Star Wars
                    </button>
                </div>
                );
          //);
      }  
}
    
   
            ReactDOM.render(<ShoppingList />, document.getElementById('root'));