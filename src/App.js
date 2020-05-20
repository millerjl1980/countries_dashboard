import React, { Component } from 'react';
import './App.css';

//URL for all countries:
const ALL_COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all'

//URL for flag SVG
const FLAG_URL = country_code => `https://restcountries.eu/data/${country_code}.svg`

//URL for search function
// const COUNTRY_BY_NAME = countryName => `https://restcountries.eu/rest/v2/name/${countryName}`


class App extends Component {

  state = {
    countries: []
  };

  componentDidMount() {
    fetch(ALL_COUNTRIES_URL)
      .then(res => res.json())
      .then(countries => {
        this.setState({ countries })
      });
  }

  render() {
    const { countries = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Where in the World </h1>
          
        </header>
        <div>
          {countries.map(country => (
            <img
              alt={country.name}
              key={country.alpha3Code}
              src={FLAG_URL(country.alpha3Code.toLowerCase())}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
