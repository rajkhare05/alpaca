import React from 'react'
import importImages from '../utils/ImportImages'

function Ears({ changeEars }) {
  const images = importImages(
    require.context('../images/ears', false, /\.png/)
  )
  const ears = ['default.png', 'tilt-backward.png', 'tilt-forward.png']
  return (
    <div className='grid-3x3-buttons'>
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
