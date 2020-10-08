import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

//Question: What is a React component?
//Class or function that describes what we should render to the DOM. May hold state, can change the state, and will re-render, etc.
//No matter how simple a component is it has to go through a sequence of events or "stages" to get rendered on the browser.
//And these stages are known as the Component Lifecycle

/*
And those stages are (in this order): 
1. Mounting - (like bringing a newborn into the world...) This is the React component's first glimpse of life! Here is when a component is created and inserted into the DOM World. 
    1. constructor()
    2. render()
    3. componentDidMount()
2. Updating - React component "grows", or better put, it goes through an UPDATING phase. This would happen if you called setState to update your component's state)
    1. render()
    2. componentDidUpdate() 
3. Unmounting - The final phase of a React component's life. The React component is removed or unmounted from the DOM. 
  We click on a link that takes us somewhere else, close the tab, etc. 
  This is the ideal place to perform any necessary cleanup such as clearing up timers, cancelling network requests, or cleaning up any subscriptions that were created in componentDidMount()
    1. componentWillUnmount()

Now that we understand what phases a React component will go through, we can now learn about what methods React makes available at each phase.
Because React gives us specific methods that allow us to HOOK into these lifecycle events. 

*/

import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Julissa',
      pokemon: []
    };
    this.handleClick = this.handleClick.bind(this)

    console.log('in constructor!!!!')
  }

  async componentDidMount() {
    console.log('in componentDidMount!!!')
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
    console.log('RESULT: ', data.results)
    this.setState({pokemon: data.results})
  }

  componentDidUpdate() {
    console.log('in componentDidUpdate!!!!', this.state)
  }

  handleClick() {
    this.setState({user: 'Ben'})
  }

  render() {
    console.log('in render!!!!')
    const pokemon = this.state.pokemon;
    return (
      <center>
        <h1>Welcome {this.state.user}!</h1>
        <button onClick={this.handleClick}>Click Me! </button>
        <ul>
          {
            pokemon.map((pokemon, index) => {
              return <li key={index}>Name: {pokemon.name}</li>
            })
          }
        </ul>
      </center>
    );
  }
}

export default App;


export default App;
