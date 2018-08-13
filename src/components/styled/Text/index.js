import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
`
Text.displayName = 'StyledText'

const SmallText = Text.extend`

`
SmallText.displayName = 'SmallText'

const RestaurantDetails = Text.extend`
  font-size: 1.5em;
  color: #cccccc;
`
RestaurantDetails.displayName = 'StyledRestaurantDetails'

export { RestaurantDetails }
