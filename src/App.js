import React, { useState } from 'react'
import styled from 'styled-components'
import AddBike from './components/AddBike'
import BikeList from './components/BikeList'
import './App.css';

const DUMMY_DATA = [
  {brand: 'BMC', model: 'URS', size: 'S', color: 'orange'},
  {brand: 'Pinarello', model: 'Dogma F', size: '47', color: 'silver'},
  {brand: 'Santa Cruz', model: 'TallBoy', size: 'S', color: 'blue'},
  {brand: 'TIME', model: 'ADH01', size: 'XS', color: 'blue'}
]

const App = () => {

  const [ bikes, setBikes ] = useState(DUMMY_DATA)

  const addBike = (bike) => {
    setBikes((prevBikes) => {
      return [bike, ...prevBikes]
    })
  }

  return (
    <Main>
      <AddBike onAddBike={addBike}/>
      <BikeList bikes={bikes} />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display:flex;
  flex-direction:column;
  height:calc(100vh - 42px);
  padding:20px;
  gap:20px;
  background-color:#f2f2f2;

  @media (min-width:768px) {
    flex-direction:row;
  }
`


