import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

import giphy from 'giphy-api';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    }
  }

  search = (query) => {
    // API Call
    giphy("iJJcUU3vNLOMIBJziqyBvvrAOvsmgJeD").search({
      q: query, 
      rating: "pg", 
      limit: 10
    },  (err, res) =>  {
      this.setState({
        gifs: res.data
      })
      });

  }
  render() {
  
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
