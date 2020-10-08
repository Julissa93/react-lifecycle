import React, {Component} from 'react';
import './App.css';
//Question 1: What is a React component? 
//Class or function that describes what we should render to the DOM. May hold state, can change the state, and will re-render, etc. 
//Question 2: How can I create a (class) component that renders "Hello World" to the DOM? * DEMO *
//This component (as simple as it was) had to go through a couple of "stages" before it got there on the DOM viewed by the client. 
//And these stages are known as the Component Lifecycle - like for humans, they go through different phases of life like child, adult, elderly, etc. 
//(I'm pretty sure there's way more phases than that) --> react components do too! Lol (probs not the best metaphor for the react component lifecycle but I digress)
/*
And those stages are (in this order): 
1. Mounting - (like bringing a newborn into the world...) This is the React component's first glimpse of life! Here is when a component is created and inserted into the DOM World. 
    --> constructor(), and render() get called. 
2. Updating - React component "grows", or better put, it goes through an UPDATING phase (this would happen if you called setState to update your component's state)
    --> componentDidUpdate() gets called
3. Unmounting - The final phase of a React component's life. The React component is removed or unmounted from the DOM. 
    --> componentWillUnmount()
*/


class App extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
    console.log('----- in constructor -----')
  }

  componentDidMount() {
    console.log('----- in componentDidMount -----')
  }

  componentDidUpdate() {
    console.log('----- in componentDidUpdate -----')
  }

  componentWillUnmount() {
    console.log('in componentWillUnmount')
  }

  render() {
    console.log('----- in render -----')
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <button onClick={() => this.setState({name: 'Janice'})} >Click Me to Change Name! </button>
      </div>
    )
  }
}

export default App;
