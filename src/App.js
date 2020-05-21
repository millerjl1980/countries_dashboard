import React, { Component } from 'react';
import { Button, Form, FormControl, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Possible dark mode implementation
// https://www.youtube.com/watch?time_continue=215&v=MMivyJS49jU&feature=emb_logo

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
              <Form inline>
              <FormControl type="text" placeholder="Search for a country..." className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
              </Form>
            </header>
            <div class="card-deck">
              {countries.map(country => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={FLAG_URL(country.alpha3Code.toLowerCase())} />
                <Card.Body>
                  <Card.Title>{country.name}</Card.Title>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>Population:  {country.population}</ListGroupItem>
                <ListGroupItem>Region:  {country.region}</ListGroupItem>
                <ListGroupItem>Capital:  {country.capital}</ListGroupItem>
                </ListGroup>
                {/* <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
              </Card>
              ))}
              </div>
      </React.Fragment>
      );
    }
  }

  export default App;
