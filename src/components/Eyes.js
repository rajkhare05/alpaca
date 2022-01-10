import React from 'react'
import importImages from '../ImportImages'

function Eyes({ changeEyes }) {
  const images = importImages(
    require.context('../assets/alpaca/eyes', false, /\.png/)
  )
  const eyes = [
    'default.png', 'angry.png', 'naughty.png',
    'panda.png', 'smart.png', 'star.png'
  ]
  return (
    <div>
      <h4>Eyes</h4>
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
