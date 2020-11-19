import React from 'react';
import axios from 'axios';

import './App.scss';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';
import History from './components/History';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requestData: null,
      resultsIn: null,
      loading: false,
      pastSearches: JSON.parse(localStorage.getItem('pastSearches')),
      method: 'GET',
    };
  }

  talkToApi = async (requestObj) => {

    this.toggleLoading()
    this.setState({ url: requestObj.url, data: requestObj.data });
    this.setState({ method: requestObj.method })

    try {
      let results = await axios(requestObj);
      this.getResults(results);
      this.saveToLocalStorage(requestObj)
    } catch (e) {
      console.log(e)
      this.toggleLoading();
      this.setState({ resultsIn: 'error', requestData: 'Bad Request' });
    }
  }

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  getResults = (requestData) => {
    this.toggleLoading();
    this.setState({ requestData, resultsIn: 'results' })
  }

  saveToLocalStorage = async (requestObj) => {
    await this.setState({ pastSearches: { ...this.state.pastSearches, requestObj } });
    let stringifiedObj = JSON.stringify(this.state.pastSearches);
    localStorage.setItem('pastSearches', stringifiedObj);
  }

  render = () => (
    <div className="App">

      <div className="Nav">
        <Header />
      </div>

      <div className="Body">
        <Form handleInput={this.talkToApi} defaultUrl={this.state.url} defaultMethod={this.state.method} defaultData={this.state.data} />

        <History pastSearches={this.state.pastSearches} talkToApi={this.talkToApi} />

        <Results data={this.state.requestData} resultsIn={this.state.resultsIn} loading={this.state.loading} />
      </div>

      <div className="Footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;