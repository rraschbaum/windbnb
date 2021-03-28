import React, { Component } from 'react';

import classes from './App.module.css';

import Layout from './components/Layout/Layout';
import ListingData from './data/stays.json';
import Listings from './components/Listings/Listings';
import Toolbar from './components/Toolbar/Toolbar';
import Drawer from './components/Drawer/Drawer';
import Backdrop from './components/Backdrop/Backdrop'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    showDropdown: false
  }

  // Hide and show menu 
  // toggleMenuHandler = () => {
  //   const doesShow = this.state.showDropdown;
  //   this.setState({showDropdown: !doesShow})
  // }


  render() {

    const listings = ListingData;
    // let dropdown = null;

    // if(this.state.showDropdown) {
    //   dropdown = <Drawer />
    // }
    
    return (
      <div>
      <Drawer />
      <Backdrop />
      <Layout>
        {/* Button to show menu */}
        {/* <button onClick={this.toggleMenuHandler}>Click Me!</button> */}
        <Toolbar />
        <div className={classes.Listings}>
          <Listings listings={listings} />
        </div>
      </Layout>
      </div>
    );
  }
}




export default App;
