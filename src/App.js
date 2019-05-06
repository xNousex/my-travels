import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import Travel from "./Travel";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">My travels</h1>
          </header>
          <Travel
              destination="Sydney, beautiful place!!"
              country='Autralia'
              photo="https://image.freepik.com/free-photo/beautiful-sydney-bay-view-sunset-from-mrs-macquarie-s-chair-viewpoint-evening_36331-15.jpg"
              distance="16965"
          />
            <Travel
                destination="Awesommmme!!!"
                country='Iceland'
                photo="https://image.freepik.com/photos-gratuite/cascade-landmark-blue-water-mountain_1232-4516.jpg"
                distance="2158"
            />
            <Travel
                destination="Surfin'USA!!!!!"
                country='USA'
                photo="https://image.freepik.com/photos-gratuite/coucher-du-soleil-santa-monica-californie-roue-pier-ferrys_79295-3336.jpg"
                distance="15952"
            />

        </div>
    );
  }
}
export default App;
