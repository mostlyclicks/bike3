import React from 'react'
import styled from 'styled-components'
import AddBike from './components/AddBike'
import BikeList from './components/BikeList'
import './App.css';

const App = () => {
  return (
    <Main>
      <AddBike />
      <BikeList />
    </Main>
  );
}

export default App;

const Main = styled.div`

`


