import React from 'react'
import Map from './Map'
import Profile from './Profile'
import './App.css'
import Table1 from './Table'

const App = () => {
  const products = ['milk' , 'chess' , 'pride' , 'water' , 'pasta' , 'salt' , 'banana' , 'orang' , 'plum' , 'kiwi']

  const printProducts =products.map((product)=> <h1> {product} </h1> )

  return (
    <div className='website'>

     {/* {printProducts} */}

     {/* <br/> 
     
     <Map/> */}

     {/* //! axios Api  */}
      <Profile/>

      

      {/* <Table1/> */}
    </div>
  )
}

export default App