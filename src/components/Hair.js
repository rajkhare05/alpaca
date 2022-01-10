import React from 'react'
import importImages from '../ImportImages'

function Hair({ changeHair }) {
  const images = importImages(
    require.context('../assets/alpaca/hair', false, /\.png/)
  )
  const hairs = [
    'default.png', 'bang.png', 'curls.png', 'elegant.png', 
    'fancy.png', 'quiff.png', 'short.png'
  ]
  return (
    <div>
      <h4>Hair</h4>
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
