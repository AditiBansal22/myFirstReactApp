import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';

class ShoppingList extends React.Component   {
     render (){
     	return (
          <div className = "shopping-List">
            <h1>Shopping List {this.props.name}</h1>
            <ul>
               <li>Instagram</li>
               <li>Whatsapp</li>
               <li>Oculus</li>
            </ul>
          </div>
     		);
     }
}
ReactDOM.render(<ShoppingList />, document.getElementById('root'));