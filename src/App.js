import './App.css';

import Layout from './components/Layout/Layout';
import Listing from './components/Listing/Listing';
import ListingData from './data/stays.json';

const listings = ListingData;

function App() {
  return (
    <div>
    <Layout>
      <Listing listings={listings}/>
    </Layout>
    </div>
  );
}

export default App;
