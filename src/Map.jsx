import React from 'react'
import List from './List'

const Map = () => {

    const cars = [
        {id:1 ,brand:'BMW'},
        {id:2 ,brand:'Aude'},
        {id:3 ,brand:'KIA'},
    ]


  return (
      <div>
        <h1>Which car you have?</h1>
        {cars.map((car)=> <List brand={car.brand} bl7={car.id} /> )}
    </div>
  )
}

export default Map