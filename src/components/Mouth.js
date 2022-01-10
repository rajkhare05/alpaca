import React from 'react'
import importImages from '../ImportImages'

function Mouth({ changeMouth }) {
  const images = importImages(
    require.context('../assets/alpaca/mouth', false, /\.png/)
  )
  const mouths = [
    'default.png', 'astonished.png', 
    'eating.png', 'laugh.png', 'tongue.png'
  ]
  return (
    <div>
      <h4>Mouth</h4>
      {
        mouths.map(
          mouth => <button key={mouth} onClick={() => changeMouth(images[mouth])}>
            {mouth.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Mouth
