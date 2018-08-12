import React from 'react'
import { StyledBurgerName } from './style'

const BurgerDetails = ({ Event }) => {
  const burgerTitle = Event[0].name_of_burger
  const titleContainsBurger = checkForBurgerInTitle(burgerTitle) 
  return (
    <StyledBurgerName>
      {burgerTitle + (titleContainsBurger ? '' : ' Burger')}
    </StyledBurgerName>
  )
}

function checkForBurgerInTitle(title) {
  const burgerWords = ['Burger', 'Bayger', 'Baoger', 'burger']

for(let i = 0; i < burgerWords.length; i++) {
    if (title.includes(burgerWords[i])) {
      return true
    }
  }
  return false
}

export default BurgerDetails
