import React from 'react'
import importImages from '../utils/ImportImages'

function Leg({ changeLeg }) {
  const images = importImages(
    require.context('../images/leg', false, /\.png/)
  )
  const legs = [
    'default.png', 'bubble-tea.png',
    'cookie.png', 'game-console.png',
    'tilt-backward.png', 'tilt-forward.png'
  ]
  return (
    <div className='grid-3x3-buttons'>
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
