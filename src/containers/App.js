import './App.css';

import Layout from '../components/Layout/Layout';
import Search from '../components/Search/Search';
import ListingData from '../data/stays.json';
import Listings from '../components/Listings/Listings';

const listings = ListingData;

function App() {
  return (
    <div>
    <Layout>
      <Search />
      <div className="listings">
        <Listings listings={listings}/>
      </div>
    </Layout>
    </div>
  );
}

export default App;
