import React, { Component } from 'react';

class Checker extends Component {
    componentDidMount() {
        this.fetchValues();
      }
        async fetchValues() {
            fetch("http://achterkant:5050/");
            console.log("in de Checker");
        }
    
    render() {
        return (
            <div>
                <h1>Dit is de checker!!</h1>
                <input
            
            onChange={(event) => this.fetchValues()}
          />
            </div>
          );
      }
}
export default Checker;