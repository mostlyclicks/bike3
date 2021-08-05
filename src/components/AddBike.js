import React, { useState } from 'react'
import styled from 'styled-components'

const AddBike = (props) => {

  const [ brand, setBrand ] = useState('')
  const [ model, setModel ] = useState('')
  const [ size, setSize ] = useState('')
  const [ color, setColor ] = useState('')


  const brandHandler = (event) => {
    setBrand(event.target.value)
  }

  const modelHandler = (event) => {
    setModel(event.target.value)
  }

  const sizeHandler = (event) => {
    setSize(event.target.value)
  }

  const colorHandler = (event) => {
    setColor(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    console.log('Hello')

    //bundle up data
    const bikeData = {
      brand: brand,
      model: model,
      size: size,
      color: color
    }

    //call addbike through props
    props.onAddBike(bikeData)

    //reset form
    setBrand('')
    setModel('')
    setSize('')
    setColor('')
  
  }

  return (
    <Section>
      <h1>Add a Bike</h1>
      <BikeForm onSubmit={submitHandler}>
        <FormControl>
          <label>Brand:</label>
          <input type="text" onChange={brandHandler} value={brand} />
        </FormControl>
        <FormControl>
          <label>Model:</label>
          <input type="text" onChange={modelHandler} value={model} />
        </FormControl>
        <FormControl>
          <label>Size:</label>
          <input type="text" onChange={sizeHandler} value={size} />
        </FormControl>
        <FormControl>
          <label>Color:</label>
          <input type="text" onChange={colorHandler} value={color} />
        </FormControl>
        <FormControl>
          <button type="submit">Submit</button>
        </FormControl>
        
      </BikeForm>

    </Section>
  )
}

export default AddBike



//STYLE COMPONENTS
const Section = styled.section`
  flex-basis:100%;
  flex:1;
  border:1px solid gray;
  padding:1rem;
  background-color:#fff;
`

const BikeForm = styled.form`

`

const FormControl = styled.div`
  display:flex;
  margin:1rem 0;
  width:100%;
  label {
    flex:1;
    font-size:16pt;
    text-align:right;
    padding:8px;
  }
  input {
    flex:4;
    font-size:14pt;
  }
  button {
    flex:4;
    align-item:flex-end;
    font-size:16pt;
    padding:.5rem;
  }
`


