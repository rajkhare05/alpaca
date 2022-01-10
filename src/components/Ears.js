import React from 'react'
import importImages from '../ImportImages'

function Ears({ changeEars }) {
  const images = importImages(
    require.context('../assets/alpaca/ears', false, /\.png/)
  )
  const ears = ['default.png', 'tilt-backward.png', 'tilt-forward.png']
  return (
    <div>
      <h4>Ears</h4>
      {
        ears.map(
          ear => <button key={ear} onClick={() => changeEars(images[ear])}>
            {ear.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Ears
