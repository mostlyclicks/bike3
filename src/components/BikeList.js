import React from 'react'
import styled from 'styled-components'



const BikeList = (props) => {

  const bikes = props.bikes

  return (
    <Section>
      <h1>Bike List</h1>
      {bikes.map((bike) => {

        return (
          <BikeItem>
            <BikeBrand>{bike.brand}</BikeBrand>
            <BikeModel>{bike.model}</BikeModel>
            <BikeSize>{bike.size}</BikeSize>
            <BikeColor>{bike.color}</BikeColor>
          </BikeItem>
        )
      })}
    </Section>
  )
}

export default BikeList

const Section = styled.section`
  flex-basis:100%;
  flex:1;
  border:1px solid gray;
  padding:20px;
  background-color:#fff;
`

const BikeItem = styled.li`
  display:flex;
  align-items:center;
  list-style:none;
  background-color:#f6f6f6;
  margin:5px 0;
  padding:.5rem;
`

const BikeBrand = styled.h2`
  font-size:14pt;
  font-weight:700;
  flex-basis:30%;
`

const BikeModel = styled.div`
  flex-basis:25%;
  
`

const BikeSize = styled.div`
  flex-basis:20%;
  
`

const BikeColor = styled.div`

`
