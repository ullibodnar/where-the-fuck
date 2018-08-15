import React from 'react'
import { StyledBurgerName } from './style'
import { contains, split } from 'ramda'

const BurgerName = ({ Event }) => {
  const burgerTitle = Event[0].name_of_burger
  const titleContainsBurger = checkForBurgerInTitle(burgerTitle)
  return (
    <StyledBurgerName>
      {burgerTitle + (titleContainsBurger ? '' : ' Burger')}
    </StyledBurgerName>
  )
}

function checkForBurgerInTitle (title) {
  const burgerWords = ['Burger', 'Bayger', 'Baoger', 'burger']

  for (let i = 0; i < burgerWords.length; i++) {
    if (contains(burgerWords[i], split(' ', title))) {
      return true
    }
  }
  return false
}

export default BurgerName
