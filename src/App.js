import React from 'react'
import Navbar from './components/navbar/Navbar';
import {action,originals, comedy, horror} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rawpost'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Original' />
      <Rowpost url={action}title='Action' isSmall />
      <Rowpost url={comedy}title='Comedy' isSmall />
      <Rowpost url={horror}title='Horror' isSmall />
    </div>
  );
}
export default App;