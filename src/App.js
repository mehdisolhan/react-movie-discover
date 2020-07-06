import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
import imagePath from './gitLogo.png';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      movieData:{}
    }
    this.getMovie = this.getMovie.bind(this);
  }

  getMovie(e){
    e.preventDefault();
    const movieGet = document.getElementById('movieInput').value;
    if(movieGet !== ''){
        fetch(`http://www.omdbapi.com/?apikey=2f4aee20&t=${movieGet}`)
        .then(result => result.json())
        .then(result => {
          this.setState({
            isLoaded:true,
            movieData:result,
            error:result.Response
          });
         },
        )
     }
  }
  render(){
     const { isLoaded } = this.state;
        return (
          <div className="App">
             <form onSubmit = {(e) =>this.getMovie(e)}>
              <div className="input-group mb-3">
                  <input id="movieInput" type="text" className="form-control" placeholder="Enter a movie name"/>
                  <div className="input-group-append">
                    <button id="btn" className="btn btn-outline-secondary" type="submit">SEARCH</button>
                  </div>                      
              </div>
              </form>    
            {isLoaded && <div id="result">
              <Movie movie = {this.state.movieData}></Movie>
            </div>}
            <div className="badgeContainer">
               <span className="badgeGit">MEHDİ SOLHAN, {( new Date().getFullYear())}</span>
               <a href="https://github.com/mehdisolhan/movie-discover" rel="noopener noreferrer" target="_blank"> <img src={imagePath} alt="source code"></img></a>
            </div>
          </div>
        );
    }
  
}

export default App;
