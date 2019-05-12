import React from 'react' ;
import ReactDOM from 'react-dom' ;
import axios from 'axios';
import './index.css';
const { useState } = React;

class Card extends React.Component {
    render() {
        return (
            <div style={{margin: '1em'}}>
                <div id={this.props.name}> {this.props.name} </div>
            </div>
        );
    }
}

class CardList extends React.Component {
    render() {
        return (
            <div>
                {this.props.cards.map(card => (
                    <Card {...card} />
                ))}
            </div>
        );
    }
}


function ShoppingList() {
        const [cards, setCards] = useState([]);

        const onClickGetUsers = () => {
            let swapi_url = "https://swapi.co/api/people/?page=1";
            axios.get(swapi_url)
                .then(function (response) {
                    setCards(response.data.results);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        return (
            <div>
                <button className="btn btn-default" onClick ={onClickGetUsers}>Star Wars</button>
                <CardList cards={cards} />
            </div>
        );
}
ReactDOM.render(<ShoppingList />, document.getElementById('root'));