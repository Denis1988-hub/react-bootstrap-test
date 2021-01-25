import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppJumbotron from '../app-jumbotron';
import AppServices from '../app-services';
import AppPortfolio from '../app-portfolio';
import AppContact from '../app-contact';
import AppFooter from '../app-footer';
import AppCarousel from '../app-carousel';
import './app.css';
import AppAccordion from "../app-accordion/app-accordion";


class App extends Component {

  state = {
    isOpen: false
  };

  showAbout = () => {
    setTimeout(() => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }, 30);
  };

  render() {

    const accordion  = this.state.isOpen && <AppAccordion/> ;

    return (
        <div>
          <AppHeader />
          <AppJumbotron showAbout={this.showAbout} accordion={accordion}/>
          <AppCarousel />
          <AppServices />
          <AppPortfolio />
          <AppContact />
          <AppFooter  />
        </div>
    );
  }
}

export default App;
