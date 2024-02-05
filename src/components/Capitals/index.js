import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapitalId: countryAndCapitalsList[0].id}

  onSelectCapital = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  getCountry = () => {
    const {selectedCapitalId} = this.state
    const countryObj = countryAndCapitalsList.find(
      eachObj => eachObj.id === selectedCapitalId,
    )
    return countryObj.country
  }

  render() {
    const {selectedCapitalId} = this.state
    const getCountry = this.getCountry()
    return (
      <div className="capitals-app-bg-container">
        <div className="capitals-app-card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            onChange={this.onSelectCapital}
            className="select-input"
            id="selectInput"
            value={selectedCapitalId}
          >
            {countryAndCapitalsList.map(eachObj => (
              <option className="option" value={eachObj.id} key={eachObj.id}>
                {eachObj.capitalDisplayText}
              </option>
            ))}
          </select>
          <label className="label" htmlFor="selectInput">
            is capital of which country?
          </label>
          <p className="capital">{getCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
