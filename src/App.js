import React, {Component} from 'react';
import './App.css';
import Feed from './feed'
import Loader from './loader'

//make the app able to pick which news sourse to use
//X need to put some information about different api urls into the system
//X create a form or dropdown box
//X ^ that would need to be connected to an event handler, which would pass information about the selection
//into a method
// take ^ that value and get articles from the matching api endpoint
// then display those articles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomFeed: [],
      feed: [],
      loader: <Loader/>,
      selection: ''
    }
    this.randomizer = this.randomizer.bind(this);
    this.selectSource = this.selectSource.bind(this);
  }

  randomizer() {
    // We want to render a set of six random news headlines from the API data.
    // We can simply use Math.floor() to create a random set of healines, but
    // one side effect is that we get duplicates. Therefore, we use the method below to
    // remove duplicates.
    let newsFeed = this.state.feed;
    let tmp = newsFeed.slice(newsFeed);
    let randomArray = [];
    // We use a for loop to iterate over the length of the array six time.
    // Then we grab a random news headline in each iteration, removing duplicates.
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * tmp.length);
      let removed = tmp.splice(index, 1);
      // Since we are only removing one element
      randomArray.push(removed[0]);
    }
    // Set state. When the button is clicked, set the state for randomFeed and the loader.
    this.setState({randomFeed:randomArray, loader: ''})
  }

  componentDidMount () { //makes the API call
  // Set your API URL with the API key.
  let url = `https://newsapi.org/v1/articles?source=${this.state.selection}&apiKey=b2ddacdcfd3940c1adb6827e1bd268eb`
  // We use regex to extra website name.
  let extract = url.match(/source=\=*(.*?)\s*&/).pop();
  // We set site name to state.
  this.setState({site: extract})
  // Fetch data from API
  fetch(url).then((response) => {
    return response.json()
  }).then((data) => {
    let articles = data.articles;
    this.setState({feed: articles})
  });
}

selectSource(event) {
  this.setState({
    selection: event.target.value//event gets passed into eventhandler what element etc.. the element is the event's target
  });
  let url = `https://newsapi.org/v1/articles?source=${event.target.value}&apiKey=b2ddacdcfd3940c1adb6827e1bd268eb`

  //Fetch data from API
  fetch(url).then((response) => {
    return response.json()
  }).then((data) => {
    let articles = data.articles;
    this.setState({feed: articles}, this.randomizer)//don't run it until after state is set
  });

}


render() {
  return (
    <div className="App row">
      <div className="col-md-12 hd">
        <select onChange={this.selectSource}>// dropdown container
        //display to user the name of newsource
          <option value="the-next-web">The Next Web</option>
          <option value="techradar">TechRadar</option>
          <option value="hacker-news">Hacker News</option>
        </select>
          <h1 className="hd-title">{this.state.selection}</h1>
          <h2 className="hd-sub">News Randomizer</h2>
      </div>
      {/* Pass in the child component*/}
      {/* Share state with the child*/}
      {/* Your code here*/}
      <Feed handleClick={this.randomizer} feed={this.state.randomFeed}/>
    </div>
  );
}
}

export default App;
