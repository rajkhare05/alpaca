import React from 'react'
import importImages from '../utils/ImportImages'

function Mouth({ changeMouth }) {
  const images = importImages(
    require.context('../images/mouth', false, /\.png/)
  )
  const mouths = [
    'default.png', 'astonished.png',
    'eating.png', 'laugh.png', 'tongue.png'
  ]
  return (
    <div className='grid-3x3-buttons'>
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
