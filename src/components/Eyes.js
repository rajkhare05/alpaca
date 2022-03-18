import React from 'react'
import importImages from '../utils/ImportImages'

function Eyes({ changeEyes }) {
  const images = importImages(
    require.context('../images/eyes', false, /\.png/)
  )
  const eyes = [
    'default.png', 'angry.png', 'naughty.png',
    'panda.png', 'smart.png', 'star.png'
  ]
  return (
    <div className='grid-3x3-buttons'>
      {
        eyes.map(
          eye => <button key={eye} onClick={() => changeEyes(images[eye])}>
            {eye.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Eyes
