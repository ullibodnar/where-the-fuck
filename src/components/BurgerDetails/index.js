import React from 'react'

const style = {}

const imgStyle = {
    'width': '170px',
    'height': '109px'
}

const BurgerDetails = ({Event}) => {
//console.log('Burger deets: ', Event[Object.keys(Event)[0]].name_of_burger);
  return (
    <div style={style}>
        {Event[0] && Event[0].name_of_burger && <p>Why not try a fucking <h2>{Event[0].name_of_burger}</h2> Burger? </p> }
        {Event[0] && Event[0].image && <img style={imgStyle} src={Event[0].image} />}
    </div>
  )
}

export default BurgerDetails
