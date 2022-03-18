import React from 'react'
import importImages from '../utils/ImportImages'

function Hair({ changeHair }) {
  const images = importImages(
    require.context('../images/hair', false, /\.png/)
  )
  const hairs = [
    'default.png', 'bang.png', 'curls.png',
    'elegant.png', 'quiff.png', 'short.png'
  ]
  return (
    <div className='grid-3x3-buttons'>
      {
        hairs.map(
          hair => <button key={hair} onClick={() => changeHair(images[hair])}>
            {hair.replace('.png', '')}
          </button>
        )
      }
    </div>
  )
}

export default Hair
