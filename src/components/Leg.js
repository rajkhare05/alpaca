import React from 'react'
import importImages from '../ImportImages'

function Leg({ changeLeg }) {
  const images = importImages(
    require.context('../assets/alpaca/leg', false, /\.png/)
  )
  const legs = [
    'default.png', 'bubble-tea.png', 
    'cookie.png', 'game-console.png', 
    'tilt-backward.png', 'tilt-forward.png'
  ]
  return (
    <div>
      <h4>Leg</h4>
      {
        legs.map(
          leg => <button key={leg} onClick={() => changeLeg(images[leg])}>
            {leg.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Leg
