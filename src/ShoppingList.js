import React from 'react';



class ShoppingList extends React.Component{
    render(){
        return(
            <div className="Shopping-list">
                <h1>Shopping List for {this.props.name}</h1>        
                    <ul>
                        <li>Milk</li>
                        <li>Tea</li>
                        <li>Sugar</li>
                    </ul>
            </div>
        );
    }
}

export default ShoppingList;